import React from 'react';

import './App.css';

import Header from './components/header/Header';
import Task from './components/task/Task';
import AddTask from './components/addTask/AddTask';

import tasks from './components/task/tasks.json';

function App() {
  const [trackerTask, setTrackerTask] = React.useState(tasks)

  const [btnAdd, setBtnAdd] = React.useState(true);

  const toggleBtnAdd = () =>{
      setBtnAdd(prevBtnAdd => !prevBtnAdd)
  }

  return (
    <div className="container">
      <Header
        btnAdd = {btnAdd}
        setBtnAdd = {setBtnAdd}
        toggleBtnAdd = {toggleBtnAdd}
      />
      {btnAdd && <AddTask
        trackerTask = {trackerTask}
        setTrackerTask = {setTrackerTask}
        btnAdd = {btnAdd}
        setBtnAdd = {setBtnAdd}
        toggleBtnAdd = {toggleBtnAdd}
      />}
      {trackerTask.length > 0 ? <Task
        trackerTask = {trackerTask}
        setTrackerTask = {setTrackerTask}
      /> : <i>There are no task on the reminder board</i>}
    </div>
  );
}

export default App;
