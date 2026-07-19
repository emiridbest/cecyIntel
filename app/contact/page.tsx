import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to Cecy Intelligence about data access, partnerships, or pilots.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact us"
        image={{ src: "/scientistPetridish.png", alt: "A scientist handling samples in petri dishes" }}
      >
        <p>
          If you need a dataset, hold data that belongs in this, or want to
          discuss a pilot, write to us. A person reads every message, and we
          reply within three working days.
        </p>
      </PageHeader>
      <section>
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-2xl">
                <span className="chip">Tell us what you&rsquo;re trying to do</span>
              </h2>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
                If your question is about how your organisation accesses health
                data today, the{" "}
                <a href="/survey" className="text-gold underline underline-offset-4 hover:text-gold-light">
                  five-minute survey
                </a>{" "}
                is the fastest way to get on our pilot list.
              </p>
              <ul className="mt-8 space-y-2 text-sm text-muted">
                <li>
                  <a href="tel:+2348141128514" className="hover:text-gold-light">
                    0814 112 8514
                  </a>
                </li>
                <li>
                  <a href="tel:+2347067013670" className="hover:text-gold-light">
                    0706 701 3670
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:cecyintelligence@afrihealthiq.com"
                    className="break-all text-gold underline underline-offset-4 hover:text-gold-light"
                  >
                    cecyintelligence@afrihealthiq.com
                  </a>
                </li>
              </ul>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/clinExam.png"
                alt="A clinician examining a patient during a consultation"
                loading="lazy"
                className="mt-10 max-h-64 w-full object-cover [clip-path:polygon(0_1.5rem,100%_0,100%_100%,0_100%)] sm:border-2 sm:border-gold-deep sm:[clip-path:none] lg:max-h-none"
              />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
