// src/components/Dashboard.tsx

import Card from "./Card";
import OverviewCard from "./OverviewCard";
import "../styles.css";
import { ThemeState } from "../reducers/themeReducer";

type DashboardProps = {
  theme: ThemeState;
  toggleTheme: () => void;
};

const Dashboard = ({ toggleTheme, theme }: DashboardProps) => {
  return (
    <div className="space-y-11 relative h-full w-full bicolor-bg p-10 sm:px-32 py-6">
      <header className="flex flex-col sm:flex-row sm:justify-between">
        <div className="pb-6 sm:pb-0 border-b border-desaturated-blue-text mb-4 sm:border-none sm:mb-0 ">
          <h1 className="text-2xl sm:text-2xl font-bold text-very-dark-blue dark:text-white">
            Social Media Dashboard
          </h1>
          <p className="text-dark-grayish-blue text-sm font-bold dark:text-desaturated-blue-text">
            Total Followers: 23,004
          </p>
        </div>
        <div className="flex gap-3 justify-between sm:justify-normal">
          <p className="text-dark-grayish-blue font-bold capitalize dark:text-desaturated-blue-text">
            Modo {theme}
          </p>
          <button
            id="switch"
            onClick={toggleTheme}
            className="w-10 h-6 bg-light-theme-toggle rounded-full relative dark:bg-gradient-to-r dark:from-blue-toggle dark:to-green-toggle"
          >
            <div
              className={`w-4 h-4 bg-white dark:bg-desaturated-blue rounded-full absolute top-1 right-1 transition-transform transform dark:-translate-x-4`}
            ></div>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          platform="facebook"
          username="@nathanf"
          followers="1987"
          change="12"
        />
        <Card
          platform="twitter"
          username="@nathanf"
          followers="1044"
          change="99"
        />
        <Card
          platform="instagram"
          username="@realnathanf"
          followers="11k"
          change="1099"
        />
        <Card
          platform="youtube"
          username="Nathan F."
          followers="8239"
          change="-144"
        />
      </div>

      <h2 className="text-2xl font-bold text-very-dark-blue dark:text-white mb-6">
        Overview - Today
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <OverviewCard
          metric="Page Views"
          platform="facebook"
          value="87"
          change="3"
        />
        <OverviewCard
          metric="Likes"
          platform="facebook"
          value="52"
          change="-2"
        />
        <OverviewCard
          metric="Likes"
          platform="instagram"
          value="5462"
          change="2257"
        />
        <OverviewCard
          metric="Profile Views"
          platform="instagram"
          value="52k"
          change="1375"
        />
        <OverviewCard
          metric="Retweets"
          platform="twitter"
          value="117"
          change="303"
        />
        <OverviewCard
          metric="Likes"
          platform="twitter"
          value="507"
          change="553"
        />
        <OverviewCard
          metric="Likes"
          platform="youtube"
          value="107"
          change="-19"
        />
        <OverviewCard
          metric="Total Views"
          platform="youtube"
          value="1407"
          change="-12"
        />
      </div>
    </div>
  );
};

export default Dashboard;
