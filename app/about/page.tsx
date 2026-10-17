import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import PageIntro, { PageCta } from "@/components/PageIntro";

export const metadata: Metadata = { title: "About Beth Bond | FIT", description: "Meet Beth Bond, personal trainer, and start a conversation about your strength, mobility and training goals." };

const principles = [
  ["Start with the person", "Your routine should make sense for your experience, your goals and the time you have. Begin with where you are today."],
  ["Connect strength and mobility", "Moving through a range of motion is one part of the picture. Building control and strength within that range matters too."],
  ["Make consistency practical", "A routine you can return to is more useful than an ambitious plan that never fits your week. Make room for gradual progress."],
];

export default function AboutPage() {
  return <><main id="main-content" className="flex-1">
    <PageIntro label="About Beth" title="Hi, I’m Beth. Let’s find your strength."><p>I’m Beth Bond, a personal trainer with a simple aim: to help you feel stronger, move with confidence and build a routine that feels like yours.</p></PageIntro>
    <section className="px-6 pt-10 md:px-10"><div className="mx-auto max-w-7xl"><p className="leading-relaxed text-zinc-600">Draft biography: placeholder copy for Beth to review before publication.</p></div></section>
    <section className="px-6 py-20 md:px-10 md:py-28"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-20"><div><p className="section-label">A little about me</p><h2 className="section-heading">Training should give you more than a good workout.</h2><Image src="/about/personal-trainer.png" alt="Personal trainer guiding a client through a kneeling side stretch" width={1254} height={1254} sizes="auto, 100vw" className="mt-8 h-auto w-full rounded-md" /></div><div className="space-y-6"><p className="section-copy">What interests me most about personal training is what happens beyond the session. Feeling more comfortable in the gym. Finding confidence in a movement you used to avoid. Having more energy for the things you enjoy.</p><p className="section-copy">That’s the thinking behind FIT, Functional Imbalance Training. I bring strength and mobility together, with time to understand how you move and what you want from your training.</p><p className="section-copy">I like to keep things clear and practical. We’ll talk, practise and build from your starting point, with space to ask questions and find what works for you.</p></div></div></section>
    <section className="px-6 py-20 md:px-10 md:py-28"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-20"><div><p className="section-label">Our approach</p><h2 className="section-heading">Move with purpose.</h2></div><div className="space-y-6"><p className="section-copy">Training isn’t only about how much you lift or how far you stretch. It’s also about how you feel and move during the activities that matter to you.</p><p className="section-copy">A difference between sides or a movement that feels unfamiliar can be a useful starting point for exploration. The aim is to build confidence and control, rather than chase a single idea of perfect movement.</p><Link href="/how-it-works" className="footer-link text-accent underline underline-offset-4">Explore how it works</Link></div></div></section>
    <section className="bg-zinc-50 px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><p className="section-label">Personal training</p><h2 className="section-heading mb-12">A considered approach to training.</h2><div className="divide-y divide-zinc-300">{principles.map(([title, copy], i)=><div key={title} className="grid gap-5 py-8 md:grid-cols-2 md:gap-20"><h3 className="text-xl font-medium"><span className="mr-5 text-accent tabular-nums">0{i+1}</span>{title}</h3><p className="section-copy">{copy}</p></div>)}</div></div></section>
    <PageCta />
  </main><Footer /></>;
}
