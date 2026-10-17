"use client";

import { Dialog } from "@base-ui/react/dialog";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/public/logo.svg";

const links = [
  { label: "How it works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const breakpoint = getComputedStyle(document.documentElement).getPropertyValue("--breakpoint-md").trim();
    const desktop = window.matchMedia(`(min-width: ${breakpoint})`);
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b-[0.5px] border-[#455368] bg-[#141416] text-header-foreground">
      <Dialog.Root modal={false} open={open} onOpenChange={setOpen}>
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-8 px-6 md:px-10">
          <Link
            href="/"
            aria-label="FIT home"
            onClick={() => setOpen(false)}
            className="inline-flex min-h-11 shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <Image src={logo} alt="FIT — Functional Imbalance Training" preload className="h-[38.4px] w-auto" />
          </Link>
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-10">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} aria-current={pathname === href ? "page" : undefined} className="inline-flex min-h-11 items-center text-sm font-medium uppercase hover:text-accent aria-[current=page]:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Dialog.Trigger aria-label={open ? "Close menu" : "Open menu"} className="group flex size-11 cursor-pointer items-center justify-center rounded-sm hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:hidden">
            {open ? <X aria-hidden="true" size={24} strokeWidth={1.5} /> : <Menu aria-hidden="true" size={24} strokeWidth={1.5} />}
          </Dialog.Trigger>
        </div>
        <Dialog.Portal>
          <Dialog.Backdrop className="mobile-menu-backdrop" />
          <Dialog.Popup className="mobile-menu-panel text-header-foreground" aria-describedby={undefined}>
            <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>
            <nav aria-label="Mobile navigation" className="px-6 pt-10">
              <ul className="divide-y divide-white/15">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)} className="flex min-h-20 items-center py-5 text-2xl font-medium uppercase hover:text-accent aria-[current=page]:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
