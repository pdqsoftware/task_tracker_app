import React, { useState } from "react"
import "./TaskForm.css"

const TaskForm = (props) => {
    const [inputValue, setInputValue] = useState()

    const addTaskItem = () => {
        console.log(inputValue)
        props.setTaskItems([...props.taskItems, inputValue])
    }

    return (
        <div className='add-task-container'>
            <input onChange={(event) => setInputValue(event.target.value) } type="text" placeholder="Add a task" className='add-task-input' />
            <button onClick={addTaskItem} className='add-task-btn'>Add</button>
        </div>
    )
}

export default TaskForm