import { createContext, useState, useEffect } from "react";

const ToDoAppContext = createContext();

const ToDoAppProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("ToDoList") === null) {
      localStorage.setItem("ToDoList", JSON.stringify([]));
    }

    setToDoList(JSON.parse(localStorage.getItem("ToDoList")));
  }, []);

  const updatedToDoList = (value) => {
    localStorage.setItem("ToDoList", JSON.stringify(value));
    setToDoList(value);
  };

  return (
    <ToDoAppContext.Provider value={{ toDoList, updatedToDoList }}>
      {children}
    </ToDoAppContext.Provider>
  );
};

export { ToDoAppContext, ToDoAppProvider };
