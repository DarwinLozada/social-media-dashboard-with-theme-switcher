import React from "react";

const OverviewInfoBox = (props) => {
  return (
    <div className="flex flex-col justify-items-between mb-8 rounded cursor-pointer py-8 px-6 duration-75 bg-lightMode-card-body hover:bg-lightMode-card-hover dark:bg-darkMode-card-body dark:hover:bg-darkMode-card-hover">
      <div className="flex flex-row justify-between items-center">
        <p className="mb-8 font-bold text-lightMode-lightText dark:text-darkMode-lightText">
          Page Views
        </p>
        <img
          className="w-6 h-6 mb-8"
          src={require(`../images/icon-${props.socialNet}.svg`).default}
          alt={`${props.socialNet} icon`}
        ></img>
      </div>
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-3xl font-bold dark:text-darkMode-primaryText">
          {props.amount}
        </h2>

        <div className="flex items-center">
          <img
            className="w-3 h-2 mr-2"
            src={
              require(`../images/${
                props.change === "positive" ? "icon-up.svg" : "icon-down.svg"
              }`).default
            }
            alt="change-icon"
          ></img>
          <p
            className={`font-bold text-uiColors-${
              props.change === "positive" ? "positive" : "negative"
            }Rating font-bold`}
          >
            {props.difference}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverviewInfoBox;
