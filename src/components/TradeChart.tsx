
"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const tradeData = [
  { year: "2019-20", exports: 960.66, imports: 1064.66 },
  { year: "2020-21", exports: 630.89, imports: 1065.53 },
  { year: "2021-22", exports: 889.27, imports: 1827.19 },
  { year: "2022-23", exports: 2143.85, imports: 2290.40 },
  { year: "2023-24", exports: 1465.27, imports: 1410.63 },
];

const sourceUrl =
  "https://itj.dgciskol.gov.in/public/YoWC0U9VQjHhxqoaaEVPn3Lv4u7kJWWknjn2m2Hy.pdf";

export default function TradeChart() {
  return (
    <section
      id="trade-chart"
      className="bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
            Verified Government Data
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            India–Jordan Bilateral Trade Trends
          </h2>

          <p className="mt-3 text-slate-600">
            Merchandise exports and imports, FY 2019–20 to
            FY 2023–24. Values in USD million.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
          <div className="h-[360px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={tradeData}
                margin={{ top: 10, right: 15, left: 10, bottom: 10 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />

                <XAxis dataKey="year" tick={{ fontSize: 12 }} />

                <YAxis
                  tick={{ fontSize: 12 }}
                  width={65}
                  tickFormatter={(value: number) =>
                    value.toLocaleString("en-US")
                  }
                />

                <Tooltip
                  formatter={(value, name) => [
                    `${Number(value).toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })} USD million`,
                    String(name),
                  ]}
                />

                <Legend />

                <Bar
                  dataKey="exports"
                  name="India Exports"
                  fill="#d97706"
                  radius={[5, 5, 0, 0]}
                />

                <Bar
                  dataKey="imports"
                  name="India Imports"
                  fill="#17365d"
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 border-t border-slate-200 pt-5">
            <p className="text-xs leading-6 text-slate-500">
              Source: Directorate General of Commercial
              Intelligence & Statistics (DGCI&S),
              Country Profile Report, Table 3, Page 5.
              Financial years run from April to March.
              Historical data, not a current-year estimate.
            </p>

            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-amber-700 underline"
            >
              View Official Government Source (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
