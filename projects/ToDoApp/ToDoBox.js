import React, { useContext } from "react";
import { ToDoAppContext } from "./ToDoAppContext";
import { FaTrash, FaCheckSquare } from "react-icons/fa";

export default function ToDoBox() {
  const { toDoList, updatedToDoList } = useContext(ToDoAppContext);

  const handleDelete = (id) => {
    const updatedList = toDoList.filter((t) => t.id !== id);
    updatedToDoList(updatedList);
  };

  const handleDone = (task) => {
    const updatedList = toDoList.map((item) => {
      if (item.id === task.id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    updatedToDoList(updatedList);
  };

  return (
    <div className=" mt-4 p-4 bg-box-00 w-full rounded-2xl transition-[height] duration-300">
      {toDoList.length !== 0 ? (
        <div className="  min-h-[50vh] ">
          {toDoList.map((task, i) => (
            <div
              className=" border-base p-4 rounded mt-2 flex items-center justify-between break-all"
              key={i}
            >
              <p
                className={
                  task.done === true
                    ? " opacity-20 line-through decoration-danger decoration-double"
                    : undefined
                }
              >
                {task.title}
              </p>
              <div className=" flex items-center cursor-pointer">
                <FaCheckSquare
                  onClick={() => handleDone(task)}
                  title={!task.done ? "Mask as finished" : "Mask as unfinished"}
                  className={task.done === true ? " text-success" : undefined}
                />
                <FaTrash
                  onClick={() => handleDelete(task.id)}
                  className=" text-danger ml-2"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className=" flex-center min-h-[50vh]">
          <p>You have no tasks to do currently</p>
        </div>
      )}
    </div>
  );
}
