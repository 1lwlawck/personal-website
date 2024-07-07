import React from "react";
import ReactDOMServer from "react-dom/server";
import ContactFormEmail from "@/email/contact-form-email";

export function renderEmail(message: string, senderEmail: string) {
  return ReactDOMServer.renderToString(
    React.createElement(ContactFormEmail, {
      message: message,
      senderEmail: senderEmail,
    })
  );
}
