
"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  ArrowUpRight,
  ArrowDownLeft,
  ExternalLink,
  FileText,
} from "lucide-react";

type Commodity = {
  name: string;
  value: number;
  share: number;
};

const exportsData: Commodity[] = [
  { name: "Petroleum Products", value: 748.14, share: 51.06 },
  { name: "Basmati Rice", value: 82.93, share: 5.66 },
  { name: "Buffalo Meat", value: 80.52, share: 5.50 },
  { name: "Pharmaceutical Formulations", value: 48.88, share: 3.34 },
  { name: "Coffee", value: 43.68, share: 2.98 },
  { name: "Bulk Drugs & Intermediates", value: 40.81, share: 2.79 },
  { name: "Motor Vehicles", value: 39.49, share: 2.70 },
  { name: "Cotton Yarn", value: 24.30, share: 1.66 },
  { name: "Residual Chemical Products", value: 22.46, share: 1.53 },
  { name: "Unmanufactured Tobacco", value: 21.95, share: 1.50 },
];

const importsData: Commodity[] = [
  { name: "Inorganic Chemicals", value: 583.93, share: 41.39 },
  { name: "Crude Fertilizers", value: 490.62, share: 34.78 },
  { name: "Manufactured Fertilizers", value: 267.49, share: 18.96 },
  { name: "Aluminium Products", value: 17.95, share: 1.27 },
  { name: "Paper & Paperboard", value: 16.81, share: 1.19 },
  { name: "Iron & Steel", value: 7.69, share: 0.55 },
  { name: "Copper Products", value: 6.00, share: 0.43 },
  { name: "Bulk Minerals & Ores", value: 2.61, share: 0.19 },
  { name: "Residual Chemical Products", value: 2.31, share: 0.16 },
  { name: "Lead Products", value: 2.08, share: 0.15 },
];

const sourceUrl =
  "https://itj.dgciskol.gov.in/public/YoWC0U9VQjHhxqoaaEVPn3Lv4u7kJWWknjn2m2Hy.pdf";

export default function CommodityDashboard() {
  const [direction, setDirection] = useState<"exports" | "imports">(
    "exports"
  );

  const isExport = direction === "exports";
  const data = isExport ? exportsData : importsData;

  const color = isExport ? "#d97706" : "#17365d";
  const page = isExport ? 6 : 7;
  const table = isExport ? 4 : 5;

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const top = data[0];

  return (
    <section
      id="commodities"
      className="bg-[#f8fafc] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
          Sector-Level Market Intelligence
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
          India–Jordan Commodity Trade
        </h2>

        <p className="mt-5 max-w-3xl leading-7 text-slate-600">
          Explore the ten leading merchandise commodity
          categories reported for FY 2023–24. Compare trade
          direction, commodity values, and their respective
          shares of India's bilateral merchandise flows.
        </p>

        <div className="mt-10 inline-flex flex-wrap gap-2 rounded-xl border border-slate-200 bg-white p-2">
          <button
            type="button"
            onClick={() => setDirection("exports")}
            aria-pressed={isExport}
            className={`flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${
              isExport
                ? "bg-amber-500 text-slate-950"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <ArrowUpRight size={17} />
            India Exports
          </button>

          <button
            type="button"
            onClick={() => setDirection("imports")}
            aria-pressed={!isExport}
            className={`flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${
              !isExport
                ? "bg-[#10233d] text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <ArrowDownLeft size={17} />
            India Imports
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <p className="text-sm text-slate-500">
              Leading Commodity
            </p>
            <p className="mt-4 text-xl font-bold text-slate-900">
              {top.name}
            </p>
            <p className="mt-3 text-2xl font-bold text-amber-700">
              ${top.value.toFixed(2)}M
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <p className="text-sm text-slate-500">
              Leading Commodity Share
            </p>
            <p className="mt-4 text-3xl font-bold text-slate-900">
              {top.share.toFixed(2)}%
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Share of total {direction}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <p className="text-sm text-slate-500">
              Combined Value of Listed Top 10
            </p>
            <p className="mt-4 text-3xl font-bold text-slate-900">
              ${total.toFixed(2)}M
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Sum of listed commodities, not all trade
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-9">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Top 10 {isExport ? "Exports to" : "Imports from"} Jordan
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                FY 2023–24 • USD million
              </p>
            </div>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600">
              DGCI&S Table {table}
            </span>
          </div>

          <div className="mt-8 h-[470px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                layout="vertical"
                margin={{
                  top: 5,
                  right: 30,
                  left: 15,
                  bottom: 5,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                />

                <XAxis
                  type="number"
                  tick={{ fontSize: 11 }}
                />

                <YAxis
                  type="category"
                  dataKey="name"
                  width={160}
                  tick={{ fontSize: 11 }}
                  interval={0}
                />

                <Tooltip
                  formatter={(value) => [
                    `${Number(value).toFixed(2)} USD million`,
                    "Trade Value",
                  ]}
                />

                <Bar
                  dataKey="value"
                  radius={[0, 5, 5, 0]}
                >
                  {data.map((item) => (
                    <Cell
                      key={item.name}
                      fill={color}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[550px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-3 font-semibold">Commodity</th>
                  <th className="py-3 text-right font-semibold">
                    Value (USD M)
                  </th>
                  <th className="py-3 text-right font-semibold">
                    Share
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr
                    key={item.name}
                    className="border-b border-slate-100"
                  >
                    <td className="py-3 font-medium text-slate-800">
                      {item.name}
                    </td>
                    <td className="py-3 text-right tabular-nums text-slate-700">
                      {item.value.toFixed(2)}
                    </td>
                    <td className="py-3 text-right tabular-nums text-slate-700">
                      {item.share.toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-xl bg-slate-50 p-6">
            <div className="flex items-center gap-2">
              <FileText size={17} className="text-amber-700" />
              <h4 className="font-bold text-slate-900">
                Research Interpretation
              </h4>
            </div>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {isExport
                ? "Petroleum products account for over half of India's merchandise exports to Jordan in FY 2023–24. Pharmaceuticals, agricultural products, and selected manufactured goods also appear among the leading reported categories."
                : "Inorganic chemicals and crude and manufactured fertilizers dominate India's reported imports from Jordan in FY 2023–24. This highlights the concentration of bilateral import flows in chemical and fertilizer-related commodities."}
            </p>
          </div>

          <div className="mt-7 border-t border-slate-200 pt-6">
            <p className="text-xs leading-6 text-slate-500">
              Source: Directorate General of Commercial
              Intelligence & Statistics (DGCI&S),
              Ministry of Commerce & Industry,
              Government of India.
              Table {table}, Page {page}.
              FY 2023–24. USD million.
              Commodity labels have been shortened for
              chart readability; values and reported shares
              follow the source table.
            </p>

            <a
              href={`${sourceUrl}#page=${page}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 underline"
            >
              View Original Government Evidence — Page {page}
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
