const nodemailer = require('nodemailer');
const { errorHandler, hasMissingValues } = require('./utilities');

module.exports = async data => {
    // abandon if input error
    if (hasMissingValues(data)) {
        return errorHandler('missing data for contact form');
    }

    // get data values
    const { name, email, subject, message } = data;

    try {
        // create email body
        const emailBody = `
            <p>From: ${name} ${email}</p>
            <p>Subject: ${subject}</p>
            <p>Message: ${message}</p>
        `;

        // create SMTP transporter
        const transporter = nodemailer.createTransport({
            host: process.env.smtp_server,
            port: process.env.smtp_port,
            secure: true,
            auth: {
                user: process.env.smtp_user,
                pass: process.env.smtp_password,
            },
        });

        // send email
        await transporter.sendMail({
            from: process.env.from_email_address,
            to: process.env.to_email_address,
            subject: 'Botter Spotter Contact Form',
            html: emailBody,
        });

        return { error: false, error_message: '' };

    } catch (error) {
        return errorHandler('Error sending contact form email', error);
    }
};
