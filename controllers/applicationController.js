const nodemailer = require("nodemailer");
const Application = require("../models/applicationModel");
require("dotenv").config();

const sendEmail = (formData, res) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL,
        subject: "New Application Submission",
        text: `New application received:\n\n
        Student Name: ${formData.studentName}
        Contact Number: ${formData.contactNumber}
        Address: ${formData.address}
        Parent Name: ${formData.parentName}
        PU College: ${formData.puCollege}
        Board Studied: ${formData.boardStudied}
        Course Attended: ${formData.courseAttended}
        Course Applying: ${formData.courseApplying}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("Error sending email:", err);
            return res.status(500).json({ message: "Email sending failed" });
        }
        console.log("Email sent: " + info.response);
        return res.status(200).json({ message: "Application submitted successfully" });
    });
};

exports.submitApplication = (req, res) => {
    const formData = req.body;

    Application.submitApplication(formData, (err, result) => {
        if (err) {
            console.error("Database Error: ", err);
            return res.status(500).json({ message: "Database error" });
        }

        sendEmail(formData, res);
    });
};
