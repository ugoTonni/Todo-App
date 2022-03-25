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
    console.log("delete triggered")
    setTasks(tasks.filter(t => t.id !== taskId));
  };
  return (
    <div>
      <h1> Main Todo App </h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};
