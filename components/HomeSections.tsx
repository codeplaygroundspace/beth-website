import Image from "next/image";
import MoveBetterVisual from "./MoveBetterVisual";
import howItWorksImage from "@/public/app-screens/02.webp";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  { title: "Understand your movement", text: "Start with where you are today and the areas you want to work on." },
  { title: "Find your routine", text: "Bring strength and mobility together in a plan that fits your week." },
  { title: "Build consistency", text: "Use guided exercises and your training record to keep your routine in view." },
];

export function ChangingTheGame() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-20">
        <div>
          <p className="section-label">The FIT approach</p>
          <h2 id="about-heading" className="section-heading">More freedom in the way you move.</h2>
          <p className="section-copy mt-6">Strength and mobility belong together. FIT starts with understanding how you move, then making space for focused, regular practice.</p>
          <p className="section-copy mt-5">From your training sessions to your everyday routine, the aim is to build confidence in the movements that matter to you.</p>
          <Link href="/how-it-works" className="editorial-link mt-8">Discover the approach <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} className="shrink-0" /></Link>
        </div>
        <div>
          <Image src="/about/personal-trainer.png" alt="Personal trainer guiding a client through a kneeling side stretch" width={1254} height={1254} sizes="auto, 100vw" className="mx-auto h-auto w-full rounded-2xl" />
        </div>
      </div>
    </section>
  );
}

export function MoveBetterSection() {
  return (
    <section aria-labelledby="move-heading" className="overflow-hidden bg-background pt-20 md:pt-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <div>
          <p className="section-label">Move better</p>
          <h2 id="move-heading" className="section-heading">For the way<br className="hidden md:block" /> you love to move.</h2>

        </div>
        <div className="md:pt-10">
          <p className="section-copy">On the track, in the gym or out on the trails.</p>
          <p className="section-copy mt-6">Make mobility part of the activities that keep you coming back.</p>
        </div>
      </div>
      <MoveBetterVisual />
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="scroll-mt-24 bg-zinc-50 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl text-center">
        <p className="section-label">How it works</p>
        <h2 id="how-heading" className="section-heading">A little structure. A routine that fits.</h2>
        <p className="mx-auto mt-6 max-w-3xl text-pretty leading-relaxed">The FIT app gives your routine a place to live, with guided exercises and a record of your practice.</p>
        <Image src={howItWorksImage} unoptimized alt="Three app screens showing the Record calendar, Mobilise exercise list and guided exercise details" width={1440} height={1100} sizes="auto, 100vw" className="mx-auto mt-10 h-auto w-full max-w-3xl mix-blend-multiply" />
        <ol className="mt-12 grid gap-8 text-left md:grid-cols-3 md:gap-10">
          {steps.map(({ title, text }, index) => (
            <li key={title} className="pt-2">
              <span className="text-sm font-semibold tabular-nums text-accent">0{index + 1}</span>
              <h3 className="mt-4 text-balance text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-zinc-600">{text}</p>
            </li>
          ))}
        </ol>
        <Link href="/how-it-works" className="editorial-link mt-10">See how it works <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} className="shrink-0" /></Link>
      </div>
    </section>
  );
}



export function MeetBethSection() {
  return (
    <section aria-labelledby="beth-heading" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:gap-20">
        <div>
          <p className="section-label">The person behind FIT</p>
          <h2 id="beth-heading" className="section-heading">Personal training.<br />A personal approach.</h2>
        </div>
        <div>
          <p className="section-copy">Beth Bond brings strength and mobility together through FIT, Functional Imbalance Training. Start a conversation about your goals, your routine and the activities you enjoy.</p>
          <Link href="/about" className="editorial-link mt-6">Meet Beth <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} className="shrink-0" /></Link>
        </div>
      </div>
    </section>
  );
}
