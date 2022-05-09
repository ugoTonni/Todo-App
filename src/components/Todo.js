import React from "react";
import { useState } from "react";
import SubmitForm from "./SubmitForm";

const Todo = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className="border-black "
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button
          className="bg-green-200 px-4 py-2 rounded-lg ml-2 my-2 hover:bg-green-400"
          onClick={() => setIsEditing(false)}
        >
          {" "}
          Save
        </button>{" "}
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          className="bg-gray-200 rounded-lg px-4 py-2 my-2 text-1xl ml-2 hover:bg-gray-400 "
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>{" "}
      </>
    );
  }
  return (
    <div className="py-2 bg-gradient-to-r from-sky-100 to-red-100 to-sky-100 my-0">
      <label>
        <input
          className="mr-6"
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChange({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        {taskContent}
        <button
          className="bg-red-200 px-4 py-1 rounded-lg my-2 hover:bg-red-400"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </label>
    </div>
  );
};

export default Todo;
