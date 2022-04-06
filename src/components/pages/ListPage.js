import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import AddTask from "../Tasks/AddTask";
import TaskData from "../Tasks/TaskData";
import Tasks from "../Tasks/Tasks";
import SearchTask from "../Tasks/SearchTask";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";

export default function ListPage(){
    const [taskList, setTaskList] = useState(TaskData);
  const [search, setSearch] = useState("");

  const checkTask = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  const addTask = (newTask) => {
    newTask.id = uuidv4();
    setTaskList([newTask, ...taskList]);
  };
  return (
    <>
      <Header />
      <SideNav/>
      <div className="container">
        <AddTask handelAdd={addTask} />
        <SearchTask search={search} setSearch={setSearch} />
        <Tasks
          taskList={taskList.filter((task) =>
            task.title.toLowerCase().includes(search.toLowerCase())
          )}
          handelDelete={deleteTask}
          handelCheck={checkTask}
        />
      </div>
      <Footer />
    </>
  );
}