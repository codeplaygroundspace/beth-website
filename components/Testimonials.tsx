"use client";

import { Button } from "@base-ui/react/button";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "Fantastic app, really great concept of being able to measure initial mobility and track progress. The daily routine it gives you is programmed to the most weak aspect from your first test. The instructions for each movement are pretty good, I'd probably want a little more detail on some of them. Scaling sometimes just says 'reduce range' which isn't always helpful but the stimulus tab is brilliant for informing what you should be feeling during the movement/stretch.",
    author: "Jack E",
    sample: false,
  },
  {
    quote: "Having a routine to follow takes the guesswork out of mobility work. I can fit a session around my training, and the clear instructions help me slow down and focus on how I move. It has made stretching feel like a part of my day that I want to come back to.",
    author: "Alex M",
    sample: true,
  },
  {
    quote: "I used to skip mobility because I never knew where to start. A little structure has made all the difference to my routine. I like being able to check in with my movement, work at my own pace and make time for the areas that need a bit more attention.",
    author: "Morgan R",
    sample: true,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const show = (index: number) => setActive((index + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" aria-roledescription="carousel" className="bg-background px-6 py-20 text-foreground md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-label">Testimonials</p>
        <div className="mb-6 flex items-center justify-center gap-4">
          <div role="img" aria-label="Five stars" className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} aria-hidden="true" size={24} strokeWidth={1.5} fill="currentColor" className="size-6 text-rating" />
          ))}
          </div>
          <p className="font-semibold text-[#141416]">45+ happy clients</p>
        </div>
        <h2 id="testimonials-heading" className="section-heading mx-auto max-w-2xl">
          Proud to be the highest rated mobility app
        </h2>
        <div className="mt-12 grid md:mt-14" aria-live="polite" aria-atomic="true">
          {testimonials.map(({ quote, author, sample }, index) => (
            <figure key={author} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${testimonials.length}`} aria-hidden={index !== active} data-active={index === active} className="invisible col-start-1 row-start-1 flex flex-col data-[active=true]:visible">
              <blockquote className="flex-1 text-pretty text-lg leading-7 text-[#141416] md:text-2xl">
                <p>{quote}</p>
              </blockquote>
              <figcaption className="mt-8 min-h-24 border-t border-zinc-300 pt-8 text-base font-semibold">
                {author}
                {sample && <span className="mt-2 block text-xs font-normal text-zinc-500">Sample testimonial</span>}
              </figcaption>
            </figure>
          ))}
        </div>
        <div role="group" aria-label="Testimonial controls" className="mx-auto mt-14 inline-flex items-center overflow-hidden rounded-2xl border border-zinc-300">
          <Button aria-label="Previous testimonial" onClick={() => show(active - 1)} className="flex size-12 cursor-pointer items-center justify-center border-r border-zinc-300 text-2xl hover:bg-zinc-100 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent">
            <ArrowLeft aria-hidden="true" size={20} strokeWidth={1.5} />
          </Button>
          <div className="flex items-center justify-center px-6">
            {testimonials.map(({ author }, index) => (
              <Button key={author} aria-label={`Show testimonial ${index + 1}`} aria-current={index === active ? "true" : undefined} onClick={() => show(index)} className="flex size-11 cursor-pointer items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent">
                <span aria-hidden="true" data-active={index === active} className="h-2 w-2 rounded-full bg-zinc-300 data-[active=true]:w-10 data-[active=true]:bg-foreground" />
              </Button>
            ))}
          </div>
          <Button aria-label="Next testimonial" onClick={() => show(active + 1)} className="flex size-12 cursor-pointer items-center justify-center border-l border-zinc-300 text-2xl hover:bg-zinc-100 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent">
            <ArrowRight aria-hidden="true" size={20} strokeWidth={1.5} />
          </Button>
        </div>
      </div>
    </section>
  );
}
