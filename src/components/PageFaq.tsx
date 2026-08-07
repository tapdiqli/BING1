import { ChevronIcon } from "@/components/Icons";
import { faqs } from "@/data/content";

export function PageFaq({
  title = "Frequently Asked Questions",
  subtitle = "Common questions about UK online casinos",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold text-white">{title}</h2>
        <p className="mt-3 text-silver">{subtitle}</p>
      </div>
      <div className="mx-auto flex max-w-3xl flex-col gap-3">
        {faqs.map((item) => (
          <details key={item.q} className="faq-details glass-card overflow-hidden">
            <summary className="flex items-center justify-between gap-3 px-5 py-4">
              <span className="flex items-start gap-3 text-left">
                <span className="font-display text-lg font-bold text-accent">Q</span>
                <span className="font-medium text-accent-soft">{item.q}</span>
              </span>
              <ChevronIcon className="faq-chevron h-5 w-5 shrink-0 text-accent transition" />
            </summary>
            <div className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-silver">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
