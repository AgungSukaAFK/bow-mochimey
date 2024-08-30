import { sendEmail } from "@/lib/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, name, message, key } = await request.json();
  if (!email || !name || !message) {
    return NextResponse.json({
      status: 400,
      message: "Field not complete",
    });
  }

  if (key !== process.env.KEY) {
    return NextResponse.json({
      status: 400,
      message: "Illegal access denied.",
    });
  }
  let res = await sendEmail({
    fromEmail: email,
    fromName: name,
    message: message,
  });

  if (res === "Success") {
    return NextResponse.json({
      status: 200,
      message: "Email sent successfully",
    });
  } else {
    return NextResponse.json({
      status: 500,
      message: "Error sending email",
    });
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Method not supported",
  });
}
