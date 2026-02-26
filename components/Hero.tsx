export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
          Juan David Ramirez
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
          Full Stack Developer
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Building modern web applications with passion and precision.
          Transforming ideas into elegant, performant digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
