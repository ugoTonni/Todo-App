import React, { useState } from "react";

export const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");
  return (
    <>
      <div className="bg-gradient-to-r from-sky-100 to-red-100 to-sky-100 ">
        <form>
          <input
            className="italic px-2 rounded-md"
            placeholder="Add new Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className=" bg-gray-200 rounded-lg px-4 py-1 text-1xl mx-3  hover:bg-gray-300"
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
