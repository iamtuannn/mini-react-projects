import React, { useContext } from "react";
import { PasswordGeneratorContext } from "./PasswordGeneratorContext";

export default function CreatePassword() {
  const context = useContext(PasswordGeneratorContext);

  const { characters, length, isError, setPassword } = context;

  const { lowercase, uppercase, number, symbol } = characters;

  const defaultCharacters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    symbol: "!@#$%^&*(){}[]=<>/,.",
  };

  const charactersArr = [
    lowercase ? defaultCharacters.lowercase : [],
    uppercase ? defaultCharacters.uppercase : [],
    number ? defaultCharacters.number : [],
    symbol ? defaultCharacters.symbol : [],
  ].join("");

  const generate = () => {
    let generatedPassword = "";

    for (let i = 0; i < length; i++) {
      generatedPassword +=
        charactersArr[Math.floor(Math.random() * charactersArr.length)];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className=" flex-center">
      <button
        disabled={isError}
        onClick={generate}
        className=" bg-transparent border-base rounded-md shadow-password"
      >
        <p className=" px-4 py-1 text-xl md:text-2xl text-center">Generate</p>
      </button>
    </div>
  );
}
