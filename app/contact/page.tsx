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
        image={{ src: "/scientistPetridish.jpg", alt: "A scientist handling samples in petri dishes" }}
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
            <div data-reveal="left">
              <h2 className="text-2xl">
                <span className="chip">Tell us what you&rsquo;re trying to do</span>
              </h2>
              <p className="mt-8 max-w-md leading-relaxed text-muted">
                If your question is about how your organisation accesses health
                data today, the{" "}
                <a href="/survey" className="text-gold underline underline-offset-4 hover:text-gold-light">
                  five-minute survey
                </a>{" "}
                is the fastest way to get on our pilot list.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  {
                    href: "tel:+2348141128514",
                    label: "0814 112 8514",
                    icon: <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z" />,
                  },
                  {
                    href: "tel:+2347067013670",
                    label: "0706 701 3670",
                    icon: <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z" />,
                  },
                  {
                    href: "mailto:cecyintelligence@afrihealthiq.com",
                    label: "cecyintelligence@afrihealthiq.com",
                    icon: <path d="M3 6h18v12H3zM3 7l9 6 9-6" />,
                  },
                ].map((row) => (
                  <a
                    key={row.href}
                    href={row.href}
                    className="group flex items-center gap-3 text-body transition-colors hover:text-gold"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6f4c10] text-white">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        {row.icon}
                      </svg>
                    </span>
                    <span className="break-all font-medium">{row.label}</span>
                  </a>
                ))}
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/clinExam.jpg"
                alt="A clinician examining a patient during a consultation"
                loading="lazy"
                className="mt-10 max-h-64 w-full rounded-2xl object-cover lg:max-h-none"
              />
            </div>
            <div data-reveal="right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
