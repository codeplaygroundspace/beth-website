import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import heroImage from "@/public/hero/01.png";
import Footer from "@/components/Footer";
import { PageCta } from "@/components/PageIntro";

export const metadata: Metadata = { title: "How it works | FIT", description: "A practical introduction to the FIT approach, from understanding your goals to building a consistent movement routine." };

const steps = [
  ["Understand your starting point", "Begin with your goals, your current activity and the movements you find challenging. Consider what you want to feel more confident doing, whether that’s training, sport or everyday movement."],
  ["Give your routine a focus", "Bring mobility, strength and control together around a clear priority. Keep the starting point manageable, with exercises and a level of challenge that suit your experience."],
  ["Build it into your week", "Choose a rhythm you can maintain alongside your other activities. Give yourself time to practise, pay attention to how movements feel and avoid rushing to make everything harder."],
  ["Reflect and adjust", "Return to your original goals and notice what has changed. Your routine can develop as your confidence, capacity and priorities change."],
];
const faqs = [
  ["Do I need to be flexible or experienced?", "You don’t need to reach a particular flexibility milestone to start thinking about mobility. Your starting point and training experience should guide the level of challenge."],
  ["Is this just stretching?", "The FIT approach considers mobility alongside strength and movement control. Stretching can be part of a routine, but it isn’t the whole picture."],
  ["How long should a routine take?", "There’s no single duration that suits everyone. Start by considering your goals and the time you can consistently make available, then discuss a suitable approach."],
  ["Can this sit alongside my sport or gym training?", "Your existing activities are part of the conversation. Think about how extra movement work fits into your week and your recovery, rather than simply adding more work."],
];

export default function HowItWorksPage() {
  return <><main id="main-content" className="flex-1">
    <section aria-labelledby="how-hero-heading" className="relative isolate flex min-h-[calc(100dvh-4rem-1px)] flex-col justify-between bg-header text-header-foreground">
      <Image src={heroImage} alt="" fill preload sizes="100vw" className="-z-20 object-cover object-[65%_center] md:object-center" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-header/45" />
      <Breadcrumbs label="How it works" />
      <div className="mx-auto w-full max-w-4xl px-6 pt-40 pb-12 md:px-10 md:pb-16 md:text-center">
        <p className="section-label">How it works</p>
        <h1 id="how-hero-heading" className="text-balance text-4xl font-medium leading-tight md:text-6xl">A clear starting point. A routine you can build on.</h1>
      </div>
    </section>
    <section aria-label="The FIT approach" className="bg-zinc-50 px-6 py-12 md:px-10 md:py-16"><p className="mx-auto max-w-3xl text-pretty leading-relaxed md:text-center">Understand how you move, choose what to focus on and make room for regular practice. Here’s the thinking behind the FIT approach.</p></section>
    <section className="px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><p className="section-label">The process</p><h2 className="section-heading mb-12">From intention to regular practice.</h2><ol className="divide-y divide-zinc-300">{steps.map(([title, copy],i)=><li key={title} className="grid gap-6 py-10 md:grid-cols-2 md:gap-20"><div className="flex items-start gap-6"><span className="text-3xl font-medium text-accent tabular-nums">0{i+1}</span><h3 className="max-w-sm text-balance text-2xl font-medium">{title}</h3></div><p className="section-copy">{copy}</p></li>)}</ol></div></section>
    <section className="bg-zinc-50 px-6 py-20 md:px-10 md:py-28"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-20"><div><p className="section-label">Common questions</p><h2 className="section-heading">Before you get started.</h2></div><dl className="divide-y divide-zinc-300">{faqs.map(([q,a])=><div key={q} className="pb-7 pt-7 first:pt-0"><dt className="text-pretty text-xl font-medium">{q}</dt><dd className="section-copy mt-4">{a}</dd></div>)}</dl></div></section><PageCta />
  </main><Footer /></>;
}
