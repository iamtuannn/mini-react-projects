import React from "react";
import SwitchThemes from "./SwitchThemes";

export default function Navbar({ projectName }) {
  return (
    <nav className=" flex justify-between items-center w-full my-2">
      <h1 className=" font-khand font-semibold text-4xl">{projectName}</h1>
      <div className=" flex-center">
        <SwitchThemes />
      </div>
    </nav>
  );
}