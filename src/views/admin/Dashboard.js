import React from "react";

// components

import BarChart from "components/Cards/BarChart.js";
import PieChart from "components/Cards/PieChart.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-6/12 xl:w-6/12 px-4">
          <BarChart />
        </div>
        <div className="w-6/12 xl:w-6/12 px-4">
          <PieChart />
        </div>
      </div>
    </>
  );
}
