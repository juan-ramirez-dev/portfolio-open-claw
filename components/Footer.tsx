export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Juan David Ramirez. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
