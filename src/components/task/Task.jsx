import React from 'react';
import './Task.css';
import tasks from './tasks.json';

const Task = () => {

    const [trackerTask, setTrackerTask] = React.useState(tasks)

  return (
    <>
        {trackerTask.map(task => (
            <div className='event'>
                <h3>{task.text} <h4 style={{color: 'red', cursor:'pointer'}}>x</h4> </h3>
                <p>{task.day}</p>
            </div>
        ))}
    </>
  )
}

export default Task