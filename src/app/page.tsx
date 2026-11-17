
import SectorInsights from "@/components/SectorInsights";
import CommodityDashboard from "@/components/CommodityDashboard";
import SourceLibrary from "@/components/SourceLibrary";
import TradeBalance from "@/components/TradeBalance";
import TradeChart from "@/components/TradeChart";
import TradeAnalytics from "@/components/TradeAnalytics";

const navigation = [
  { label: "Overview", href: "#overview" },
  { label: "Dashboard", href: "#analytics" },
  { label: "Trade Data", href: "#trade-chart" },
  { label: "Trade Balance", href: "#trade-balance" },
  { label: "Commodities", href: "#commodities" },
  { label: "Sectors", href: "#sectors" },
  { label: "Sources", href: "#sources" },
  { label: "Methodology", href: "#methodology" },
  
];

const researchSteps = [
  {
    number: "01",
    title: "Official Data",
    description:
      "Collect bilateral trade statistics from government publications and official reporting databases.",
  },
  {
    number: "02",
    title: "Market Analysis",
    description:
      "Examine sector-level trade patterns, historical trends, and potential areas for further investigation.",
  },
  {
    number: "03",
    title: "Digital Strategy",
    description:
      "Explore how market intelligence, online visibility, and B2B outreach can support international trade promotion.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* HEADER */}

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <a
            href="#overview"
            className="block shrink-0"
            aria-label="India Jordan Trade Intelligence Home"
          >
            <div className="text-xl font-bold tracking-tight text-slate-900">
              IJ<span className="text-amber-600">TI</span>.
            </div>

            <div className="text-[10px] font-medium uppercase tracking-widest text-slate-500">
              Independent Trade Research
            </div>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-medium text-slate-600 lg:flex"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-amber-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="shrink-0 text-right">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
              Research & Development
            </p>

            <p className="mt-1 text-sm font-bold text-amber-700">
              Made by — Akash Sharma
            </p>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}

        <nav
          aria-label="Mobile navigation"
          className="flex gap-5 overflow-x-auto border-t border-slate-100 px-6 py-3 text-xs font-medium text-slate-600 lg:hidden"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 whitespace-nowrap hover:text-amber-700"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* FEATURED COMMERCIAL OUTREACH LINK — BELOW HEADER */}
      <section aria-label="Commercial Outreach Research" className="border-b border-amber-200 bg-amber-50 px-6 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm font-semibold text-slate-900 sm:text-left md:text-base">
            Explore our independent India–Jordan business outreach research
          </p>
          <a
            href="/commercial-outreach"
            className="inline-flex w-full items-center justify-center rounded-xl bg-amber-500 px-6 py-3 text-center text-sm font-extrabold text-slate-950 shadow-md ring-2 ring-amber-600/20 transition hover:bg-amber-400 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 sm:w-auto md:text-base"
          >
            Click and check Commercial Outreach &amp; Chamber Research ↗
          </a>
        </div>
      </section>

      {/* HERO */}

      <section
        id="overview"
        className="relative overflow-hidden bg-[#10233d] px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold tracking-widest text-amber-300">
            INDIA × JORDAN
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Connecting Markets.
            <span className="mt-2 block text-amber-400">
              Exploring Opportunities.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            An independent digital research initiative
            exploring India–Jordan trade relations,
            market intelligence, sector opportunities,
            and international digital promotion strategies.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#trade-chart"
              className="rounded-lg bg-amber-400 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
            >
              Explore Trade Data
            </a>

            <a
              href="#sources"
              className="rounded-lg border border-white/30 px-6 py-4 text-sm font-semibold transition hover:bg-white/10"
            >
              View Official Sources
            </a>

          </div>
        </div>
      </section>

      {/* RESEARCH OVERVIEW */}

      <section className="border-b border-slate-200 bg-white px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Geographic Focus
            </p>

            <p className="mt-2 text-2xl font-bold">
              India & Jordan
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-500">
              Research Focus
            </p>

            <p className="mt-2 text-2xl font-bold">
              Bilateral Trade
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-500">
              Core Disciplines
            </p>

            <p className="mt-2 text-2xl font-bold">
              Research + Digital Strategy
            </p>
          </div>
        </div>
      </section>

      {/* COMMERCIAL OUTREACH RESEARCH PROJECT */}
      <section className="border-b border-slate-200 bg-amber-50 px-6 py-14">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-2xl border border-amber-200 bg-white p-8 shadow-sm md:flex-row md:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              Featured Independent Research Project
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
              India–Jordan Commercial Outreach & Chamber Research
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Explore Jordanian chamber and business association mapping,
              proposed B2B outreach workflows, simulated commercial enquiry
              cases and a healthcare trade-promotion concept. This is
              independent research, not an official Embassy or Chamber project.
            </p>
          </div>
          <a
            href="/commercial-outreach"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#10233d] px-6 py-4 text-sm font-bold text-white transition hover:bg-slate-700"
          >
            View Research Portfolio ↗
          </a>
        </div>
      </section>

      {/* TRADE INTELLIGENCE DASHBOARD */}

      <TradeAnalytics />

      <TradeChart />

      <TradeBalance />

      {/* COMMODITY INTELLIGENCE */}

      <CommodityDashboard />

      {/* SECTOR RESEARCH */}

      <SectorInsights />

      {/* ORIGINAL GOVERNMENT SOURCES */}

      <SourceLibrary />

      {/* METHODOLOGY */}

      <section
        id="methodology"
        className="scroll-mt-20 bg-slate-100 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
            Research Framework
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Evidence Before Recommendations
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            Our research framework separates published
            statistics from independent interpretation.
            Historical data is presented with reporting
            periods, units, and original source references.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {researchSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-bold text-amber-700">
                  STEP {step.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-bold text-slate-900">
              Research Limitations
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              This website is an independent research
              portfolio. Historical trade figures do not
              represent live market conditions. Sector
              opportunities and strategic observations
              are exploratory unless separately supported
              by additional evidence.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#10233d] px-6 py-12 text-slate-300">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <p className="text-xl font-bold text-white">
                India–Jordan Trade Intelligence
              </p>

              <p className="mt-2 text-sm text-amber-300">
                Independent Research & Digital Strategy
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
                Independent professional portfolio and
                research initiative. Not affiliated with,
                endorsed by, or operated by the Embassy
                of India, the Government of India, or
                the Government of Jordan.
              </p>
            </div>

            <div className="md:text-right">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Research & Development
              </p>

              <p className="mt-2 font-bold text-white">
                Akash Sharma
              </p>

              <a
                href="#overview"
                className="mt-5 inline-block text-sm font-medium text-amber-300 hover:text-amber-200"
              >
                Back to Top ↑
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-xs text-slate-400">
              © 2026 India–Jordan Trade Intelligence.
              Independent Research Portfolio.
              Made by Akash Sharma.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
