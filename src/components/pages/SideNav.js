import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";
import AboutPage from './AboutPage';
import ListPage from './ListPage';
import TaskList from './ListPage';
import AddTaskPage from './ListPage';


export default props => {
  return (
    <Menu>
      <Link to="/">Home</Link>
      <Link to="/taskList" component={ListPage}>Task List</Link>
      <Link to="/about" component={AboutPage}>About Us</Link>
    </Menu>
  );
};