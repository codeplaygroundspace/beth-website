import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";

export default function Footer() {
  return (
    <footer id="contact" className="bg-header px-6 py-12 text-header-foreground md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" aria-label="FIT home" className="inline-flex min-h-11 items-center self-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          <Image src={logo} alt="FIT — Functional Imbalance Training" className="h-[38.4px] w-auto" />
        </Link>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm">
            <li><Link className="footer-link" href="/how-it-works">How it works</Link></li>
            <li><Link className="footer-link" href="/about">About</Link></li>
            <li><Link className="footer-link" href="/contact">Contact</Link></li>
          </ul>
        </nav>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/15 pt-6 text-xs text-zinc-400 sm:flex-row sm:items-center">
          <p className="text-xs leading-relaxed text-zinc-400">Copyright © FIT - Funcional Imbalance Training. 2026. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
