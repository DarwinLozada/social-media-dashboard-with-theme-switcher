import React from "react";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Background from "./components/Background";
import MediaFollowers from "./components/MediaFollowers";

const App = () => {
  return (
    <div className="global-container">
      <div
        className={`relative block overflow-auto bg-lightMode-background-rest dark:bg-darkMode-background-rest lg:static`}
      >
        <Background />
        <div className="px-8 py-10 h-auto sm:px-40 z-20">
          <Header followers={"23,004"} />
          <MediaFollowers />
          <Overview />
        </div>
      </div>
    </div>
  );
};

export default App;
