import React, { useState } from "react";
import Card from "../shared/Card";

export default function AddTask({ handelAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handelTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handelDesChange = (e) => {
    setDescription(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (title.length !== 0 && description.trim().length > 10) {
      const newTask = {
        title,
        description,
      };
      handelAdd(newTask);
      setTitle("");
    }
  };

  return (
    <Card>
      <form onSubmit={handelSubmit}>
        <h2>Add a task in the Task List</h2>
        <div>
          <input
            className="inputbox"
            onChange={handelTitleChange}
            type="text"
            placeholder="Name of the Task"
            value={title}
          />
          <input
            className="inputbox"
            onChange={handelDesChange}
            type="text"
            placeholder="Task Description"
          />
        </div>
        <button className="btn" type="submit">Add Task</button>
      </form>
    </Card>
  );
}
