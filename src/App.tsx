// src/App.tsx

import React from "react";
import Dashboard from "./components/Dashboard";
import "./styles.css";
import { useTheme } from "./hooks/useTheme";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="relative overflow-hidden w-full bicolor-bg">
      <Dashboard theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default App;
