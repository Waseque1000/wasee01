import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutSection() {
  return (
    // relative min-w-[100vw] min-h-screen md:pt-20 pt-20 bg-red-500
    <section className="relative min-w-screen   pt-20 md:pt-20 bg-secondary/20  ">
      {/* gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hidden sm:block absolute left-[-20%] top-[-10%] h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl" />
        <div className="hidden sm:block absolute right-[-15%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-foreground/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-16 md:px-10 lg:grid-cols-[360px_1fr] lg:gap-10 lg:py-24">
        {/* LEFT: profile card */}
        <aside className="relative lg:sticky lg:top-6">
          <div className="rounded-3xl border border-foreground/10 bg-background/70 backdrop-blur">
            <div className="p-5">
              <div className="relative overflow-hidden rounded-2xl">
                <img src="/okk.png" alt="Portrait" className="aspect-[4/5] w-full object-cover" />
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-foreground/15 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
                  Front-End Developer
                </span>
                <span className="rounded-full border border-foreground/15 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
                  UI/UX-minded
                </span>
              </div>

              {/* stats */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {[
                  { k: "Years", v: "1+" },
                  { k: "Projects", v: "50+" },
                  { k: "Clients", v: "15+" },
                ].map(({ k, v }) => (
                  <div key={k} className="rounded-xl border border-foreground/10 bg-background/60 px-3 py-3 text-center">
                    <div className="text-xl font-bold leading-none">{v}</div>
                    <div className="text-[11px] tracking-wide text-muted-foreground">{k}</div>
                  </div>
                ))}
              </div>

              {/* actions */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:waseque.ndc@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  Contact
                </a>

                <a
                  href="cv.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/70 px-5 py-3 text-sm font-medium backdrop-blur transition hover:border-foreground/40"
                >
                  Resume
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 bg-background/70 backdrop-blur transition hover:border-foreground/40"
                  aria-label="GitHub"
                >
                <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 bg-background/70 backdrop-blur transition hover:border-foreground/40"
                  aria-label="LinkedIn"
                >
               <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT: content */}
        <div className="space-y-10">
          {/* header */}
          <header className="flex flex-col gap-2">
            <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
              About Me
            </h2>
            <p className="max-w-prose text-base leading-relaxed text-muted-foreground md:text-lg">
              I build clean, accessible, and high-performance interfaces that feel effortless. My north star is
              <span className="text-foreground"> error-free builds</span> and
              <span className="text-foreground"> 100% client satisfaction</span>. I turn real-world constraints into
              delightful products—ship after ship.
            </p>
          </header>

          {/* highlights grid */}
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Pixel-perfect UI with robust semantics and a11y",
              "Smooth micro-interactions and performant animations",
              "Modern stacks: React, Next.js, Tailwind CSS, Framer Motion",
              "Collaborative, detail-oriented delivery from kickoff to QA",
            ].map((t) => (
              <li
                key={t}
                className="group flex items-start gap-3 rounded-2xl border border-foreground/10 bg-background/60 p-4 backdrop-blur transition hover:border-foreground/20"
              >
                ✅ <span className="text-sm text-muted-foreground md:text-base">{t}</span>
              </li>
            ))}
          </ul>

          {/* skills & tooling */}
          <section className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-muted-foreground">STACK & TOOLING</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
                "Accessibility",
                "Performance",
                "GSAP",
                "Shopify",
                "MongoDB",
                "Firebase",
                "Vercel",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-foreground/15 px-3 py-1 text-xs text-muted-foreground md:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}