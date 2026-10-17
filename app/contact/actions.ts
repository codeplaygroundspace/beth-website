"use server";

export type EnquiryState = {
  success?: boolean;
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  values?: { name: string; email: string; message: string };
};

export async function sendEnquiry(_previous: EnquiryState, form: FormData): Promise<EnquiryState> {
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();
  const values = { name, email, message };
  const errors: NonNullable<EnquiryState["errors"]> = {};
  if (!name || name.length > 120 || /[\r\n]/.test(name)) errors.name = "Enter your name using up to 120 characters.";
  if (email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) errors.email = "Enter a valid email address.";
  if (!message || message.length > 4000) errors.message = "Enter a message using up to 4,000 characters.";
  if (Object.keys(errors).length) return { errors, values, message: "Please check the highlighted fields." };
  if (form.get("website")) return { values, message: "Your enquiry could not be sent. Please try again." };
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_EMAIL;
  if (!apiKey || !from || !to) return { values, message: "Enquiries are temporarily unavailable. Please try again later." };
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: "New FIT website enquiry", text: `Name: ${name}\nEmail: ${email}\n\n${message}` }),
      signal: AbortSignal.timeout(15000),
    });
    const result = await response.json();
    if (!response.ok || typeof result.id !== "string") return { values, message: "We couldn’t send your enquiry. Your message is still here; please try again." };
    return { success: true, message: "Thank you. Your enquiry has been sent to FIT." };
  } catch {
    return { values, message: "We couldn’t send your enquiry. Your message is still here; please try again." };
  }
}
