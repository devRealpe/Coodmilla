import { Reveal } from "@/components/shared/reveal"

const gridCols: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
}

export function SectionSkeleton({
  title,
  cols = 3,
}: {
  title: string
  cols?: number
}) {
  const gridClass = gridCols[cols] ?? "md:grid-cols-3"

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <h2 className="mb-8 text-2xl font-extrabold text-dark md:text-3xl">
          {title}
        </h2>
        <div className={`grid gap-5 ${gridClass}`}>
          {Array.from({ length: cols }).map((_, i) => (
            <Reveal key={i}>
              <div className="animate-pulse rounded-xl border border-border bg-card p-6">
                <div className="mb-4 size-11 rounded-lg bg-muted" />
                <div className="mb-2 h-4 w-3/4 rounded bg-muted" />
                <div className="h-3 w-full rounded bg-muted" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
