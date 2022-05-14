import React, { useContext } from "react";
import { PasswordGeneratorContext } from "./PasswordGeneratorContext";
import { FaSquare, FaCheck } from "react-icons/fa";

export default function Characters() {
  const context = useContext(PasswordGeneratorContext);

  const { characters, setCharacters, length, setLength, messageError } =
    context;

  const typeArr = [
    {
      type: "Lowercase",
      checked: characters.lowercase,
    },
    {
      type: "Uppercase",
      checked: characters.uppercase,
    },
    {
      type: "Number",
      checked: characters.number,
    },
    {
      type: "Symbol",
      checked: characters.symbol,
    },
  ];

  const handleSwitch = (type, value) => {
    if (type === "Lowercase") {
      return setCharacters({ ...characters, lowercase: value });
    }

    if (type === "Uppercase") {
      return setCharacters({ ...characters, uppercase: value });
    }

    if (type === "Number") {
      return setCharacters({ ...characters, number: value });
    }

    if (type === "Symbol") {
      return setCharacters({ ...characters, symbol: value });
    }

    return;
  };

  const handleLength = (e) => setLength(parseInt(e.target.value) || 0);

  return (
    <div className="">
      <div
        className=" text-danger text-lg text-center min-h-[2rem] pt-1 transition-opacity duration-500 ease-in-out"
        style={messageError !== "" ? { opacity: 1 } : { opacity: 0 }}
      >
        {messageError}
      </div>
      <div className=" flex justify-between items-center pt-2">
        <p>Length</p>
        <input
          type="number"
          min={8}
          max={20}
          defaultValue={length}
          onChange={handleLength}
         className=" text-[#955264] w-12 pl-2"
        />
      </div>
      {typeArr.map((character) => (
        <div
          className=" flex justify-between items-center pt-2"
          key={character.type}
        >
          <p>{character.type}</p>
          <div
            onClick={() => handleSwitch(character.type, !character.checked)}
            className=" bg-white flex justify-center items-center w-6 h-6"
          >
            {character.checked ? (
              <FaCheck className=" text-[#955264] " />
            ) : (
              <FaSquare />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
