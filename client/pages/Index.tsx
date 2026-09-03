import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  ClipboardCheck,
  FlaskConical,
  GraduationCap,
  LayoutDashboard,
  Radar,
  ShieldCheck,
  Sparkles,
  Star,
  Users2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "12,400+", label: "Students building skill profiles" },
  { value: "860+", label: "Industry partners hiring" },
  { value: "3,200+", label: "Live internships & jobs" },
  { value: "410+", label: "Academic institutions onboard" },
];

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Assess your skills, discover the roles you're ready for, and apply to internships and jobs matched to your profile.",
    points: [
      "Skill assessment & gap analysis",
      "Personalized career recommendations",
      "Verified digital portfolio",
    ],
    to: "/students",
    accent: "from-primary/15 to-primary/5",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry",
    description:
      "Post internships, apprenticeships, and jobs, then get shortlists of candidates matched by real skill data.",
    points: [
      "Post roles with required skills",
      "AI-matched candidate shortlists",
      "Publish training & certifications",
    ],
    to: "/industry",
    accent: "from-[hsl(var(--highlight))]/15 to-[hsl(var(--highlight))]/5",
  },
  {
    icon: FlaskConical,
    title: "Academicians",
    description:
      "Find faculty internships, industrial training, FDPs, and collaborative research aligned with your discipline.",
    points: [
      "Faculty development programs",
      "Consultancy & research tie-ups",
      "Industry guest lecture network",
    ],
    to: "/academicians",
    accent: "from-success/15 to-success/5",
  },
  {
    icon: LayoutDashboard,
    title: "Institutions",
    description:
      "Track student skill development, internship participation, and placement outcomes with live dashboards.",
    points: [
      "Cohort-level skill analytics",
      "Placement readiness tracking",
      "Industry collaboration pipeline",
    ],
    to: "/institutions",
    accent: "from-secondary to-secondary/40",
  },
];

const lifecycle = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Assess",
    description:
      "Students complete a skill & aptitude questionnaire covering technical and soft skills benchmarked against live industry demand.",
  },
  {
    step: "02",
    icon: Radar,
    title: "Map",
    description:
      "Junction builds a skill profile, surfaces strengths and gaps, and recommends industries, roles, and learning programs to close them.",
  },
  {
    step: "03",
    icon: BriefcaseBusiness,
    title: "Apply",
    description:
      "Browse internships, apprenticeships, and jobs posted by industry, with match scores, and track every application in one place.",
  },
  {
    step: "04",
    icon: Star,
    title: "Showcase",
    description:
      "Verified skills, certifications, projects, and internships collect into a digital portfolio that follows students into placements.",
  },
];

const features = [
  {
    icon: Radar,
    title: "Skill assessment & mapping",
    description:
      "Structured questionnaires and aptitude tests generate a live skill profile, flag gaps, and recommend the roles and programs that close them.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Internships, apprenticeships & jobs",
    description:
      "A single feed of opportunities from verified companies, ranked by fit to each student's skill profile and career interests.",
  },
  {
    icon: Sparkles,
    title: "Industry learning programs",
    description:
      "Companies publish training, certification courses, workshops, and mentorships so students can upskill before they apply.",
  },
  {
    icon: FlaskConical,
    title: "Academic collaboration",
    description:
      "Faculty internships, industrial training, FDPs, consultancy, and joint research projects — surfaced directly from industry partners.",
  },
  {
    icon: ShieldCheck,
    title: "Verified digital portfolio",
    description:
      "Every certification, project, and internship is verified and compiled into a shareable portfolio that boosts employability.",
  },
  {
    icon: LayoutDashboard,
    title: "Institutional analytics",
    description:
      "Dashboards for institutions and industry to track skill trends, placement readiness, and recruitment outcomes in real time.",
  },
];

const roles = [
  "Role-based access for students, academicians, industry, and institutions",
  "Secure document management for resumes, certificates & academic records",
  "Mentorship, live projects, workshops, and research collaboration tools",
  "Integrations with learning platforms, certifiers, and institutional databases",
];

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-grid">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-primary/10 via-transparent to-transparent"
          aria-hidden
        />
        <div className="container relative py-20 sm:py-28">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Badge className="rounded-full border-none bg-secondary px-4 py-1.5 text-secondary-foreground hover:bg-secondary">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              Academia &ndash; Industry Collaboration Portal
            </Badge>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl">
              Where campus skills meet
              <span className="text-gradient"> industry demand</span>
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
              Junction is the one-stop platform where students assess and grow
              their skills, industry posts real opportunities, and
              academicians and institutions collaborate &mdash; all matched by
              live skill data.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild className="shadow-lg shadow-primary/25">
                <Link to="/skill-assessment">
                  Take the skill assessment
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/opportunities">Browse opportunities</Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 rounded-2xl border border-border bg-card/60 p-8 backdrop-blur sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="container py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            One portal, four connected journeys
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every stakeholder gets a purpose-built experience &mdash; unified
            by the same skill data.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <Link
              key={a.title}
              to={a.to}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${a.accent} text-primary`}
              >
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {a.description}
              </p>
              <ul className="mt-4 space-y-2">
                {a.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Explore
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Lifecycle */}
      <section className="border-y border-border bg-secondary/40 py-20 sm:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              From skill gap to placement
            </h2>
            <p className="mt-4 text-muted-foreground">
              The full lifecycle of skill development, internships, and
              placements &mdash; in a single, guided flow.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {lifecycle.map((item, i) => (
              <div
                key={item.step}
                className="relative flex flex-col rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-bold text-primary/20">
                    {item.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                {i < lifecycle.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-border lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="container py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Everything the ecosystem needs
          </h2>
          <p className="mt-4 text-muted-foreground">
            Built for the complete lifecycle &mdash; skill development,
            internships, placements, and institutional oversight.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform trust / roles */}
      <section className="border-t border-border bg-foreground py-20 text-background sm:py-28">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge className="rounded-full border-none bg-background/10 px-4 py-1.5 text-background hover:bg-background/10">
              <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
              Secure by design
            </Badge>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              A trusted platform for every stakeholder
            </h2>
            <p className="mt-4 max-w-lg text-background/70">
              Junction is built to scale across institutions and industries
              while keeping role-based access, documents, and data secure.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="mt-8"
            >
              <Link to="/institutions">
                See institution dashboards
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {roles.map((role) => (
              <li
                key={role}
                className="flex items-start gap-3 rounded-2xl border border-background/10 bg-background/5 p-5"
              >
                <Users2 className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--highlight))]" />
                <span className="text-sm leading-relaxed text-background/90">
                  {role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20 sm:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[hsl(var(--highlight))] px-8 py-16 text-center sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 bg-grid opacity-20"
            aria-hidden
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to close the skills gap?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
              Join students, industry, academicians, and institutions already
              building the future of work on Junction.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/get-started">Get started for free</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/industry">Post an opportunity</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
