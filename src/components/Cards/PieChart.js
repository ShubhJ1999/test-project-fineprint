import React from "react";
import Chart from "chart.js";

export default function PieChart() {
  React.useEffect(() => {
    let config = {
      type: "pie",
      data: {
        labels: [
          'Pending',
          'Submitted'
        ],
        datasets: [{
          label: 'Curriculum Vitae',
          data: [300, 79],
          backgroundColor: [
            '#f18973',
            '#77a8a8'
          ],
          hoverOffset: 2
        }],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "middle",
          position: "bottom",
        },
      },
    };
    let ctx = document.getElementById("pie-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Statistics
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                CV Status
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="pie-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}