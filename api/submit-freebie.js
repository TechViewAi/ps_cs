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
            await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, source }),
            });
        } catch (err) {
            console.error('Google Sheets webhook error:', err);
        }
    }

    return res.status(200).json({ success: true });
}
