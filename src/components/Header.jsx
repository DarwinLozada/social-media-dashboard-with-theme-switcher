import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const Header = (props) => {
  const [switchValue, setSwitchValue] = useState(false);

  const handleThemeChange = () => {
    setSwitchValue(!switchValue);
    const master = document.querySelector(".global-container");
    master.classList.contains("dark")
      ? master.classList.remove("dark")
      : master.classList.add("dark");
  };

  return (
    <div className="relative grid grid-cols-1 divide-y divide-lightMode-card-body dark:divide-darkMode-card-body w-full justify-between lg:grid-cols-2 lg:divide-y-0">
      <div>
        <h1 className="font-bold text-3xl dark:text-darkMode-primaryText">
          Social Media Dashboard
        </h1>
        <h3 className="font-bold text-lightMode-toggle-defaultBg mb-8 mt-2 dark:text-darkMode-lightText">
          Total followers {props.followers}
        </h3>
      </div>
      <div className="flex w-full justify-between font-bold pt-6 lg:justify-end">
        <h3 className=" dark:text-darkMode-lightText mr-4">Dark Mode</h3>
        <Switch
          checked={switchValue}
          onChange={handleThemeChange}
          className={`flex p-0.5 h-6 w-11 rounded-full bg-gradient-to-r bg-toggle-defaultBg focus:outline-none cursor-pointer dark:from-toggle-hover-first to-toggle-hover-second`}
        >
          <span
            className={`${
              switchValue ? "translate-x-0" : "translate-x-5"
            } inline-block h-5 bg-white w-5 rounded-full transition duration-200 ease-in-out transform dark:bg-darkMode-background-top`}
          ></span>
        </Switch>
      </div>
    </div>
  );
};

export default Header;
