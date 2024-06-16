// src/components/Card.tsx
import React from "react";

interface CardProps {
  platform: string;
  username: string;
  followers: string;
  change: string;
}

const Card: React.FC<CardProps> = ({
  platform,
  username,
  followers,
  change,
}) => {
  const platformColors: { [key: string]: string } = {
    facebook: "bg-facebook",
    twitter: "bg-twitter",
    instagram: "bg-gradient-to-r from-[hsl(37,97%,70%)] to-[hsl(329,70%,58%)]",
    youtube: "bg-youtube",
  };

  const changeColor =
    parseInt(change) > 0 ? "text-lime-green" : "text-bright-red";

  return (
    <div className="flex flex-col items-center relative rounded-lg gap-6 py-6 bg-light-grayish-blue dark:bg-desaturated-blue cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700">
      <div
        className={`h-1 w-full absolute top-0 ${
          platform === "instagram" ? platformColors.instagram : ""
        } ${
          platform !== "instagram" ? platformColors[platform] : ""
        } rounded-t-lg`}
      ></div>
      <div className="flex items-center gap-3">
        <img src={`./icon-${platform}.svg`} alt="" />
        <span className="font-bold text-sm text-dark-grayish-blue dark:text-desaturated-blue-text">
          {username}
        </span>
      </div>
      <div className="space-y-3 text-center">
        <h3 className="text-5xl font-bold text-very-dark-blue dark:text-white">
          {followers}
        </h3>
        <p className="uppercase text-xs font-light text-dark-grayish-blue tracking-[.5em] dark:text-desaturated-blue-text">
          Followers
        </p>
      </div>
      <div className="flex items-center gap-3">
        <img
          src={`./icon-${changeColor == "text-lime-green" ? "up" : "down"}.svg`}
          alt=""
          className="w-2 h-1"
        />
        <span className={`text-sm ${changeColor}`}>{change} Today</span>
      </div>
    </div>
  );
};

export default Card;
