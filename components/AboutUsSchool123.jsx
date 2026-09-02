import Link from "next/link";
import { Compass, GitCompareArrows, Bookmark, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About EduLister | Boarding School Discovery & Comparison",
  description:
    "Learn how EduLister helps parents discover, compare and shortlist the best boarding schools across India by curriculum, fees, facilities and reviews.",
  alternates: {
    canonical: "/about",
  },
};

const searchBy = [
  "Location",
  "Curriculum",
  "School type",
  "Boarding / Day school",
  "Boys / Girls / Co-ed",
  "Fees",
  "Grades offered",
  "Facilities",
  "Academic offerings",
  "Reviews",
  "Admission information",
];

const howItWorks = [
  { icon: Compass, title: "Discover", body: "Find schools that match your requirements." },
  { icon: GitCompareArrows, title: "Compare", body: "Evaluate schools across meaningful parameters." },
  { icon: Bookmark, title: "Shortlist", body: "Save schools you want to explore further." },
  { icon: Sparkles, title: "Match", body: "Use your preferences to discover schools that may be a good fit." },
  { icon: CheckCircle2, title: "Decide", body: "Use the information available to make a more informed decision." },
];

const revenue = [
  "School profile services",
  "Featured listings",
  "Promotional placements",
  "School subscriptions",
  "Qualified enquiries",
  "Advertising",
  "Partnerships",
  "Other clearly identified commercial services",
];

const schoolServices = [
  "Claim their profile",
  "Update information",
  "Add or manage profile content",
  "Respond to enquiries",
  "Improve their visibility through eligible promotional services",
];

const recommendationInputs = [
  "Child's grade",
  "Preferred location",
  "Budget",
  "Curriculum",
  "Boarding preference",
  "School type",
  "Gender preference",
  "Facilities",
  "Parent priorities",
];

export default function AboutUsSchool123() {
  return (
    <div className="container-page py-12 mt-20 px-6 md:px-8 lg:px-10">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-wider text-gold">About EduLister</p>
        <h1 className="mt-2 font-display text-4xl leading-[1.05] md:text-6xl">
          Find the right school<br />for your child.
        </h1>
        <p className="mt-4 font-display text-xl italic text-gold">Discover. Compare. Choose Better.</p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          EduLister is a school discovery and comparison platform that helps parents explore, evaluate and shortlist
          schools based on the factors that matter to their family.
        </p>
      </div>

      <section className="mt-14 max-w-4xl">
        <h2 className="font-display text-2xl">Search schools by</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {searchBy.map((s) => (
            <span key={s} className="rounded-full border border-border bg-card px-4 py-2 text-sm">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="font-display text-2xl">Our purpose</h2>
        <p className="mt-4 text-sm leading-relaxed">Choosing a school is a personal decision.</p>
        <p className="mt-3 text-sm leading-relaxed">
          EduLister brings relevant school information together so parents can spend less time searching across multiple
          sources and more time evaluating the options that fit their requirements.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl">How EduLister works</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {howItWorks.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border/60 bg-card p-5">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                <Icon size={17} />
              </div>
              <h3 className="mt-4 font-display text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-3xl rounded-2xl border border-border bg-secondary/60 p-8">
        <h2 className="font-display text-2xl">Our philosophy</h2>
        <p className="mt-4 font-display text-xl leading-snug">
          The best school is not necessarily the best school for every child.
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          EduLister focuses on helping families find the right fit rather than declaring one universal "best school."
        </p>
        <p className="mt-3 text-sm leading-relaxed">
          Our comparisons and recommendations are intended to support research and decision-making, not replace a parent's
          own evaluation.
        </p>
      </section>

      <section className="mt-16 grid max-w-4xl gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl">For schools</h2>
          <p className="mt-4 text-sm leading-relaxed">
            EduLister helps schools improve their online discoverability and present relevant information to prospective
            families. Schools may be able to:
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {schoolServices.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="text-gold">·</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            All school profile and promotional arrangements are subject to EduLister's verification and commercial
            policies.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl">How EduLister makes money</h2>
          <p className="mt-4 text-sm leading-relaxed">Transparent by design. EduLister may generate revenue through:</p>
          <ul className="mt-4 space-y-2 text-sm">
            {revenue.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="text-gold">·</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="font-display text-2xl">Commercial transparency</h2>
        <p className="mt-4 text-sm leading-relaxed">
          A school's presence on EduLister does not automatically mean that EduLister endorses or recommends that school.
        </p>
        <p className="mt-3 text-sm leading-relaxed">
          Where a placement, listing or recommendation is commercially influenced, EduLister will aim to identify the
          relevant commercial relationship or promotional nature clearly. Paid placement must not be represented as an
          independent ranking or objective recommendation.
        </p>
        <p className="mt-3 text-sm leading-relaxed">
          School visibility and recommendation scores may be influenced by different factors depending on the feature.
          Where relevant, EduLister will provide appropriate disclosure.
        </p>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="font-display text-2xl">School recommendations — Find My School</h2>
        <p className="mt-4 text-sm leading-relaxed">
          EduLister may offer personalised school recommendations based on information such as:
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {recommendationInputs.map((s) => (
            <span key={s} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs">
              {s}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm leading-relaxed">
          A recommendation or match score represents an algorithmic suitability estimate based on the information provided
          and available platform data. It is not a guarantee, a formal ranking, an endorsement, a guarantee of admission,
          or a statement that one school is objectively better than another.
        </p>
        <p className="mt-3 text-sm leading-relaxed">
          Parents should independently research and verify shortlisted schools.
        </p>
      </section>

      <section className="mt-16 max-w-3xl rounded-2xl border border-gold/40 bg-gold/10 p-8">
        <h2 className="font-display text-2xl">Important</h2>
        <p className="mt-4 text-sm leading-relaxed">
          EduLister is an independent school discovery platform unless expressly stated otherwise.
        </p>
        <p className="mt-3 text-sm leading-relaxed">
          School information may be obtained from schools, authorised representatives, public sources, third-party sources
          and user submissions.
        </p>
        <p className="mt-3 text-sm leading-relaxed">
          Parents should independently verify important information directly with the school before making an admission or
          financial decision. This includes fees, admission dates, eligibility, vacancies, curriculum, facilities, boarding
          arrangements, rankings, reviews and other time-sensitive information.
        </p>
      </section>

      <div className="mt-16 max-w-3xl rounded-2xl border border-border bg-card p-8">
        <p className="font-display text-2xl">Ready to start?</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Explore schools, compare side by side, or talk to us about your shortlist.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/schools" className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground">
            Explore schools →
          </Link>
          <Link href="/consultation" className="rounded-full border border-border px-5 py-2.5 text-sm hover:border-primary">
            Book a consultation
          </Link>
        </div>
      </div>
    </div>
  );
}