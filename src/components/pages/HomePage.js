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
import Welcome from "./Welcome";

export default function HomePage() {
  
  return (
    <>
      <Header />
      <SideNav />
      <Welcome />
      <Footer />
    </>
  );
}
