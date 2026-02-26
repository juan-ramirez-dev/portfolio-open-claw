const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, checkout, and payment integration. Built with Next.js and Stripe.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task manager with real-time updates, drag-and-drop, and team workspaces.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather application with location-based forecasts and interactive charts.",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "This very website! Built with Next.js 15, React 19, and Tailwind CSS 4.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    link: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-card rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-colors group"
            >
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 group-hover:from-accent/30 group-hover:to-primary/30 transition-colors" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-accent hover:underline text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-foreground text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
