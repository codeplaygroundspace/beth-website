import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact | FIT", description: "Start a conversation about your mobility, strength and movement goals." };

export default function ContactPage() {
  const email = process.env.CONTACT_EMAIL;
  return <><main id="main-content" className="flex-1"><PageIntro label="Contact" title="Tell us what you’d like to work towards."><p>Have a question about FIT or want to explore the approach? Start with a little about yourself and the activities that matter to you.</p></PageIntro>
    <section className="px-6 py-20 md:px-10 md:py-28"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-20"><div><p className="section-label">Start a conversation</p><h2 className="section-heading">Your goals. Your starting point.</h2><p className="section-copy mt-6">You don’t need to have everything figured out. A few lines about where you are now and what you’d like to change is a useful place to begin.</p>{email && <a href={`mailto:${email}`} className="footer-link mt-6 break-all text-accent underline underline-offset-4">{email}</a>}<div className="mt-12 border-t border-zinc-300 pt-8"><h3 className="text-xl font-medium">Still exploring?</h3><p className="section-copy mt-4">Read about the approach and common questions before getting in touch.</p><Link href="/how-it-works" className="footer-link mt-5 text-accent underline underline-offset-4">See how it works</Link></div></div><ContactForm /></div></section>
  </main><Footer /></>;
}
