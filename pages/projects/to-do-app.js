import React from "react";
import MyHead from "../../components/MyHead";
import ToDoApp from "../../projects/ToDoApp/ToDoApp";

export default function ProjectToDoApp() {
  const data = {
    name: "To Do App",
    preview: "/projects/to-do-app.png",
  };
  return (
    <div>
      <MyHead data={data} />
      <ToDoApp />
    </div>
  );
}
