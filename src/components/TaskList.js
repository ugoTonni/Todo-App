import React from "react";
import Todo from "./Todo";

export const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-sky-100 to-red-100 to-sky-100 my-0">
      <ul>
        
        {tasks.map(task => (
          <li key={task.id}>
            <Todo 
              task={task}
              onChange={onChangeTask}
              onDelete={onDeleteTask}
            />
          </li>
        ))}
      </ul>
      </div>
      
    </>
  );
};
