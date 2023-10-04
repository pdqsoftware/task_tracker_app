import React from "react"
import { useState } from "react"
import "./TaskItem.css"

// Use destructuring to split out the individual props
const TaskItem = ({ task, deleteItemById ,taskCompletion }) => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
        taskCompletion(task.id, !isChecked)
    }
    
    return (
        <div className='task-tracker-item-container'>
            <div className='task-tracker-item'>{task.text}</div>
            <span 
                className="checkmark"
                onClick={handleCheckboxChange}
                style={{ backgroundColor: isChecked ? "#2ecc71" : "whitesmoke" }}
            >
                <span className="icon">Ok</span>
            </span>
            <button className="task-tracker-item-del" onClick={() => deleteItemById(task.id)}>
                Del
            </button>
        </div>
    )
}

export default TaskItem