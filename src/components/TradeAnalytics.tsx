
type Metric = {
  label: string;
  value: string;
  description: string;
};

const metrics: Metric[] = [
  {
    label: "Research Coverage",
    value: "2 Countries",
    description: "India and Jordan",
  },
  {
    label: "Priority Sectors",
    value: "3 Sectors",
    description: "Chemicals, pharmaceuticals and textiles",
  },
  {
    label: "Research Edition",
    value: "2026",
    description: "Independent portfolio research",
  },
];

export default function TradeAnalytics() {
  return (
    <section
      id="analytics"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
            Trade Intelligence
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
            India–Jordan Trade Dashboard
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            An independent research dashboard designed to
            present bilateral trade indicators, market
            opportunities, and digital promotion insights.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
            >
              <p className="text-sm font-medium text-slate-500">
                {metric.label}
              </p>

              <p className="mt-5 text-3xl font-bold text-slate-900">
                {metric.value}
              </p>

              <p className="mt-3 text-sm text-slate-600">
                {metric.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="font-bold text-slate-900">
            Data Verification Policy
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            Quantitative trade statistics will be published
            with their reporting year, source institution,
            and reference link. Estimates and independent
            interpretations will be clearly identified.
          </p>
        </div>
      </div>
    </section>
  );
}
