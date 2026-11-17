
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Outreach & Chamber Research | IJTI",
  description:
    "Independent India–Jordan trade promotion research, chamber mapping, B2B outreach planning and commercial enquiry workflows.",
};

const chambers = [
  {
    name: "Amman Chamber of Commerce",
    category: "Chamber of Commerce",
    focus: "Business networking, trade events and commercial enquiries",
    website: "https://www.ammanchamber.org/en/",
  },
  {
    name: "Jordan Chamber of Commerce",
    category: "National Chamber",
    focus: "Private-sector representation and commercial coordination",
    website: "https://www.jocc.org.jo/",
  },
  {
    name: "Jordan Chamber of Industry",
    category: "Industry Chamber",
    focus: "Industrial businesses and manufacturer engagement",
    website: "https://jci.org.jo/en/",
  },
  {
    name: "Jordanian Businessmen Association",
    category: "Business Association",
    focus: "Business networking and investment dialogue",
    website: "https://jba.com.jo/en/",
  },
  {
    name: "Jordan Exporters Association",
    category: "Export Association",
    focus: "Export promotion and business development",
    website: "https://jordanexporters.org/",
  },
];

const enquiries = [
  ["CE-001", "Pharmaceutical Suppliers", "PHARMEXCIL"],
  ["CE-002", "Food & Agriculture", "APEDA / FIEO"],
  ["CE-003", "Engineering Machinery", "EEPC India"],
  ["CE-004", "Textiles & Apparel", "TEXPROCIL / AEPC"],
  ["CE-005", "Chemical Products", "CHEMEXCIL"],
  ["CE-006", "Business Delegation", "FIEO / Chambers"],
  ["CE-007", "Trade Exhibitions", "ITPO"],
  ["CE-008", "Agricultural Imports", "APEDA"],
  ["CE-009", "Investment Enquiry", "Invest India"],
  ["CE-010", "Buyer–Seller Follow-up", "FIEO / Chambers"],
];

const sectorOpportunities = [
  {
    title: "Healthcare & Pharmaceuticals",
    audience: "Medical distributors, healthcare importers and industry associations",
    approach: "Research event participation, segment potential buyers and prepare bilingual campaign briefs.",
    checks: "Confirm event dates, regulatory eligibility and organisers before publishing invitations.",
  },
  {
    title: "Chemicals & Fertilizers",
    audience: "Industrial buyers, manufacturers and sector associations",
    approach: "Map product categories and relevant business networks for exploratory B2B introductions.",
    checks: "Verify current trade data, specifications and applicable import requirements.",
  },
  {
    title: "Food Processing & Agriculture",
    audience: "Food importers, distributors and trade associations",
    approach: "Develop buyer personas and a proposed supplier-discovery and meeting plan.",
    checks: "Confirm product-specific food safety, labelling and customs requirements.",
  },
];

const researchRegister = [
  {
    name: "Amman Chamber of Commerce",
    region: "Amman",
    sector: "Healthcare / cross-sector",
    purpose: "Event promotion and business enquiries",
    status: "Desk research · not contacted",
    source: "https://www.ammanchamber.org/en/",
  },
  {
    name: "Jordan Chamber of Commerce",
    region: "National",
    sector: "Cross-sector",
    purpose: "Regional chamber mapping",
    status: "Desk research · not contacted",
    source: "https://www.jocc.org.jo/",
  },
  {
    name: "Jordan Chamber of Industry",
    region: "National",
    sector: "Manufacturing / chemicals",
    purpose: "Industry outreach planning",
    status: "Desk research · not contacted",
    source: "https://jci.org.jo/en/",
  },
  {
    name: "Jordanian Businessmen Association",
    region: "Amman / national",
    sector: "Cross-sector",
    purpose: "Business delegation mapping",
    status: "Desk research · not contacted",
    source: "https://jba.com.jo/en/",
  },
  {
    name: "Jordan Exporters Association",
    region: "Jordan",
    sector: "Cross-sector",
    purpose: "Trade partnership research",
    status: "Desk research · not contacted",
    source: "https://jordanexporters.org/",
  },
];

const activities = [
  {
    number: "01",
    title: "Stakeholder Mapping",
    description:
      "Identify relevant Jordanian chambers, industry associations and business organisations using publicly available information.",
  },
  {
    number: "02",
    title: "B2B Audience Segmentation",
    description:
      "Group prospective businesses by sector, commercial interests and relevance to India–Jordan trade opportunities.",
  },
  {
    number: "03",
    title: "Trade Event Promotion",
    description:
      "Prepare event communication concepts, professional invitations and digital outreach plans for potential participants.",
  },
  {
    number: "04",
    title: "Commercial Enquiry Management",
    description:
      "Design structured workflows for logging enquiries, identifying relevant trade bodies and tracking follow-up actions.",
  },
  {
    number: "05",
    title: "Campaign Performance Reporting",
    description:
      "Define measurable indicators such as verified prospects, qualified responses, meeting requests and follow-up completion.",
  },
  {
    number: "06",
    title: "Business Matchmaking Support",
    description:
      "Develop proposed buyer–supplier matching processes, meeting coordination templates and post-event reporting formats.",
  },
];

