import React, { useState } from "react"
import "./TaskForm.css"

const TaskForm = ({ setTaskItems, taskItems }) => {
    const [inputValue, setInputValue] = useState()

    const addTaskItem = () => {
        // Ensure some text, other than spaces, has been entered
        if (inputValue.trim() === "") return
        setTaskItems([...taskItems, { text: inputValue, id: taskItems.length, completed: false }])
        // Clear input value after update
        setInputValue("")
    }

    // const addTaskItem = () => {
    //     // Ensure some text, other than spaces, has been entered
    //     if (inputValue.trim() === "") return
    //     setTaskItems(prev => {
    //         console.log("prev:", prev)
    //         return [
    //             ...prev, { text: inputValue, id: prev.length + 1, completed: false }
    //         ]
    //     })
    //     // Clear input value after update
    //     setInputValue("")
    // }

    return (
        // Listen for the 'Enter' key being depressed and call addTaskItem()
        <div className='add-task-container' onKeyDown={(e) => e.key === "Enter" && addTaskItem()}>
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value) } type="text" placeholder="Add a task" className='add-task-input' />
            <button onClick={addTaskItem} className='add-task-btn'>Add</button>
        </div>
    )
}

export default TaskForm