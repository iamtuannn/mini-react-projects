import React, { useContext, useState, useEffect } from "react";
import { FaClipboard } from "react-icons/fa";
import { PasswordGeneratorContext } from "./PasswordGeneratorContext";

export default function ShowPassword() {
  const context = useContext(PasswordGeneratorContext);

  const [isCopy, setIsCopy] = useState(false);

  const { password } = context;

  const copyPassword = () => {
    if (password === "" || password === "Copied") return;

    navigator.clipboard.writeText(password);
    setIsCopy(true);
  };

  useEffect(() => {
    setIsCopy(false);
  }, [password]);

  return (
    <div className=" bg-display flex items-end w-full justify-between rounded-md">
      <div className=" p-2 w-full">
        <p>{password}</p>
      </div>
      <div onClick={copyPassword} className=" flex-center p-2  min-h-[45px]">
        {isCopy ? (
          <p className=" cursor-not-allowed">Copied</p>
        ) : (
          <FaClipboard className="text-[1.2rem] md:text-[1.5rem] cursor-pointer" />
        )}
      </div>
    </div>
  );
}
