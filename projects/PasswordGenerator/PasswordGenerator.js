import React from "react";
import Characters from "./Characters";
import CreatePassword from "./CreatePassword";
import { PasswordGeneratorProvider } from "./PasswordGeneratorContext";
import ShowPassword from "./ShowPassword";

export default function PasswordGenerator() {
  return (
    <PasswordGeneratorProvider>
      <div className=" project-box max-w-[400px] min-h-[100vh]">
        <div className=" mt-4 p-4 bg-box-00 w-full rounded-2xl">
          <h1 className=" text-3xl md:text-4xl text-center mb-4 font-khand font-semibold">
            Password Generator
          </h1>
          <ShowPassword />
          <Characters />
          <CreatePassword />
        </div>
      </div>
    </PasswordGeneratorProvider>
  );
}
