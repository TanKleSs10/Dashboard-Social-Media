// src/components/OverviewCard.tsx

import React from "react";

interface OverviewCardProps {
  metric: string;
  platform: string;
  value: string;
  change: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  metric,
  platform,
  value,
  change,
}) => {
  const changeColor =
    parseInt(change) > 0 ? "text-lime-green" : "text-bright-red";

  return (
    <div className="rounded-lg shadow p-6 bg-light-grayish-blue dark:bg-desaturated-blue cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700">
      <div className="flex items-center justify-between">
        <span className="font-bold text-dark-grayish-blue dark:text-desaturated-blue-text">
          {metric}
        </span>
        <img src={`./icon-${platform}.svg`} alt="" />
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-3xl font-bold text-very-dark-blue dark:text-white">
          {value}
        </span>
        <div className="flex gap-3 justify-center items-center">
          <img
            src={`./icon-${
              changeColor == "text-lime-green" ? "up" : "down"
            }.svg`}
            alt=""
            className="w-2 h-1"
          />
          <span className={`text-sm ${changeColor}`}>{change}%</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
