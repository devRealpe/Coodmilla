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
    <section className="bg-gradient-to-br from-dark via-[#0a2a18] to-green px-6 pt-32 pb-16 md:px-10 md:pb-20 md:pt-36">
      <div className="container">
        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-gold">
          {label}
        </span>
        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
