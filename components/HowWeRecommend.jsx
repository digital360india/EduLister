import { Search, Eye, Users, ShieldCheck, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "We investigate",
    body: "We gather curriculum, fee, admission and boarding details from reliable sources.",
  },
  {
    icon: Eye,
    title: "We verify",
    body: "Our team reviews school claims and visits featured campuses wherever possible.",
  },
  {
    icon: Users,
    title: "We listen",
    body: "Conversations with parents and alumni add lived experience to the facts.",
  },
  {
    icon: ShieldCheck,
    title: "We recommend",
    body: "Independent counsellors match the evidence to your child's individual needs.",
  },
];

export function HowWeRecommend() {
  return (
    <section className="overflow-hidden bg-primary text-primary-foreground px-6 md:px-12 lg:px-20">
      <div className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-wider text-gold">Behind every recommendation</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">How we arrive at unbiased advice</h2>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
            We follow the same four-step process for every school, so your shortlist is shaped by evidence—not promotion.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div
            className="absolute bottom-8 left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gold/45 lg:block"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-10 left-6 top-10 w-px bg-gold/40 lg:hidden"
            aria-hidden="true"
          />
          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map(({ icon: Icon, title, body }, index) => (
              <li
                key={title}
                className="relative grid grid-cols-[3rem_1fr] gap-4 lg:block lg:text-center"
              >
                <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-2 border-gold bg-primary text-gold shadow-lg shadow-primary lg:mx-auto lg:h-16 lg:w-16">
                  <Icon size={22} />
                </div>
                <div className="pt-0.5 lg:pt-5">
                  <p className="text-xs font-semibold uppercase text-gold">Step {index + 1}</p>
                  <h3 className="mt-1 font-display text-xl text-primary-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl items-center justify-center gap-3 border-t border-primary-foreground/15 pt-7 text-center">
          <HeartHandshake size={22} className="shrink-0 text-gold" />
          <p className="font-display text-lg">
            The result: a shortlist built around your child—not a school's marketing budget.
          </p>
        </div>
      </div>
    </section>
  );
}