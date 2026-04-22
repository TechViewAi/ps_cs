// Vercel Serverless Function - Email Subscription Handler
// This function receives form submissions and sends an auto-reply email

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

        // Send auto-reply email using Resend
        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Powerful Intention <hello@powerfulintention.com>',
                to: email,
                subject: 'You are on the list ✨',
                html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    </head>
                    <body style="margin: 0; padding: 0; background-color: #f8f6f4; font-family: Georgia, 'Times New Roman', serif;">
                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f6f4; padding: 40px 20px;">
                            <tr>
                                <td align="center">
                                    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 550px;">
                                        <!-- Hero Image -->
                                        <tr>
                                            <td align="center" style="padding-bottom: 30px;">
                                                <img src="https://powerfulintention.com/assets/images/email-poster.png" alt="You're on the list!" width="500" style="max-width: 100%; height: auto; border-radius: 8px; display: block;">
                                            </td>
                                        </tr>

                                        <!-- Content -->
                                        <tr>
                                            <td style="color: #595354; font-size: 16px; line-height: 1.9; text-align: left; padding: 0 10px;">
                                                <p style="margin: 0 0 20px 0;">
                                                    Hi there,
                                                </p>
                                                <p style="margin: 0 0 20px 0;">
                                                    I'm so glad you're here.<br>
                                                    Thank you for joining the waitlist for Powerful Intention.
                                                </p>
                                                <p style="margin: 0 0 20px 0;">
                                                    This space was created for intentional living that feels soft, grounded, and realistic for everyday life — not overwhelming or performative.
                                                </p>
                                                <p style="margin: 0 0 20px 0;">
                                                    We're getting ready to launch, and this list will be the first to know when we do. You'll hear from me occasionally with updates, behind-the-scenes notes, and early access when the time comes. No spam. No pressure.
                                                </p>
                                                <p style="margin: 0 0 20px 0;">
                                                    If you're curious in the meantime, you can also find us on Instagram. I share small moments, reflections, and glimpses of what we're creating there — both on the brand page and my founder page.
                                                </p>
                                                <p style="margin: 0 0 8px 0;">
                                                    <a href="https://instagram.com/powerfulintention" style="color: #82574d; text-decoration: none;">→ @powerfulintention</a>
                                                </p>
                                                <p style="margin: 0 0 20px 0;">
                                                    <a href="https://instagram.com/anne.calinger" style="color: #82574d; text-decoration: none;">→ @anne.calinger</a>
                                                </p>
                                                <p style="margin: 0 0 20px 0;">
                                                    For now, you're officially on the list — and I'm grateful you found your way here.
                                                </p>
                                                <p style="margin: 0 0 5px 0;">
                                                    More soon,
                                                </p>
                                            </td>
                                        </tr>

                                        <!-- Signature -->
                                        <tr>
                                            <td style="padding: 30px 10px 0 10px;">
                                                <table width="100%" cellpadding="0" cellspacing="0">
                                                    <tr>
                                                        <!-- Logo Side -->
                                                        <td width="140" valign="top" style="padding-right: 20px; border-right: 1px solid #ad8682;">
                                                            <img src="https://powerfulintention.com/assets/images/logo-ring.png" alt="Powerful Intention" width="100" style="display: block; margin-bottom: 10px;">
                                                            <p style="color: #82574d; font-size: 11px; letter-spacing: 1px; margin: 0; text-align: center;">POWERFUL INTENTION</p>
                                                        </td>
                                                        <!-- Info Side -->
                                                        <td valign="top" style="padding-left: 20px;">
                                                            <p style="color: #595354; font-size: 15px; font-weight: 600; margin: 0 0 3px 0;">Anne Calinger</p>
                                                            <p style="color: #82574d; font-size: 13px; margin: 0 0 2px 0;">Founder</p>
                                                            <p style="color: #82574d; font-size: 13px; margin: 0 0 18px 0;">Powerful Intention</p>

                                                            <!-- Social Icons -->
                                                            <table cellpadding="0" cellspacing="0">
                                                                <tr>
                                                                    <td style="padding-right: 12px;">
                                                                        <a href="https://www.instagram.com/powerfulintention/" style="color: #82574d; font-size: 18px; text-decoration: none;">
                                                                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="22" height="22" alt="Instagram" style="opacity: 0.7;">
                                                                        </a>
                                                                    </td>
                                                                    <td style="padding-right: 12px;">
                                                                        <a href="https://www.facebook.com/profile.php?id=61575762962855" style="color: #82574d; font-size: 18px; text-decoration: none;">
                                                                            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="22" height="22" alt="Facebook" style="opacity: 0.7;">
                                                                        </a>
                                                                    </td>
                                                                    <td style="padding-right: 12px;">
                                                                        <a href="https://www.youtube.com/@powerfulintention" style="color: #82574d; font-size: 18px; text-decoration: none;">
                                                                            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" width="22" height="22" alt="YouTube" style="opacity: 0.7;">
                                                                        </a>
                                                                    </td>
                                                                    <td style="padding-right: 12px;">
                                                                        <a href="https://www.pinterest.com/powerfulintention/" style="color: #82574d; font-size: 18px; text-decoration: none;">
                                                                            <img src="https://cdn-icons-png.flaticon.com/512/145/145808.png" width="22" height="22" alt="Pinterest" style="opacity: 0.7;">
                                                                        </a>
                                                                    </td>
                                                                    <td style="padding-right: 12px;">
                                                                        <a href="https://www.threads.com/@powerfulintention" style="color: #82574d; font-size: 18px; text-decoration: none;">
                                                                            <img src="https://cdn-icons-png.flaticon.com/512/14079/14079772.png" width="22" height="22" alt="Threads" style="opacity: 0.7;">
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="https://linktr.ee/powerfulintention" style="color: #82574d; font-size: 18px; text-decoration: none;">
                                                                            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" width="22" height="22" alt="Linktree" style="opacity: 0.7;">
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>

                                        <!-- Footer -->
                                        <tr>
                                            <td align="center" style="padding-top: 40px;">
                                                <p style="color: #ad8682; font-size: 11px; margin: 0;">
                                                    © 2026 Powerful Intention
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </body>
                    </html>
                `,
            }),
        });

        if (!resendResponse.ok) {
            const errorData = await resendResponse.json();
            console.error('Resend error:', errorData);
            // Still redirect to thanks page even if email fails
        }

        // Also notify yourself about new signup
        await fetch('https://api.resend.com/emails', {
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

        // Redirect to thank you page
        res.redirect(303, '/thanks.html');

    } catch (error) {
        console.error('Subscription error:', error);
        // Redirect to thanks anyway to not break user experience
        res.redirect(303, '/thanks.html');
    }
}
