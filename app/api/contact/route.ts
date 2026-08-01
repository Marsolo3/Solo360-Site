import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, company, website, growGoal, supportType } = await request.json();

    // Basic Server-side Validation
    if (!name || !email || !growGoal) {
      return NextResponse.json(
        { error: "Name, email, and challenge details are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Set up nodemailer transporter (stripping spaces from the App Password if present)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.EMAIL_PASSWORD ? process.env.EMAIL_PASSWORD.replace(/\s+/g, "") : "",
      },
    });

    const receivers: string[] = [];
    if (process.env.RECEIVER_EMAIL_1?.trim()) {
      receivers.push(process.env.RECEIVER_EMAIL_1.trim());
    }
    if (process.env.RECEIVER_EMAIL_2?.trim()) {
      receivers.push(process.env.RECEIVER_EMAIL_2.trim());
    }

    if (receivers.length === 0) {
      if (process.env.RECEIVER_EMAIL?.trim()) {
        receivers.push(process.env.RECEIVER_EMAIL.trim());
      } else if (process.env.ADMIN_EMAIL?.trim()) {
        receivers.push(process.env.ADMIN_EMAIL.trim());
      } else {
        receivers.push("info@solo360.co");
      }
    }

    const receiverEmail = receivers.join(", ");

    // Design email contents
    const mailOptions = {
      from: `"${name}" <${process.env.ADMIN_EMAIL}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New Digital Strategy Request - ${name}`,
      text: `
New Digital Strategy Request received from Solo360 website:

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Website: ${website || "Not provided"}
Support Type: ${supportType || "Not selected"}

Challenge / Message:
${growGoal}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eae6db; border-radius: 12px; background-color: #FAF8F5;">
          <h2 style="color: #27272a; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">New Digital Strategy Request</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #52525b; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #27272a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #52525b;">Email:</td>
              <td style="padding: 8px 0; color: #27272a;"><a href="mailto:${email}" style="color: #D4AF37; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #52525b;">Company:</td>
              <td style="padding: 8px 0; color: #27272a;">${company || "<em>Not provided</em>"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #52525b;">Website:</td>
              <td style="padding: 8px 0; color: #27272a;">
                ${website ? `<a href="${website}" target="_blank" rel="noopener noreferrer" style="color: #D4AF37; text-decoration: none;">${website}</a>` : "<em>Not provided</em>"}
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #52525b;">Support Type:</td>
              <td style="padding: 8px 0; color: #27272a;">${supportType || "<em>Not selected</em>"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #ffffff; border-radius: 8px; border: 1px solid #eae6db;">
            <h4 style="margin: 0 0 10px 0; color: #27272a;">How can we help / Challenge:</h4>
            <p style="margin: 0; color: #52525b; white-space: pre-wrap; line-height: 1.5;">${growGoal}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("Nodemailer error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
