import Image from "next/image";
import Link from "next/link";

export function LegalPage({ title, effectiveDate, children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 flex items-center border-b border-foreground/10">
        <Link href="/" className="flex items-center gap-2 text-lg font-mono">
          <Image
            width={321}
            height={221}
            alt=""
            className="w-6 h-auto"
            src="/logo-2026.png"
          />
          MYOTIS
        </Link>
        <div className="grow" />
        <Link
          href="/"
          className="text-sm text-foreground/50 hover:text-foreground transition-colors"
        >
          ← Back to home
        </Link>
      </header>

      <main className="grow px-6 py-16 md:py-24">
        <article className="max-w-3xl mx-auto text-foreground/70 leading-relaxed">
          <h1 className="text-4xl md:text-5xl font-mono text-foreground mb-4">
            {title}
          </h1>
          <p className="font-semibold text-foreground mb-10">
            Effective Date: {effectiveDate}
          </p>
          {children}
        </article>
      </main>
    </div>
  );
}

export function Heading({ children }) {
  return (
    <h2 className="text-2xl font-mono mt-12 mb-4 text-foreground">
      {children}
    </h2>
  );
}

export function Subheading({ children }) {
  return <h3 className="font-semibold text-foreground mt-6 mb-2">{children}</h3>;
}

export function P({ children }) {
  return <p className="mb-4">{children}</p>;
}

export function List({ items }) {
  return (
    <ul className="list-disc pl-6 mb-4 space-y-1">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function A({ href, children }) {
  const className =
    "text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
