import { NextResponse } from "next/server"
import { Resend } from "resend"
import { adminEmailTemplate } from "@/emails/admin-template"
import { userEmailTemplate } from "@/emails/user-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const data = await request.json() // Fixed: changed req to request
    const { name, email, phoneNumber, subject, message } = data
    
    if (!name || !email || !phoneNumber || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Send email to admin
    const adminEmailData = await resend.emails.send({
      from: "info@emergingtrendsconference.com",
      to: "info@emergingtrendsconference.com", // Admin email
      subject: `Emerging Trends Conference. | New Contact Form Submission: ${subject}`,
      html: adminEmailTemplate(data), // Changed to use template function
    })

    // Send confirmation email to user
    const userEmailData = await resend.emails.send({
      from: "info@emergingtrendsconference.com",
      to: email, // User's email
      subject: "Emerging Trends Conference. | Thank you for contacting us",
      html: userEmailTemplate(data), // Changed to use template function
    })

    return NextResponse.json(
      {
        message: "Emails sent successfully",
        adminEmailId: adminEmailData.id,
        userEmailId: userEmailData.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }
}