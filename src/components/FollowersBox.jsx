import React from "react";

const FollowersBox = (props) => {
  return (
    <div className={`flex flex-col w-full`}>
      <div className={`w-full h-1.5  ${props.topBarColor} rounded-t-md`}></div>
      <div className="flex flex-col rounded items-center flex-wrap p-6 cursor-pointer overflow-hidden duration-75 h-64 w-full bg-lightMode-card-body hover:bg-lightMode-card-hover dark:bg-darkMode-card-body dark:hover:bg-darkMode-card-hover">
        <div className="flex flex-row mt-3">
          <img
            className="w-5 h-5"
            src={require(`../images/icon-${props.socialNet}.svg`).default}
            alt={`${props.socialNet} icon`}
          ></img>
          <p className="font-bold ml-2 text-sm text-lightMode-lightText dark:text-darkMode-lightText">
            {props.username}
          </p>
        </div>
        <h2 className="text-6xl font-bold mt-6 dark:text-darkMode-primaryText">
          {props.followers}
        </h2>
        <h3 className="tracking-followersSpacing mt-2 text-sm text-lightMode-lightText dark:text-darkMode-lightText">
          {props.typeOfFollowers}
        </h3>

        <div className={`flex flex-row items-center text-sm mt-8`}>
          <img
            className="w-3 h-2 mr-2"
            src={
              require(`../images/${
                props.change === "positive" ? "icon-up.svg" : "icon-down.svg"
              }`).default
            }
            alt="change-icon"
          ></img>
          {/* I don't know why, but when I run the build this 'text-uiColors-${props.change}Rating' doesn't work, so I figured out this approach, is not he best one, but it works */}
          {props.change === "positive" ? (
            <p className={`text-uiColors-positiveRating font-bold`}>
              {props.difference} Today
            </p>
          ) : (
            <p className={`text-uiColors-negativeRating font-bold`}>
              {props.difference} Today
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FollowersBox;
