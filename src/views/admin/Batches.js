import React from "react";

import TabsRender from "components/Cards/BatchesTable.js";

export default function Batches() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <TabsRender />
        </div>
      </div>
    </>
  );
}
