import type { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated?: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main className="px-4 py-12 sm:py-16">
      <article className="glass-card mx-auto max-w-3xl p-6 sm:p-10">
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        {updated && <p className="mt-2 text-sm text-accent-muted">Last updated: {updated}</p>}
        {intro && <p className="mt-5 text-base leading-relaxed text-silver">{intro}</p>}
        <div className="legal-content mt-6 space-y-5 text-sm leading-relaxed text-silver sm:text-base">
          {children}
        </div>
      </article>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-xl font-semibold text-accent">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
