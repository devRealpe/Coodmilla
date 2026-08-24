import type { ReactNode } from "react"

export function PageHeader({
  label,
  title,
  description,
  children,
}: {
  label: string
  title: ReactNode
  description?: string
  children?: ReactNode
}) {
  return (
    <section className="bg-transparent px-6 pt-32 pb-16 md:px-10 md:pb-20 md:pt-36">
      <div className="container">
        <div className="rounded-3xl border border-foreground/10 dark:border-white/10 bg-foreground/5 dark:bg-white/[0.03] backdrop-blur-md shadow-xl p-8 md:p-12 lg:p-16">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-gold">
            {label}
          </span>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
