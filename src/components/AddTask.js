import React, { useState } from "react";

export const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <form >
        <input
        placeholder="Add new Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="btn btn-outline-dark btn-sm" 
            onClick={(e) => {
              e.preventDefault();
          setText("");
          onAddTask(text);
        }}
      >
        Add Task
      </button>
        </form>
      
      </div>
      
    </>
  );
};
