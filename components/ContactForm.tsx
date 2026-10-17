"use client";

import { useActionState } from "react";
import { sendEnquiry, type EnquiryState } from "@/app/contact/actions";

export default function ContactForm() {
  const [state, action, pending] = useActionState<EnquiryState, FormData>(sendEnquiry, {});
  const field = "min-h-12 w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-invalid:border-red-700";
  if (state.success) return <div role="status" className="rounded-md border border-zinc-300 p-8"><h3 className="text-2xl font-medium">Thanks for getting in touch.</h3><p className="section-copy mt-4">{state.message}</p></div>;
  return <form action={action} aria-busy={pending} className="space-y-6">
    <div><label htmlFor="contact-name" className="mb-2 block text-sm font-medium">Your name</label><input id="contact-name" name="name" autoComplete="name" required maxLength={120} defaultValue={state.values?.name} aria-invalid={!!state.errors?.name} aria-describedby={state.errors?.name ? "name-error" : undefined} className={field} />{state.errors?.name && <p id="name-error" className="mt-2 text-red-700">{state.errors.name}</p>}</div>
    <div><label htmlFor="contact-email" className="mb-2 block text-sm font-medium">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} defaultValue={state.values?.email} aria-invalid={!!state.errors?.email} aria-describedby={state.errors?.email ? "email-error" : undefined} className={field} />{state.errors?.email && <p id="email-error" className="mt-2 text-red-700">{state.errors.email}</p>}</div>
    <div><label htmlFor="contact-message" className="mb-2 block text-sm font-medium">What would you like to work on?</label><p id="message-help" className="mb-3 text-pretty leading-relaxed text-zinc-600">Tell us about your goals, current activity and what you’re looking for. Please leave out private medical information.</p><textarea id="contact-message" name="message" required rows={6} maxLength={4000} defaultValue={state.values?.message} aria-invalid={!!state.errors?.message} aria-describedby={`message-help${state.errors?.message ? " message-error" : ""}`} className={field} />{state.errors?.message && <p id="message-error" className="mt-2 text-red-700">{state.errors.message}</p>}</div>
    <div hidden aria-hidden="true"><label htmlFor="contact-website">Leave this field empty</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <p className="text-pretty leading-relaxed text-zinc-600">We’ll use your name, email address and message to respond to your enquiry.</p>
    <button type="submit" disabled={pending} className="section-button cursor-pointer disabled:cursor-wait disabled:opacity-60">{pending ? "Sending enquiry…" : "Send enquiry"}</button>
    {state.message && <p role="alert" className="text-pretty leading-relaxed text-red-700">{state.message}</p>}
  </form>;
}
