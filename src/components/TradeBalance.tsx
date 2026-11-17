
"use client";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const sourceUrl =
  "https://itj.dgciskol.gov.in/public/YoWC0U9VQjHhxqoaaEVPn3Lv4u7kJWWknjn2m2Hy.pdf";

const tradeData = [
  { year: "2019–20", exports: 960.66, imports: 1064.66 },
  { year: "2020–21", exports: 630.89, imports: 1065.53 },
  { year: "2021–22", exports: 889.27, imports: 1827.19 },
  { year: "2022–23", exports: 2143.85, imports: 2290.40 },
  { year: "2023–24", exports: 1465.27, imports: 1410.63 },
];

const data = tradeData.map((item) => ({
  year: item.year,
  balance: Number((item.exports - item.imports).toFixed(2)),
}));

const latest = data[data.length - 1];

export default function TradeBalance() {
  return (
    <section
      id="trade-balance"
      className="bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
          Bilateral Trade Analysis
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          India–Jordan Trade Balance
        </h2>

        <p className="mt-5 max-w-3xl leading-7 text-slate-600">
          An analytical comparison of India's merchandise
          exports to and imports from Jordan across five
          financial years.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <p className="text-sm text-slate-500">
              FY 2023–24 Balance
            </p>
            <p className="mt-4 text-3xl font-bold text-emerald-700">
              +${latest.balance.toFixed(2)}M
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Calculated trade surplus
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <p className="text-sm text-slate-500">
              Surplus Years
            </p>
            <p className="mt-4 text-3xl font-bold text-slate-900">
              {data.filter((item) => item.balance > 0).length} / 5
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Within the observed period
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <p className="text-sm text-slate-500">
              Reporting Period
            </p>
            <p className="mt-4 text-3xl font-bold text-slate-900">
              5 Years
            </p>
            <p className="mt-2 text-sm text-slate-500">
              FY 2019–20 to FY 2023–24
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 md:p-9">
          <h3 className="text-xl font-bold text-slate-900">
            Annual Trade Balance
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            USD million • Positive = surplus • Negative = deficit
          </p>

          <div className="mt-8 h-[360px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis
                  width={65}
                  tick={{ fontSize: 12 }}
                  domain={["auto", "auto"]}
                />
                <Tooltip
                  formatter={(value) => [
                    `${Number(value).toFixed(2)} USD million`,
                    "Trade Balance",
                  ]}
                />
                <ReferenceLine y={0} stroke="#334155" />
                <Bar dataKey="balance" radius={[4, 4, 4, 4]}>
                  {data.map((entry) => (
                    <Cell
                      key={entry.year}
                      fill={
                        entry.balance >= 0
                          ? "#059669"
                          : "#dc6b48"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 rounded-xl bg-slate-50 p-6">
            <h4 className="font-bold text-slate-900">
              Research Observation
            </h4>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Based on the underlying dataset, India
              recorded a merchandise trade deficit with
              Jordan in four of the five financial years.
              The calculated balance turned positive in
              FY 2023–24.
            </p>

            <p className="mt-4 text-xs leading-6 text-slate-500">
              Methodology: Trade balance = India's exports
              to Jordan minus India's imports from Jordan.
              Calculations are derived from the cited
              historical dataset. This is not a forecast.
            </p>
          </div>

          <div className="mt-6 border-t border-slate-200 pt-5">
            <p className="text-xs leading-6 text-slate-500">
              Data source: Directorate General of Commercial
              Intelligence & Statistics (DGCI&S), India.
              Country Profile, Table 3. Values in USD million.
              Source figures should be checked against the
              original PDF before public publication.
            </p>

            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-amber-700 underline"
            >
              View Original Government Data ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
