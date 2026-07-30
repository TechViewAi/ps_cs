// Vercel Serverless Function - Freebie Form Handler
// Logs signups to Google Sheets via Apps Script webhook

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, source } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid email is required' });
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (webhookUrl) {
        try {
            const payload = JSON.stringify({ name, email, source });

            // Google Apps Script returns a 302 redirect on POST.
            // Default fetch follows it as GET, so doPost never fires.
            // We intercept the redirect and re-POST to the redirect URL.
            const initial = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: payload,
                redirect: 'manual',
            });

            if (initial.status >= 300 && initial.status < 400) {
                const location = initial.headers.get('location');
                if (location) {
                    await fetch(location, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: payload,
                    });
                }
            }
        } catch (err) {
            console.error('Google Sheets webhook error:', err);
        }
    }

    return res.status(200).json({ success: true });
}
