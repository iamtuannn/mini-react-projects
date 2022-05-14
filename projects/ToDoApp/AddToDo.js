import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaPlus } from "react-icons/fa";
import { ToDoAppContext } from "./ToDoAppContext";

export default function AddToDo() {
  const { toDoList, updatedToDoList } = useContext(ToDoAppContext);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const updatedList = [
        ...toDoList,
        { id: uuidv4(), title: input, done: false },
      ];
      updatedToDoList(updatedList);
      setInput("");
    }
  };

  return (
    <div className=" bg-box-00 rounded-2xl p-2 w-full">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Enter a todo..."
          value={input}
          onChange={handleChange}
          className=" w-full bg-inherit py-2 px-4 outline-none placeholder:text-base-color-00 text-md"
        />
        <button type="submit" className=" font-khand p-2 font-semibold">
          <FaPlus />
        </button>
      </form>
    </div>
  );
}
