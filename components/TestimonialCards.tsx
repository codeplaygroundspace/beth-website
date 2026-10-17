"use client";

import { Button } from "@base-ui/react/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

// Illustrative copy only. Replace with approved client quotes before publishing.
const testimonials = [
  { quote: "Having a routine that fits around my day makes it so much easier to stay consistent. I finally look forward to making time for mobility.", author: "Sarah J." },
  { quote: "I never really knew where to start with mobility. The guided exercises give me a clear focus and take the guesswork out of each session.", author: "Michael C." },
  { quote: "I love being able to work on my movement at home, at my own pace. It feels like a manageable part of my routine instead of another thing on my list.", author: "Emma R." },
  { quote: "The clear instructions help me pay attention to how I move. It is a lovely way to slow down and give myself a little time between busy days.", author: "Alex M." },
  { quote: "Mobility used to be the part of training I skipped. Having a plan to follow has helped me make space for it alongside the activities I enjoy.", author: "James T." },
  { quote: "I appreciate having exercises to come back to and a simple way to keep track of my routine. It helps me stay focused on taking small, consistent steps.", author: "Sophie L." },
];

export default function TestimonialCards() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(prefers-reduced-motion: reduce)": { duration: 0 },
    },
  });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => setActive(emblaApi.selectedScrollSnap() * (testimonials.length / emblaApi.scrollSnapList().length));
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
    return () => {
      emblaApi.off("select", update);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi]);

  return (
    <section id="testimonials" aria-labelledby="testimonial-cards-heading" aria-roledescription="carousel" className="bg-background px-6 py-20 text-foreground md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 id="testimonial-cards-heading" className="sr-only">Testimonials</h2>
        <div ref={emblaRef} className="overflow-hidden rounded-2xl">
        <div id="testimonial-cards" className="testimonial-cards-track flex touch-pan-y touch-pinch-zoom">
          {testimonials.map(({ quote, author }, index) => {
            return (
              <figure key={author} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${testimonials.length}`} className="testimonial-card flex min-w-0 shrink-0 pl-5">
                <div className="flex min-h-80 w-full flex-col rounded-2xl bg-zinc-100 p-6 lg:p-7">
                <div role="img" aria-label="Five stars, illustrative rating" className="mb-4 flex gap-0.5 text-rating">
                  {[0, 1, 2, 3, 4].map((star) => <Star key={star} aria-hidden="true" className="size-5" fill="currentColor" strokeWidth={0} />)}
                </div>
                <blockquote className="flex-1 text-pretty text-base italic leading-relaxed">
                  <p>“{quote}”</p>
                </blockquote>
                <figcaption className="mt-12 text-sm font-medium text-slate-600">{author}</figcaption>
                </div>
              </figure>
            );
          })}
        </div>
        </div>
        <p className="sr-only" role="status" aria-live="polite">Testimonial {active + 1} of {testimonials.length}</p>
        <div role="group" aria-label="Testimonial controls" className="mt-8 flex justify-center gap-2">
          <Button aria-label="Previous testimonial" aria-controls="testimonial-cards" onClick={() => emblaApi?.scrollPrev()} className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-zinc-100 text-foreground hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            <ChevronLeft aria-hidden="true" className="size-5" />
          </Button>
          <Button aria-label="Next testimonial" aria-controls="testimonial-cards" onClick={() => emblaApi?.scrollNext()} className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-zinc-100 text-foreground hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            <ChevronRight aria-hidden="true" className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
