import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import BidData from "../../DataStore/Bids.json";

export default function Bid() {
  const [viewMode, setViewMode] = useState("table"); // 'table' or 'chart'

  const toggleView = () => {
    setViewMode(viewMode === "table" ? "chart" : "table");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col sm:flex-row p-2 justify-between bg-[var(--var-red-col)] items-center mb-2 ">
        <h2 className="text-lg sm:text-xl text-white font-semibold mb-2 sm:mb-0">
          Your All Bid Data
        </h2>
        <button
          onClick={toggleView}
          className="cursor-pointer px-4 py-2 text-[var(--var-red-col)] bg-white rounded shadow hover:brightness-95 transition text-sm sm:text-base"
        >
          {viewMode === "table" ? "Show Chart" : "Show Table"}
        </button>
      </div>

      {viewMode === "table" ? (
        // Make table container horizontally scrollable on small screens
        <div className="overflow-x-auto bg-white rounded shadow-md">
          <table className="min-w-[600px] sm:min-w-full text-xs sm:text-sm text-left">
            <thead className="border-b border-[var(--var-red-col)] text-[var(--var-red-col)]">
              <tr>
                <th className="px-3 py-2 sm:px-6 sm:py-3">#</th>
                <th className="px-3 py-2 sm:px-6 sm:py-3">Product</th>
                <th className="px-3 py-2 sm:px-6 sm:py-3">Name</th>
                <th className="px-3 py-2 sm:px-6 sm:py-3">Email</th>
                <th className="px-3 py-2 sm:px-6 sm:py-3">Phone</th>
                <th className="px-3 py-2 sm:px-6 sm:py-3">Quantity</th>
                <th className="px-3 py-2 sm:px-6 sm:py-3">Order Price ($)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {BidData.map((bid, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition text-xs sm:text-sm"
                >
                  <td className="px-3 py-2 sm:px-6 sm:py-3 font-medium">
                    {index + 1}
                  </td>
                  <td className="px-3 py-2 sm:px-6 sm:py-3">{bid.productType}</td>
                  <td className="px-3 py-2 sm:px-6 sm:py-3">{bid.name}</td>
                  <td className="px-3 py-2 sm:px-6 sm:py-3">{bid.email}</td>
                  <td className="px-3 py-2 sm:px-6 sm:py-3">{bid.phone}</td>
                  <td className="px-3 py-2 sm:px-6 sm:py-3">{bid.quantity}</td>
                  <td className="px-3 py-2 sm:px-6 sm:py-3">${bid.orderPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Chart container: give a flexible height on mobile & max height on larger screens
        <div className="bg-white rounded shadow-md p-2 h-[300px] sm:h-[400px] overflow-y-auto">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={BidData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10 }}
                interval={0}
                angle={-30}
                textAnchor="end"
                height={60}
              />
              <YAxis
                tick={{ fontSize: 10 }}
              />
              <Tooltip />
              <Legend
                wrapperStyle={{ fontSize: 12 }}
              />
              <Bar
                dataKey="orderPrice"
                fill="var(--var-red-col)"
                name="Order Price ($)"
                barSize={20}
                radius={[5, 5, 0, 0]}
              />
              <Bar
                dataKey="quantity"
                fill="#8884d8"
                name="Quantity"
                barSize={20}
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
