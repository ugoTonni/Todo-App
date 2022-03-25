import React, { useState } from "react";
import TaskList from "./TaskList";
import Todo from './Todo'

export default function SubmitForm() {
  const [items, setItems] = useState([]);
  const [texts, setText] = useState("");

  const textStyles = ({ isDone }) => {
    return {
      textdecoration: isDone ? "underline" : "none",
    };
  };

  const addItems = (e) => {
    e.preventDefault();
    if (texts !== "") {
      setItems([
        ...items,
        {
          id: texts.length,
          value: texts,
        },
      ]);
    }

    setText("");
  };

  const removeItem = (key) => {
    const newItems = [...items];
    newItems.splice(key, 1);
    setItems(newItems);
  };

  const markItem = (key) => {
    const newItems = [...items];
    newItems[key].isDone = false;
    setItems(newItems);
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <form onSubmit={addItems}>
        <input
          type="text"
          className="todo-input"
          value={texts}
          onChange={onChangeHandler}
          placeholder="Add a Todo"
        />
        <button
          variant="primary"
          className="todo-button btn btn-primary"
          type="submit"
        >
          Add Items
        </button>{" "}
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.value}
            <button className="btn btn-danger">
              Edit{" "}
            </button>
            <button className="btn btn-danger" onClick={removeItem}>
              x{" "}
            </button>{" "}
            <button className="btn btn-success" onClick={markItem}>
              ✓{" "}
            </button>
            <Todo
              Items={items}
              
              onDeleteTask={removeItem}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
