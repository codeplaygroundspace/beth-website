"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroOne from "@/public/hero-sports/01.png";
import heroTwo from "@/public/hero-sports/02.png";
import heroThree from "@/public/hero-sports/03.png";
import heroFour from "@/public/hero-sports/04.png";
import heroFive from "@/public/hero-sports/05.png";

const slides = [heroOne, heroTwo, heroThree, heroFour, heroFive];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [running, setRunning] = useState(false);
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!running || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [running, reducedMotion]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let inView = false;
    const update = () => setRunning(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    });
    observer.observe(section);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="hero-slider relative isolate grid overflow-hidden bg-header"
    >
      <div aria-hidden="true" className="absolute inset-0">
          {slides.map((src, index) => (
            <div key={src.src} className="hero-slider-image absolute inset-0" style={{ opacity: index === active ? 1 : 0 }}>
              <Image
                src={src}
                alt=""
                fill
                sizes="100vw"
                preload={index === 0}
                loading={index === 0 ? undefined : "eager"}
                className="object-cover object-[65%_center] md:object-center"
              />
            </div>
          ))}
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-header/65 md:bg-header/45" />
      <div className="relative mx-auto flex min-h-[calc(100dvh-4rem-1px)] w-full max-w-7xl items-end px-6 pt-24 pb-12 text-header-foreground md:min-h-[min(850px,calc(100dvh-4rem))] md:items-center md:px-10 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/80">Functional Imbalance Training</p>
          <h1 id="hero-heading" className="text-balance text-4xl font-medium leading-tight md:text-6xl">
            Move freely.<br />Build your strength.
          </h1>
          <p className="mt-6 max-w-lg text-pretty font-medium leading-relaxed text-zinc-100 ">
            Personalised strength and mobility training with Beth, built around how you move and what you want to work towards.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link href="/contact" className="section-button">Get in touch</Link>
            <Link href="/how-it-works" className="hero-secondary inline-flex min-h-12 items-center gap-2 text-sm font-semibold underline underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Explore the approach <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} className="shrink-0" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
