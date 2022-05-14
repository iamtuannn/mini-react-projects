import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { HiSun } from "react-icons/hi";

export default function SwitchThemes() {
  const [isLightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  }, [isLightMode]);

  return (
    <button
      className=" switch-theme"
      onClick={() => setLightMode(!isLightMode)}
    >
      {isLightMode ? <HiSun /> : <FaMoon />}
    </button>
  );
}
