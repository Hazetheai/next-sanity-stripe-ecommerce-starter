import { contactEmail } from "config/general";
import { NextApiRequest, NextApiResponse } from "next";

export type ContactResponseData = {
  name: string;
  success: boolean;
  message: string;
  err: any;
};

export type ContactFormData = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ContactResponseData>
) => {
  const reqBody: ContactFormData = JSON.parse(req.body);

  const { email, message, subject, name } = reqBody;

  const contact = {
    name,
    email,
    subject: `Website Contact Form - ${subject}`,
    honeypot: ``, // if any value received in this field, form submission will be ignored.
    message,
    replyTo: `@`, // this will set replyTo of email to email address entered in the form
    accessKey: process.env.STATIC_FORMS_ACCESS_KEY, // get your access key from https://www.staticforms.xyz
  };

  try {
    const response = await fetch("https://api.staticforms.xyz/submit", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();

    if (json.success) {
      return res.status(200).json({
        success: true,
        message: `Thanks ${reqBody.name}! We'll reply to you at ${reqBody.email} as soon as we can.`,
        name: reqBody.name,
        err: undefined,
      });
    } else {
      throw Error(`Error relaying an email from ${reqBody.name}!`);
    }
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: `Sorry ${reqBody.name}, we encountered an error relaying your message. You can try a reset, or email us directly @ ${contactEmail}`,
      name: reqBody.name,
      err,
    });
  }
};
