const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com" || process.env.smtp_host,
    port: 587 || process.env.smtp_port,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.email, // email
        pass: process.env.password, // password
    },
    tls: {
        rejectUnauthorized: false
    }
})

// send mail with defined transport object
// args {from, to, subject, text, html}
const send = async (email) => {
    try {
        const to = process.env.target_email
        const info = await transporter.sendMail({...email,to})
        console.log("Message sent: %s", info.messageId)
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    send
}