import type { Metadata } from "next";
import { PageFaq } from "@/components/PageFaq";
import { ResponsibleNoticeBlock } from "@/components/ResponsibleNoticeBlock";
import { deepFeatures, whyChoose } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how bestcasinofinderuk.com reviews UK-licensed casinos, compares bonuses, and puts player safety first.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="px-4 pb-8 pt-12 sm:pt-16">
        <div className="glass-card mx-auto max-w-3xl p-6 sm:p-10">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">About Us</h1>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-silver sm:text-base">
            <p>
              Welcome to bestcasinofinderuk.com — an independent UK-focused guide to licensed online casinos. Our
              reviewers dig into bonuses, banking, game quality and player-protection tools so you can compare options
              with clearer context.
            </p>
            <p>
              Our goal is straightforward: spotlight operators that hold a valid UK Gambling Commission (UKGC) licence
              and meet solid standards for fairness, transparency and safer gambling.
            </p>
            <p>
              Every brand on our shortlists is assessed by our team. We look at licensing, catalogue depth, promo
              terms, payment reliability, support quality and responsible-gambling controls before a site earns a place
              on the page.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-white">Why Choose bestcasinofinderuk.com?</h2>
          <p className="mt-3 text-silver">Practical tools and reviews built around licensed UK play</p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => (
            <div key={item.title} className="glass-card p-5">
              <h3 className="font-display text-lg font-semibold text-accent">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-silver">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="glass-card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-accent">Range of Casino Offers</h2>
            <p className="mt-3 text-sm leading-relaxed text-silver sm:text-base">
              We map the mix of promotions available across UK-licensed platforms — from familiar household brands to
              newer operators. Each deal is checked for real value, clarity and reliability, whether you are scanning
              welcome packages, free spins, cashback or loyalty ladders.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {deepFeatures.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h3 className="font-display text-xl font-semibold text-accent">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageFaq />
      <ResponsibleNoticeBlock />
    </main>
  );
}
