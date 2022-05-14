import React, { useState, createContext } from "react";

const PasswordGeneratorContext = createContext();

const PasswordGeneratorProvider = ({ children }) => {
  const [characters, setCharacters] = useState({
    lowercase: true,
    uppercase: true,
    number: true,
    symbol: true,
  });
  const [length, setLength] = useState(20);
  const [password, setPassword] = useState("");

  const characterError =
    !characters.lowercase &&
    !characters.uppercase &&
    !characters.number &&
    !characters.symbol;

  const lengthError = length < 8 || length > 20;

  const isError = characterError || lengthError;

  const message = {
    minLength: "Min length is 8 characters",
    maxLength: "Max length is 20 characters",
    type: "Please choose at least one type of password",
  };

  let messageError = "";

  if (characterError) {
    messageError = message.type;
  }

  if (lengthError) {
    if (length < 8) {
      messageError = message.minLength;
    } else {
      messageError = message.maxLength;
    }
  }

  if (characterError && lengthError) {
    if (length < 8) {
      messageError = message.type.concat(", ", message.minLength.toLowerCase());
    } else {
      messageError = message.type.concat(", ", message.maxLength.toLowerCase());
    }
  }

  return (
    <PasswordGeneratorContext.Provider
      value={{
        characters,
        setCharacters,
        length,
        setLength,
        password,
        setPassword,
        isError,
        messageError,
      }}
    >
      {children}
    </PasswordGeneratorContext.Provider>
  );
};

export { PasswordGeneratorContext, PasswordGeneratorProvider };
