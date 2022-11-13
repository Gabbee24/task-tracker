import React from 'react';
import './Task.css';
import {FaTimes} from 'react-icons/fa'

const Task = ({trackerTask, setTrackerTask}) => {

    const deleteTask = (id) => {
        setTrackerTask(trackerTask.filter((task) => task.id !== id))
    }

    const toggleReminder = (id) => {
        setTrackerTask(trackerTask.map((task) => 
            task.id === id ? 
            {...task, reminder: !task.reminder} : task ))
    }

  return (
    <>

        {trackerTask.map(task => (
            <div key={task.id} className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>
                <h4>{task.text} 
                    <FaTimes
                        style={{
                            color: 'red', 
                            cursor:'pointer',
                            float: 'right'
                        }}
                        onClick={() => deleteTask(task.id)}
                    />                    
                </h4>
                <p>{task.day}</p>
            </div>
        ))} 
    </>
  )
}

export default Task