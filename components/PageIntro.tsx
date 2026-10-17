import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PageIntro({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="bg-zinc-50">
      <Breadcrumbs label={label} />
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-20 md:px-10 md:pt-16 md:pb-28">
        <div className="grid gap-8 md:grid-cols-2 md:gap-20">
          <div><p className="section-label">{label}</p><h1 className="max-w-xl text-balance text-4xl font-medium leading-tight md:text-5xl">{title}</h1></div>
          <div className="section-copy md:pt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function PageCta() {
  return <section className="bg-header px-6 py-16 text-header-foreground md:px-10 md:py-24"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="section-label">Your next step</p><h2 className="section-heading">Let’s talk about how you move.</h2><p className="mt-5 max-w-xl text-pretty leading-relaxed text-zinc-300">Tell us what you enjoy, what feels challenging and what you’d like to work towards.</p></div><Link href="/contact" className="section-button shrink-0">Get in touch</Link></div></section>;
}
