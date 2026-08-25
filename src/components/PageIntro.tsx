export default function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="border-b border-black/10 bg-background px-6 pb-20 pt-36 dark:border-white/10">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-brand">
          {eyebrow}
        </p>
        <h1 className="mt-6 font-inter text-4xl font-extrabold leading-[0.98] tracking-tight text-foreground sm:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}