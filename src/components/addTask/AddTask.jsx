import React from 'react'
import './AddTask.css'

const AddTask = () => {
  return (
    <form className="add-form">
        <div className="form-control">
            <input type="text" placeholder='Add Task' name='Task' />
        </div>
        <div className="form-control">
            <input type="text" placeholder='Add Day & Time' name='Day And Time' />
        </div>
        <div className="form-control">
            <label>Set Reminder</label>
            <input type="checkbox" />
        </div>

        <input type="submit" value='Save Task' />
    </form>
  )
}

export default AddTask