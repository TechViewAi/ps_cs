// Vercel Serverless Function - Freebie Form Handler
// Logs signups to Google Sheets via Apps Script webhook

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, source } = req.body || {};

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid email is required' });
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (!webhookUrl) {
        console.error('GOOGLE_SHEET_WEBHOOK_URL is not set');
        return res.status(200).json({ success: true, warning: 'webhook_not_configured' });
    }

    try {
        // POST to the Apps Script /exec URL. doPost runs on THIS request and
        // writes the row; Apps Script then 302-redirects to a googleusercontent
        // URL that serves the output. Following the redirect (default) is fine.
        const upstream = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, source }),
        });

        const bodyText = await upstream.text();

        // If Google bounced us to a login/permission page, the deployment is
        // not shared with "Anyone" — surface that clearly.
        const looksLikeLogin = /accounts\.google\.com|ServiceLogin|Sign in/i.test(bodyText);

        console.log('Google Sheets webhook response:', {
            status: upstream.status,
            finalUrl: upstream.url,
            looksLikeLogin,
            bodyPreview: bodyText.slice(0, 300),
        });

        return res.status(200).json({
            success: !looksLikeLogin && upstream.ok,
            upstreamStatus: upstream.status,
            looksLikeLogin,
            bodyPreview: bodyText.slice(0, 300),
        });
    } catch (err) {
        console.error('Google Sheets webhook error:', err);
        return res.status(200).json({ success: false, error: String(err) });
    }
}
