import React from "react";
import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      <div className="bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TOTAL BATCHES"
                  statTitle="23"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-4/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="STUDENTS ENROLLED"
                  statTitle="1360"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-4/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="STUDENTS PLACED"
                  statTitle="317"
                  statPercent="23.30%"
                  statIconName="fas fa-users"
                  statIconColor="bg-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
