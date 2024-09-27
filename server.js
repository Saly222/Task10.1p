const express = require("express");
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors()); 
app.use(bodyParser.json()); 

const mailgun = new Mailgun(formData);
const apiKey = process.env.MAILGUN_API_KEY; 
const domain = process.env.MAILGUN_DOMAIN; 
const mg = mailgun.client({ username: 'api', key: apiKey });

app.post('/sign-up', async (req, res) => {
    const { email } = req.body; 

    const emailData = {
        from: 'salykeu@gmail.com',
        to: email,
        subject: 'Welcome to DEV@Deakin!',
        text: 'Welcome to DEV@Deakin! We are excited to have you.',
        html: '<h1>Welcome to DEV@Deakin!</h1><p>We are excited to have you.</p>'
    };

    try {
        const body = await mg.messages.create(domain, emailData);
        res.json({ message: `Email sent successfully: ${body.message}` });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: `Error sending email: ${error.message}` });
    }
});

const PORT = 3002; 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
