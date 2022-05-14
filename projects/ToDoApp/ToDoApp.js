import React from "react";
import ToDoBox from "./ToDoBox";
import AddToDo from "./AddToDo";
import Navbar from "../../components/Navbar";
import { ToDoAppProvider } from "./ToDoAppContext";

export default function ToDoApp() {
  return (
    <ToDoAppProvider>
      <div className=" project-box max-w-[500px] font-yanone-kaffeesatz text-xl">
        <Navbar projectName="ToDoApp" />
        <AddToDo />
        <ToDoBox />
      </div>
    </ToDoAppProvider>
  );
}
