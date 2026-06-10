export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-light dark:border-border-dark">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-light dark:text-muted-dark">
            © {new Date().getFullYear()} Adarsh Chaudhary. All rights reserved.
          </p>
          <p className="text-xs text-muted-light dark:text-muted-dark font-mono">
            Built with Next.js · Three.js · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
