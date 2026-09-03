import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Skill Assessment", to: "/skill-assessment" },
      { label: "Opportunities", to: "/opportunities" },
      { label: "Learning Programs", to: "/programs" },
      { label: "Digital Portfolio", to: "/portfolio" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "For Students", to: "/students" },
      { label: "For Industry", to: "/industry" },
      { label: "For Academicians", to: "/academicians" },
      { label: "For Institutions", to: "/institutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Analytics", to: "/analytics" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[hsl(var(--highlight))] text-primary-foreground">
                <Zap className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                Junction
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The unified academia-industry collaboration portal connecting
              students, educators, and employers around real skills.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Junction. All rights reserved.</p>
          <p>Built to close the skills gap between campus and industry.</p>
        </div>
      </div>
    </footer>
  );
}
