import React, { useEffect } from "react"
import { useState } from "react"
import { AiFillDelete } from "react-icons/ai"
import { BsCheckSquare, BsCheckSquareFill } from "react-icons/bs"
import "./TaskItem.css"

// Use destructuring to split out the individual props
const TaskItem = ({ task, deleteItemById ,taskCompletion }) => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
        taskCompletion(task.id, !isChecked)
    }

    useEffect(() => {
        setIsChecked(task.completed)
    }, [task.completed, isChecked])

    return (
        <div className='task-tracker-item-container'>
            <div className='task-tracker-item'>{task.text}</div>
            <span 
                className="checkmark"
                onClick={handleCheckboxChange}
            >
                { isChecked ? <BsCheckSquareFill className="icon" fill="#2ecc71" /> : <BsCheckSquare className="icon" /> }
            </span>
            <button className="task-tracker-item-del" onClick={() => deleteItemById(task.id)}>
                <AiFillDelete className="icon" fill="red" />
            </button>
        </div>
    )
}

export default TaskItem