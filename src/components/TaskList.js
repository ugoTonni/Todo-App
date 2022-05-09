import React from "react";
import Todo from "./Todo";

export const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <>
      <div>
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
