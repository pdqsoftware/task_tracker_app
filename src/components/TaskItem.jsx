import React from "react"
import "./TaskItem.css"

const TaskItem = (props) => {
    return (
        <div className='task-tracker-item-container'>
            <div className='task-tracker-item'>{props.task}</div>
            <button className="task-tracker-item-del">
                Del
            </button>
        </div>
    )
}

export default TaskItem