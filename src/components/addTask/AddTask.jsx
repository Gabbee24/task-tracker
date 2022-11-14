import React from 'react'
import { useState } from 'react'
import './AddTask.css'
import Button from '../button/Button'

const AddTask = ({trackerTask, setTrackerTask, btnAdd ,setBtnAdd ,toggleBtnAdd}) => {
    const [task, setTask] = useState({
        text: '',
        day: '',
        reminder: false
    });

    const {text, day, reminder} = task;

    console.log(task);

    //funvtion for handling the form for adding task
    function handleTask(e) {
       const {name , value, type, checked} = e.target
        setTask(prevTask => ({
            ...prevTask, 
            [name] : type === 'checkbox' ? checked : value
        }))
    }

    //funtion to submit the task form
    function submitTask(e) {
        e.preventDefault()
        if (!text){
            alert('Please add a task')
            return
        }
        
        addTask(task)

        setTask({
            text: '',
            day: '',
            reminder: false
        })
    }

    //function for creating random id for newly created tasks
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id, ...task}
        setTrackerTask([...trackerTask, newTask])
    }


  return (
    <form className="add-form" onSubmit={submitTask}>
        <div className="form-control">
            <input 
                type="text" 
                placeholder='Add Task' 
                name='text' 
                value={text}
                onChange={handleTask}
            />
        </div>
        <div className="form-control">
            <input 
                type="text" 
                placeholder='Add Day & Time' 
                name='day' 
                value={day}
                onChange={handleTask}
            />
        </div>
        <div className="form-control">
            <label htmlFor='setReminder'>Set Reminder</label>
            <input 
                id='setReminder'
                checked={reminder}
                type="checkbox"
                name='reminder'
                onChange={handleTask} 
            />
        </div>

        <Button 
            text='Add Task'
            buttonClass='btn-block'
        />
    </form>
  )
}

export default AddTask