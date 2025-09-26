"use server";

import { Resend } from "resend";
import { getErrorMessage } from "@/lib/utils";
import React from "react";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(formData: FormData) {
  const message = formData.get("message") as string;
  const senderEmail = formData.get("senderEmail") as string | string[];

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "hello@adarshchaudhary.in",
      subject: "Message from Contact Form",
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
      }),
      replyTo: senderEmail,
    });
  } catch (e) {
    const error = getErrorMessage(e);
    return { error };
  }
  return { data };
}
