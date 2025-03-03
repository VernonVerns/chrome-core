const AWS = require("aws-sdk");
AWS.config.update({ region: "af-south-1" }); // Change region if necessary
const ses = new AWS.SES();

exports.handler = async (event) => {
    try {
        const { name, email, subject, message } = JSON.parse(event.body);
        
        if (!name || !email || !subject || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "All fields are required." })
            };
        }

        const emailHtml = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Contact Message</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; color: #dcc883; }
                    .email-container { background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); max-width: 900px; margin: auto; color: #426142; }
                    h2 { color: #426142; text-align: center; }
                    .email-content { margin-top: 10px; padding: 10px; background: #f9f9f9; border-left: 4px solid #dcc883; }
                    .email-footer { margin-top: 20px; font-size: 12px; color: #dcc883; text-align: center; }
                    a { color: #dcc883; text-decoration: none; }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <h2>New Contact Message</h2>
                    <div class="email-content">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message Subject:</strong> ${subject}</p>
                        <p><strong>Message Body:</strong></p>
                        <p>${message}</p>
                    </div>
                    <div class="email-footer">
                        <p>This message was sent from the contact page of <a href="https://chrome-core-dev.web.app/contact-us">chrome-core-dev.web.app</a></p>
                    </div>
                </div>
            </body>
            </html>`;

        const params = {
            Destination: {
                ToAddresses: ["fezekileplaatyi@myplusplus.com"], // Replace with actual recipient email
            },
            Message: {
                Body: {
                    Html: { Charset: "UTF-8", Data: emailHtml },
                    Text: { Charset: "UTF-8", Data: message }
                },
                Subject: { Charset: "UTF-8", Data: subject }
            },
            Source: "fezekileplaatyi@myplusplus.com", // Replace with a verified email in SES
        };

        await ses.sendEmail(params).promise();
        
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully!" })
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to send email." })
        };
    }
};