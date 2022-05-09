import React from "react";
import { useState } from "react";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";

let nextId = 1;
const initialTasks = [{ id: 0, text: "This is the default Task ", done: true }];

export const MainPage = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (text) => {
    if (text === "") {
    } else {
      setTasks([
        ...tasks,
        {
          id: nextId++,
          text: text,
          done: false,
        },
      ]);
    }
  };

  const handleChangeTask = (task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  };

  const handleDeleteTask = (taskId) => {
    console.log("delete triggered");
    setTasks(tasks.filter((t) => t.id !== taskId));
  };
  return (
    <>
      <div className="container p-6 bg-contain h-1000 bg-gradient-to-r from-sky-100 to-red-100 to-sky-100">
        <div>
          <div className="flex-auto m-2 text-center">
            <h1 className="font-serif text-3xl"> Main Todo App </h1>
          </div>
          <div >
            <div className="my-2 mx-2 text-center text-2xl">
              <AddTask onAddTask={handleAddTask} />
            </div>

            <TaskList
              tasks={tasks}
              onChangeTask={handleChangeTask}
              onDeleteTask={handleDeleteTask}
            />
          </div>
        </div>
      </div>
    </>
  );
};
