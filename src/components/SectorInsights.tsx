
const sourceUrl =
  "https://itj.dgciskol.gov.in/public/YoWC0U9VQjHhxqoaaEVPn3Lv4u7kJWWknjn2m2Hy.pdf";

type Sector = {
  number: string;
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  detail: string;
  insight: string;
  page: number;
  table: number;
  status: string;
};

const sectors: Sector[] = [
  {
    number: "01",
    title: "Fertilizers & Chemicals",
    category: "Import Intelligence",
    metric: "$1,342.04M",
    metricLabel: "Combined value of three import categories",
    detail:
      "In FY 2023–24, India's imports from Jordan included inorganic chemicals ($583.93M), crude fertilizers ($490.62M), and manufactured fertilizers ($267.49M).",
    insight:
      "The figures highlight the importance of chemicals and fertilizers in bilateral trade. Supplier networks, procurement requirements, and long-term sourcing opportunities warrant further research.",
    page: 7,
    table: 5,
    status: "Historical data verified",
  },
  {
    number: "02",
    title: "Pharmaceuticals",
    category: "Export Intelligence",
    metric: "+76.72%",
    metricLabel: "Year-on-year growth in formulations",
    detail:
      "India's exports of Drugs, Formulations & Biologicals to Jordan increased from $27.66M in FY 2022–23 to $48.88M in FY 2023–24.",
    insight:
      "The recorded growth provides a basis for investigating pharmaceutical market access, product registration, distribution channels, and potential B2B partnerships in Jordan.",
    page: 6,
    table: 4,
    status: "Historical data verified",
  },
  {
    number: "03",
    title: "Textiles & Apparel",
    category: "Exploratory Research",
    metric: "$24.30M",
    metricLabel: "Cotton yarn exports in FY 2023–24",
    detail:
      "India exported $24.30M of cotton yarn to Jordan in FY 2023–24, according to the DGCI&S commodity table.",
    insight:
      "Cotton yarn trade offers a starting point for further research into textile supply chains. Broader apparel opportunities remain exploratory and require additional market evidence.",
    page: 6,
    table: 4,
    status: "Further market research required",
  },
];

export default function SectorInsights() {
  return (
    <section
      id="sectors"
      className="scroll-mt-20 bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
            Research-Led Market Intelligence
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Sector Opportunities & Market Insights
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Independent analysis of selected India–Jordan
            trade sectors, supported by historical
            merchandise statistics published by the
            Directorate General of Commercial Intelligence
            & Statistics (DGCI&S).
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {sectors.map((sector) => (
            <article
              key={sector.number}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="h-1 bg-amber-500" />

              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-bold text-slate-400">
                    {sector.number}
                  </span>

                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-amber-800">
                    {sector.category}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
                  {sector.title}
                </h3>

                <div className="mt-7 border-y border-slate-200 py-6">
                  <p className="text-3xl font-bold text-[#10233d]">
                    {sector.metric}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {sector.metricLabel}
                  </p>
                </div>

                <div className="mt-7">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Trade Evidence
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {sector.detail}
                  </p>
                </div>

                <div className="mt-7 rounded-xl border border-slate-100 bg-white p-5">
                  <h4 className="text-sm font-bold text-slate-900">
                    Research Interpretation
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {sector.insight}
                  </p>
                </div>

                <div className="mt-auto pt-8">
                  <p className="text-xs font-semibold text-slate-600">
                    {sector.status}
                  </p>

                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    Source: DGCI&S Country Profile Report,
                    Table {sector.table}, Page {sector.page}.
                    FY 2023–24. Values in USD million.
                  </p>

                  <a
                    href={`${sourceUrl}#page=${sector.page}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-700 underline underline-offset-4 hover:text-amber-900"
                  >
                    View Original Government Evidence
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 border-l-4 border-amber-500 bg-[#f8fafc] px-6 py-5">
          <h3 className="text-sm font-bold text-slate-900">
            Research & Verification Note
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Statistics represent historical merchandise
            trade for FY 2023–24, not current market
            conditions. Commercial opportunities,
            regulations, and market-entry requirements
            must be independently evaluated before
            making business decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
