import nodemailer from "nodemailer";

async function sendEmail({ fromEmail, message, fromName }) {
  try {
    // Create a transporter object
    let transporter = nodemailer.createTransport({
      service: "gmail", // Email service
      auth: {
        user: process.env.EMAIL_USERNAME, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your email password
      },
    });

    // Set the email options
    let mailOptions = {
      from: `${fromEmail}`,
      to: "wismaagung23@gmail.com",
      subject: `Name: ${fromName}, from email: ${fromEmail}`,
      text: `${message}`,
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.messageId);
    return "Success";
  } catch (error) {
    console.log("Error sending email: " + error);
    return "Error";
  }
}

export { sendEmail };
