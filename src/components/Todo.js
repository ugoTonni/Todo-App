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
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => setIsEditing(false)}
        >
          {" "}
          Save
        </button> {" "}
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>{" "}
      </>
    );
  }
  return (
    <label>
      <input
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
        className="btn btn-outline-danger btn-sm"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </label>
  );
};

export default Todo;
