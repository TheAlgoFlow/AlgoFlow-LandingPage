const STATS = [
  { value: "20+", label: "algorithms visualized" },
  { value: "4", label: "programming languages" },
  { value: "Step-by-step", label: "code execution" },
];

export default function StatsSection() {
  return (
    <section className="bg-foreground py-10">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-display text-3xl italic text-accent-lime">{stat.value}</span>
              <span className="text-sm text-white/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
