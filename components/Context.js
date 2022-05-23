import { createContext, useState } from "react";

const Context = createContext(null);

const Provider = ({ children }) => {
  const [isAdmin, setAdmin] = useState(false);

  return (
    <Context.Provider value={{ isAdmin, setAdmin }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
