import React from "react";
import MyHead from "../../components/MyHead";
import PasswordGenerator from "../../projects/PasswordGenerator/PasswordGenerator";

export default function PasswordGeneratorApp() {
  const data = {
    name: " Password Generator",
    preview: "/projects/password-generator.png",
  };
  return (
    <>
      <MyHead data={data} />
      <PasswordGenerator />
    </>
  );
}
