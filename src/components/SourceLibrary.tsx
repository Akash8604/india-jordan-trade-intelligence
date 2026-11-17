
import {
  ExternalLink,
  FileText,
  Database,
  ShieldCheck,
  Info,
  BookOpen,
} from "lucide-react";

const sources = [
  {
    id: "SRC-001",
    title: "India–Jordan Bilateral Trade — FY 2023–24",
    institution: "Department of Commerce, Government of India",
    category: "Official Government Annual Report",
    period: "Financial Year 2023–24",
    reference:
      "Annual Report 2023–24, printed page 105, WANA trade table, Jordan row",
    evidence: [
      "India's exports to Jordan: US$1.46 billion",
      "India's imports from Jordan: US$1.41 billion",
      "Total bilateral trade: US$2.87 billion",
    ],
    url: "https://www.commerce.gov.in/files/2025-04/Annual-Report-English-Lower-Resolution-1.pdf",
    status: "Official document — browser access confirmed",
    type: "pdf",
    description:
      "Government annual report containing country-specific merchandise trade statistics for Jordan. Values are rounded to USD billions.",
  },
  {
    id: "SRC-002",
    title: "India's Country-wise Total Trade",
    institution: "Department of Commerce, Government of India",
    category: "Official Trade Statistics Database",
    period: "Financial years 2017–18 to 2025–26",
    reference:
      "Export Import Data Bank (TradeStat) — Total Trade: Country-wise",
    evidence: [
      "Select the required financial year",
      "Select Jordan as the partner country",
      "Choose the reporting unit and submit",
    ],
    url: "https://tradestat.commerce.gov.in/eidb/country_wise_ttrade",
    status: "Official reporting interface — selections required",
    type: "database",
    description:
      "Government reporting interface for retrieving country-wise trade data. The link opens the relevant report screen, not a pre-filled Jordan results table.",
  },
];

export default function SourceLibrary() {
  return (
    <section
      id="sources"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 text-amber-700">
          <ShieldCheck size={18} />
          <span className="text-sm font-bold uppercase tracking-widest">
            Evidence-Based Research
          </span>
        </div>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Official Sources & Evidence Library
        </h2>

        <p className="mt-5 max-w-3xl leading-7 text-slate-600">
          Government publications and original reporting
          interfaces supporting India–Jordan trade research.
          Each reference includes its reporting period,
          evidence location, and original source link.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {sources.map((source) => (
            <article
              key={source.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-amber-700">
                  {source.id}
                </span>

                {source.type === "pdf" ? (
                  <FileText
                    size={23}
                    className="text-slate-600"
                  />
                ) : (
                  <Database
                    size={23}
                    className="text-slate-600"
                  />
                )}
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-amber-700">
                {source.category}
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                {source.title}
              </h3>

              <p className="mt-3 text-sm font-medium text-slate-600">
                {source.institution}
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {source.description}
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-2">
                  <BookOpen
                    size={17}
                    className="text-amber-700"
                  />
                  <h4 className="text-sm font-bold text-slate-900">
                    Evidence Details
                  </h4>
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  Reporting Period
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {source.period}
                </p>

                <p className="mt-4 text-xs text-slate-500">
                  Document / Table Reference
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-700">
                  {source.reference}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold text-slate-500">
                    Published Evidence / Retrieval Steps
                  </p>

                  <ul className="mt-3 space-y-3">
                    {source.evidence.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-6 text-slate-700"
                      >
                        <span className="text-amber-700">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-2 text-xs leading-5 text-slate-500">
                <Info size={15} className="mt-0.5 shrink-0" />
                <span>{source.status}</span>
              </div>

              <div className="mt-auto pt-7">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#10233d] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  {source.type === "pdf"
                    ? "Open Original Government PDF"
                    : "Open Country-wise Trade Report"}
                  <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="font-bold text-slate-900">
            Research Verification Policy
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            All published statistics should be traceable
            to original source documents or official
            reporting tables. Reporting periods, units,
            rounding, and data definitions must be
            preserved. Independent calculations are
            distinguished from published figures.
            A working source URL alone does not verify
            every historical data point.
          </p>

          <p className="mt-5 text-xs font-semibold text-slate-600">
            Independent Research Portfolio — Made by Akash Sharma
          </p>
        </div>
      </div>
    </section>
  );
}
