import Link from "next/link";

export default function Breadcrumbs({ label }: { label: string }) {
  return (
    <nav aria-label="Breadcrumb" className="relative mx-auto w-full max-w-7xl px-6 py-6 md:px-10">
      <ol className="flex flex-wrap items-center gap-3 text-xs uppercase">
        <li><Link href="/" className="inline-flex min-h-11 items-center hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Home</Link></li>
        <li aria-hidden="true">/</li>
        <li aria-current="page">{label}</li>
      </ol>
    </nav>
  );
}
