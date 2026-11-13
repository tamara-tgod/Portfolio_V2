import { useEffect } from "react";
import { Link } from "react-router";

const profile = {
  name: "Tamara",
  title: "Frontend Developer",
  summary:
    "Frontend Developer with practical experience building responsive web interfaces, translating design concepts into functional user experiences, and adapting existing websites to meet client requirements. Proficient inReact.js, and HTML, CSS, JavaScript, Tailwind CSS, with hands-on experience developing projects using Next.js, TypeScript, Supabase and implementing APIs. Dedicated to creating maintainable code and developing user-friendly web applications.",

  email: "thankgoditemearau@gmail.com",
  location: "Lagos, Nigeria",
  links: [
    { label: "GitHub", href: "https://github.com/tamara-tgod" },
    { label: "Twitter", href: "https://twitter.com/tamara_builds" },
    // { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" }, // TODO
  ],
  resumePdf: "/resume/Itemearau_Resume.pdf",
};

const experience = [
  {
    role: "Frontend Developer (Contract)",
    place: "Kettechnology. Lagos, Nigeria",
    summary:
      "Designing and building web applications end to end for clients and personal products.",
    points: [
      "Revamped existing websites to align with clients' needs, preferences, and project requirements.",
      "Translated design concepts and visual mockups into functional, responsive web interfaces.",
      "Improved website layouts and user interfaces to better reflect client expectations.",
    ],
  },
];

const projects = [
  {
    name: "Personal Portfolio",
    href: "https://tamara-v2.vercel.app",
    github: "https://github.com/tamara-tgod/Portfolio_V2",
    stack: "React, TypeScript",
    summary:
      "Designed and developed a personal portfolio using React.js, and Tailwind CSS, implementing responsive layouts, interactive UI elements, and project showcases to highlight frontend development skills",
  },
  {
    name: "JobTrackr",
    href: "https://jobtrackr-peach.vercel.app",
    github: "https://github.com/tamara-tgod/jobtrackr",
    stack: "Next.js, TypeScript, Supabase",
    summary:
      "Job application tracker with full CRUD, inline editing, status tracking with optimistic UI, debounced auto-saving notes, search filtering and authentication.",
  },
  {
    name: "GainzDB",
    href: "https://gainzdb.netlify.app/",
    github: "https://github.com/tamara-tgod/gainzdb",
    stack: "React, TypeScript, Tailwind CSS",
    summary:
      "Exercise explorer on top of the ExerciseDB API with search, multi-filter logic, favourites, skeleton loading and a retry mechanism for failed requests.",
  },
];

const skills = [
  {
    group: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  { group: "Frameworks", items: ["React", "Next.js (App Router)", "Vue"] },
  { group: "Styling", items: ["Tailwind CSS", "Responsive design"] },
  {
    group: "Backend & data",
    items: ["Supabase", "PostgreSQL", "REST APIs"],
  },
  { group: "Tools", items: ["Git", "GitHub", "Vercel", "Netlify", "Figma"] },
];

const education = [
  {
    year: "2026",
    title: "Frontend Engineering Diploma",
    place: "AltSchool Africa",
  },
  {
    year: "2024",
    title: "B.Sc. Human Kinetics and Sports Science",
    place: "University of Benin",
  },
];


//  UI pieces 

function Section({ title, children }) {
  return (
    <section className="mt-14 print:mt-8">
      <h2 className="border-b border-neutral-200 pb-2 text-sm font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

const linkStyle =
  "underline underline-offset-4 transition-colors hover:decoration-red-400 hover:text-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 dark:decoration-neutral-700 dark:hover:text-teal-400";



  // CV Page

function CVPage() {
  // Plain React has no `metadata` export like Next.js, so set the tab title here.
  useEffect(() => {
    document.title = "CV · Tamara";
  }, []);

  return (
    <div>
      <nav className="bg-red-200 fixed top-0 z-50 w-full flex justify-between items-center px-12 py-6 mb-4 border-b-2">
        <Link to="/">
          <h1 className="font-sketch font-semibold text-3xl italic text-red-500 ">
            tamara <span>✦</span>
          </h1>
        </Link>

         <a
          href="/"
          className={`text-sm text-neutral-800 print:hidden ${linkStyle}`}
        >
          ← Home
        </a>
      </nav>
      <main className="mx-auto max-w-2xl px-6 py-12 text-neutral-900 dark:text-neutral-100 sm:py-20 print:py-0">
       
        {/* Header */}
        <header className="mt-10">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Curriculum vitae
          </p>

          <h2 className="text-3xl font-semibold">Itemearau Faith ThankGod</h2>
          <p className="mt-1 text-lg text-red-500 dark:text-teal-400">
            {profile.title}
          </p>
          <p className="mt-5 max-w-prose leading-relaxed text-neutral-700 dark:text-neutral-300">
            {profile.summary}
          </p>
          <div className="mt-6 print:hidden">
            <a
              href={profile.resumePdf}
              download="Itemearau_Resume.pdf"
              className="bg-dark-navy text-white text-sm shadow-[4px_4px_0_#ff6b6b] border border-gray-500 rounded-full px-6 
                py-2 w-fit text-nowrap transition hover:translate-x-[2px] hover:translate-y-2[2px] hover:shadow-none"
            >
              Download PDF
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm text-neutral-600 dark:text-neutral-400">
            <li>
              <a href={`mailto:${profile.email}`} className={linkStyle}>
                {profile.email}
              </a>
            </li>
            <li>{profile.location}</li>
            {profile.links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStyle}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        {/* Experience */}
        <Section title="Experience">
          <ol className="space-y-10">
            {experience.map((job) => (
              <li
                key={job.role + job.period}
                className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6"
              >
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {job.period}
                </p>
                <div>
                  <h3 className="font-semibold">{job.role}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {job.place}
                  </p>
                  <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                    {job.summary}
                  </p>
                  {job.points.length > 0 && (
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700 marker:text-neutral-400 dark:text-neutral-300">
                      {job.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Projects */}
        <Section title="Selected projects">
          <ul className="space-y-8">
            {projects.map((p) => (
              <li key={p.name}>
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <h3 className="font-semibold">
                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkStyle}
                      >
                        {p.name}
                      </a>
                    ) : (
                      p.name
                    )}
                  </h3>
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm text-neutral-500 ${linkStyle}`}
                    >
                      Source code
                    </a>
                  )}
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {p.stack}
                </p>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                  {p.summary}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <dl className="space-y-5">
            {skills.map((s) => (
              <div
                key={s.group}
                className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6"
              >
                <dt className="text-sm text-neutral-500 dark:text-neutral-400">
                  {s.group}
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border-2 border-[#1a1a2e] px-2.5 py-1 text-sm text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Education */}
        <Section title="Education">
          <ul className="space-y-6">
            {education.map((e) => (
              <li
                key={e.title}
                className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6"
              >
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {e.year}
                </p>
                <div>
                  <h3 className="font-semibold">{e.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {e.place}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <footer className="mt-16 flex flex-wrap justify-between gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400 print:hidden">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex gap-5">
            <a href={profile.resumePdf} download className={linkStyle}>
              Download PDF
            </a>
            <a href="/" className={linkStyle}>
              Home
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default CVPage;
