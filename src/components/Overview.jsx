import React from "react";
import OverviewInfoBox from "./OverviewInfoBox";
import socialMediaData from "../socialMediaData";

const Overview = () => {
  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-lightMode-lightText mt-10 mb-6 dark:text-darkMode-primaryText">
        Overview - Today
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {socialMediaData.map((data) => {
          return (
            <OverviewInfoBox
              socialNet={data.socialNet}
              amount={data.amount}
              change={data.change}
              difference={data.difference}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
