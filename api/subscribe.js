// Vercel Serverless Function - Coming Soon Waitlist Handler
// Logs signups to Google Sheets (for Zapier -> Klaviyo welcome flow) and
// notifies the team. The subscriber-facing welcome email is now sent by
// Klaviyo's automated flow, not this function.

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Get the email from form data
        const { email } = req.body;

        // Validate email
        if (!email || !email.includes('@')) {
            return res.status(400).json({ error: 'Valid email is required' });
        }

        // Log the signup to Google Sheets so Zapier can pick it up and hand
        // the contact off to Klaviyo's general welcome flow.
        const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error('GOOGLE_SHEET_WEBHOOK_URL is not set');
        } else {
            try {
                const upstream = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: '', email, source: 'General' }),
                });

                const bodyText = await upstream.text();
                const looksLikeLogin = /accounts\.google\.com|ServiceLogin|Sign in/i.test(bodyText);

                console.log('Google Sheets webhook response:', {
                    status: upstream.status,
                    finalUrl: upstream.url,
                    looksLikeLogin,
                    bodyPreview: bodyText.slice(0, 300),
                });
            } catch (err) {
                console.error('Google Sheets webhook error:', err);
            }
        }

        // Notify the team about the new signup
        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Powerful Intention <hello@powerfulintention.com>',
                to: 'hello@powerfulintention.com',
                subject: 'New Waitlist Signup! 🎉',
                html: `<p>New subscriber: <strong>${email}</strong></p><p style="color: #666; font-size: 12px;">Sent from your Powerful Intention waitlist</p>`,
            }),
        });

        if (!resendResponse.ok) {
            const errorData = await resendResponse.json();
            console.error('Resend error:', errorData);
            // Still redirect to thanks page even if email fails
        }

        // Redirect to thank you page
        res.redirect(303, '/thanks.html');

    } catch (error) {
        console.error('Subscription error:', error);
        // Redirect to thanks anyway to not break user experience
        res.redirect(303, '/thanks.html');
    }
}
