import { useMemo, useState } from "react";
import {
  Briefcase,
  Building2,
  Clock,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type OpportunityType = "Internship" | "Job" | "Apprenticeship";

interface Opportunity {
  id: string;
  title: string;
  company: string;
  type: OpportunityType;
  location: string;
  duration: string;
  skills: string[];
  match: number;
  posted: string;
}

const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "Frontend Engineering Intern",
    company: "Nimbus Cloud",
    type: "Internship",
    location: "Remote",
    duration: "3 months",
    skills: ["React", "TypeScript", "CSS"],
    match: 94,
    posted: "2 days ago",
  },
  {
    id: "2",
    title: "Data Analyst Apprenticeship",
    company: "Harbor Analytics",
    type: "Apprenticeship",
    location: "Bengaluru, IN",
    duration: "6 months",
    skills: ["SQL", "Python", "Data Viz"],
    match: 88,
    posted: "5 days ago",
  },
  {
    id: "3",
    title: "Junior Machine Learning Engineer",
    company: "Vector Labs",
    type: "Job",
    location: "Hybrid · Pune, IN",
    duration: "Full-time",
    skills: ["Python", "ML", "PyTorch"],
    match: 81,
    posted: "1 week ago",
  },
  {
    id: "4",
    title: "Product Design Intern",
    company: "Fieldnote",
    type: "Internship",
    location: "Remote",
    duration: "4 months",
    skills: ["Figma", "UX Research", "Prototyping"],
    match: 76,
    posted: "3 days ago",
  },
  {
    id: "5",
    title: "Backend Developer",
    company: "Ledgerly",
    type: "Job",
    location: "Hyderabad, IN",
    duration: "Full-time",
    skills: ["Node.js", "PostgreSQL", "APIs"],
    match: 72,
    posted: "6 days ago",
  },
  {
    id: "6",
    title: "Digital Marketing Apprenticeship",
    company: "Northlight Media",
    type: "Apprenticeship",
    location: "Remote",
    duration: "3 months",
    skills: ["SEO", "Content Strategy", "Analytics"],
    match: 65,
    posted: "4 days ago",
  },
];

const types: (OpportunityType | "All")[] = [
  "All",
  "Internship",
  "Apprenticeship",
  "Job",
];

export default function Opportunities() {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState<OpportunityType | "All">(
    "All",
  );

  const filtered = useMemo(() => {
    return opportunities
      .filter((o) => activeType === "All" || o.type === activeType)
      .filter((o) => {
        const q = query.trim().toLowerCase();
        if (!q) return true;
        return (
          o.title.toLowerCase().includes(q) ||
          o.company.toLowerCase().includes(q) ||
          o.skills.some((s) => s.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => b.match - a.match);
  }, [query, activeType]);

  return (
    <div className="container py-14 sm:py-20">
      <div className="max-w-2xl">
        <Badge className="rounded-full border-none bg-secondary px-4 py-1.5 text-secondary-foreground hover:bg-secondary">
          <Sparkles className="mr-1.5 h-3.5 w-3.5" />
          Matched to your skill profile
        </Badge>
        <h1 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Internships, apprenticeships & jobs
        </h1>
        <p className="mt-3 text-muted-foreground">
          Every opportunity below is posted by a verified industry partner and
          ranked by how well it fits your current skill profile.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by role, company, or skill"
            className="pl-9"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                activeType === t
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {filtered.map((o) => (
          <div
            key={o.id}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold leading-snug">
                    {o.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{o.company}</p>
                </div>
              </div>
              <div className="flex shrink-0 flex-col items-end">
                <span className="font-display text-lg font-bold text-success">
                  {o.match}%
                </span>
                <span className="text-xs text-muted-foreground">match</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Briefcase className="h-3.5 w-3.5" />
                {o.type}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {o.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {o.duration}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {o.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="font-normal"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
              <span className="text-xs text-muted-foreground">
                Posted {o.posted}
              </span>
              <Button size="sm">Apply now</Button>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
            No opportunities match your search yet. Try a different keyword or
            filter.
          </div>
        )}
      </div>
    </div>
  );
}
