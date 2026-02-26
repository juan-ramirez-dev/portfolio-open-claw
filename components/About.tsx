export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              Hello! I&apos;m Juan David, a passionate Full Stack Developer with a love for
              creating seamless digital experiences. With expertise in modern web technologies,
              I bring ideas to life through clean code and intuitive design.
            </p>
            <p>
              I specialize in building responsive web applications using React, Next.js, and
              Node.js. My approach combines technical excellence with user-centered design,
              ensuring every project delivers both functionality and a great user experience.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-4xl font-bold text-accent-foreground">
              JD
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