export default function CommercialOutreachPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <a
            href="/"
            className="text-lg font-bold tracking-tight text-slate-900"
          >
            IJTI <span className="text-blue-700">Research</span>
          </a>
          <a
            href="/"
            className="text-sm font-medium text-blue-700 hover:underline"
          >
            ← Back to Trade Dashboard
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Independent Research Portfolio · November 2026
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            India–Jordan Commercial Outreach & Chamber Research
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            An independent professional research initiative exploring
            bilateral trade promotion, stakeholder mapping, business
            outreach, commercial enquiry management and B2B marketing
            opportunities between India and Jordan.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#chambers"
              className="rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-400"
            >
              Explore Chamber Research
            </a>
            <a
              href="#enquiries"
              className="rounded-lg border border-slate-500 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              View Enquiry Cases
            </a>
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-400">
            Disclaimer: This is an independent portfolio project. It is
            not affiliated with, endorsed by or commissioned by the
            Embassy of India, any government agency or the organisations
            referenced on this page.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-9">
          <p className="font-semibold text-blue-700">PROJECT OVERVIEW</p>
          <h2 className="mt-2 text-3xl font-bold">
            Trade Promotion Research & Marketing Operations
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            This project demonstrates how market research, professional
            business communication and digital marketing workflows can
            support international commercial promotion activities.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["05", "Organisations in initial directory"],
            ["10", "Simulated trade enquiry cases"],
            ["06", "Proposed marketing workflows"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="text-4xl font-bold text-blue-700">
                {value}
              </div>
              <p className="mt-3 text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHAMBER DIRECTORY */}
      <section id="chambers" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-semibold text-blue-700">
            STAKEHOLDER RESEARCH
          </p>
          <h2 className="mt-2 text-3xl font-bold">
            Jordanian Chambers & Business Associations
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            An initial desk-research directory of organisations relevant
            to potential trade promotion, business networking and
            industry engagement. Listed organisations have not been
            contacted as part of this project.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {chambers.map((chamber) => (
              <article
                key={chamber.name}
                className="rounded-2xl border border-slate-200 p-6 shadow-sm"
              >
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {chamber.category}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {chamber.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {chamber.focus}
                </p>

                <a
                  href={chamber.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm font-semibold text-blue-700 hover:underline"
                >
                  Visit Organisation Website ↗
                </a>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Research note: Organisation links are provided for
            independent verification. Contact details, current
            membership and outreach eligibility should be confirmed
            directly with each organisation.
          </p>
        </div>
      </section>

      {/* RESEARCH INTELLIGENCE UPGRADE */}
      <section id="research-register" className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Research Evidence · Initial Desk Review
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Chamber & Association Intelligence Register
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-600">
            This initial register documents public organisation websites, potential
            sector relevance and proposed outreach objectives. It is a planning
            resource, not a verified contact database. No organisation has been
            contacted or endorsed this project. Links and institutional details
            should be rechecked before any external communication.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[920px] text-left text-sm">
              <thead className="bg-[#10233d] text-white">
                <tr>
                  <th className="px-4 py-4">Organisation</th>
                  <th className="px-4 py-4">Coverage</th>
                  <th className="px-4 py-4">Sector relevance</th>
                  <th className="px-4 py-4">Proposed outreach purpose</th>
                  <th className="px-4 py-4">Research status</th>
                  <th className="px-4 py-4">Source</th>
                </tr>
              </thead>
              <tbody>
                {researchRegister.map((item, index) => (
                  <tr key={item.name} className={index % 2 ? "bg-slate-50" : "bg-white"}>
                    <td className="px-4 py-4 font-semibold">{item.name}</td>
                    <td className="px-4 py-4">{item.region}</td>
                    <td className="px-4 py-4">{item.sector}</td>
                    <td className="px-4 py-4">{item.purpose}</td>
                    <td className="px-4 py-4 text-amber-700">{item.status}</td>
                    <td className="px-4 py-4">
                      <a href={item.source} target="_blank" rel="noopener noreferrer"
                        className="font-semibold text-blue-700 hover:underline">
                        Website ↗
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <a
            href="/research/IJTI_Chamber_Research_Register.csv"
            download
            className="mt-7 inline-flex rounded-lg bg-amber-400 px-6 py-3 font-bold text-slate-950 hover:bg-amber-300"
          >
            Download Research Register (CSV) ↓
          </a>
          <p className="mt-3 text-xs text-slate-500">
            Register version: November 2026 · Five initial entries · Public-source
            desk research · No outreach sent · Current details subject to verification
          </p>
        </div>
      </section>

      {/* SECTOR OPPORTUNITY RESEARCH */}
      <section id="sectors" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            B2B Audience & Campaign Planning
          </p>
          <h2 className="mt-3 text-3xl font-bold">Three Priority Research Sectors</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            These are exploratory marketing hypotheses, not confirmed business
            opportunities or current market forecasts.
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {sectorOpportunities.map((sector) => (
              <article key={sector.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-xl font-bold">{sector.title}</h3>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-blue-700">Potential audience</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{sector.audience}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-wide text-blue-700">Proposed marketing work</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{sector.approach}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-wide text-amber-700">Before outreach</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{sector.checks}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUTREACH EXECUTION PLAN */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Proposed 30-Day Execution Framework
          </p>
          <h2 className="mt-3 text-3xl font-bold">From Research to B2B Coordination</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Days 1–10", "Validate organisation sources, map sectors and confirm public contact channels."],
              ["Days 11–20", "Prepare segmented outreach emails, event briefs and an approval-ready campaign calendar."],
              ["Days 21–30", "If authorised, conduct outreach, log replies and prepare a weekly KPI and follow-up report."],
            ].map(([period, detail]) => (
              <article key={period} className="rounded-xl bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-amber-700">{period}</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">{detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-600">
            Portfolio scope: research and planning only. No real outreach,
            partner agreements, qualified leads or event registrations are claimed.
          </p>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-semibold text-blue-700">
          PROPOSED OPERATING MODEL
        </p>
        <h2 className="mt-2 text-3xl font-bold">
          Commercial Outreach Workflow
        </h2>

        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <article
              key={activity.number}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="text-3xl font-bold text-sky-600">
                {activity.number}
              </span>
              <h3 className="mt-4 text-lg font-bold">
                {activity.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {activity.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ENQUIRIES */}
      <section id="enquiries" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-semibold text-blue-700">
            COMMERCIAL OPERATIONS
          </p>
          <h2 className="mt-2 text-3xl font-bold">
            Commercial Enquiry Management
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Ten fictional enquiry scenarios designed to demonstrate
            professional response planning, sector classification and
            referral to relevant Indian trade promotion organisations.
            These are training examples, not actual received enquiries.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-5 py-4">Case ID</th>
                  <th className="px-5 py-4">Enquiry Category</th>
                  <th className="px-5 py-4">Relevant Resource</th>
                  <th className="px-5 py-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((item, index) => (
                  <tr
                    key={item[0]}
                    className={
                      index % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }
                  >
                    <td className="px-5 py-4 font-semibold">
                      {item[0]}
                    </td>
                    <td className="px-5 py-4">{item[1]}</td>
                    <td className="px-5 py-4">{item[2]}</td>
                    <td className="px-5 py-4 text-amber-700">
                      Simulated
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-semibold text-blue-700">
          TRADE PROMOTION CASE STUDY
        </p>
        <h2 className="mt-2 text-3xl font-bold">
          India–Jordan Healthcare Trade Event Promotion
        </h2>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="leading-7 text-slate-600">
            This proposed marketing case study examines how a public
            announcement by the Amman Chamber of Commerce about Indian
            healthcare-sector events could inform targeted business
            outreach to Jordanian importers, distributors and
            healthcare companies.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <div>
              <h3 className="font-bold">Target Audience</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Healthcare importers, pharmaceutical distributors,
                medical equipment businesses and industry associations.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Proposed Channels</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Professional email outreach, LinkedIn communication,
                association newsletters and event information sharing.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Suggested KPIs</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Verified contacts, qualified responses, meeting
                enquiries and confirmed participation.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Research Limitation</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Event dates, eligibility and organiser information
                require confirmation before external promotion.
              </p>
            </div>
          </div>

          <a
            href="https://www.ammanchamber.org/en/news/details/417220/invitation-to-indian-events-in-health-sector-in-february-2027"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block font-semibold text-blue-700 hover:underline"
          >
            View Chamber Announcement ↗
          </a>
        </div>
      </section>

      {/* REPORTING */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-semibold text-blue-700">
            PERFORMANCE MEASUREMENT
          </p>
          <h2 className="mt-2 text-3xl font-bold">
            Proposed Outreach Reporting Framework
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {[
              "Verified Organisations",
              "Outreach Responses",
              "Qualified B2B Leads",
              "Follow-up Completion",
            ].map((metric) => (
              <div
                key={metric}
                className="rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <p className="font-semibold">{metric}</p>
                <p className="mt-3 text-xs text-slate-500">
                  KPI definition · No actual campaign data
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-10 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-bold">
            India–Jordan Trade Intelligence
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
            Independent trade research and digital marketing portfolio.
            Prepared as a demonstration of research, communication and
            commercial outreach planning capabilities.
          </p>

          <a
            href="/"
            className="mt-5 inline-block text-sm font-semibold text-sky-300 hover:underline"
          >
            Return to Main Research Dashboard →
          </a>
        </div>
      </footer>
    </main>
  );
}
