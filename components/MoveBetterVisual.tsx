"use client";

import Image from "next/image";
import phoneImage from "@/public/move/mobile.png";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@base-ui/react/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const sports = ["Sprint", "Swimming", "Bouldering", "Weightlifting", "Trail Running", "Running", "CrossFit", "Triathlon", "Bodybuilding", "Hyrox", "Golf"];

export default function MoveBetterVisual() {
  const [carouselRef, carousel] = useEmblaCarousel({ loop: true, align: "center", startIndex: 5 });

  return (
    <div className="move-visual" role="group" aria-label="Mobility routines for the sports you love" aria-roledescription="carousel">
      <Image src={phoneImage} alt="FIT app showing a mobility routine for specific body zones" width={1024} height={1536} sizes="auto, 100vw" className="move-phone" />
      <div ref={carouselRef} className="move-carousel">
        <div className="move-carousel-track">
          {sports.map((sport, index) => (
            <div className="move-sport-slide" key={sport} role="group" aria-roledescription="slide" aria-label={`${sport}, ${index + 1} of ${sports.length}`}>
              <div className="move-sport-card">
                <Image src="/move/carousel.png" alt="" width={2203} height={714} sizes="auto, 100vw" draggable={false} style={{ left: `calc(${-7 - index * 180}px * var(--sport-scale))` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="move-controls flex justify-center gap-2">
        <Button onClick={() => carousel?.scrollPrev()} aria-label="Previous sport" className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-zinc-300 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"><ArrowLeft aria-hidden="true" size={18} /></Button>
        <Button onClick={() => carousel?.scrollNext()} aria-label="Next sport" className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-zinc-300 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"><ArrowRight aria-hidden="true" size={18} /></Button>
      </div>
    </div>
  );
}
