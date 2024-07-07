// server.js
import React from "react";
import ReactDOMServer from "react-dom/server";
import ContactFormEmail from "./components/contactform";

export function renderEmail(message, senderEmail) {
  return ReactDOMServer.renderToString(
    React.createElement(ContactFormEmail, {
      message: message,
      senderEmail: senderEmail,
    })
  );
}
