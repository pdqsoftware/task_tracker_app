import React, { useState, useRef, useEffect } from "react"
import "./TaskForm.css"

const TaskForm = ({ setTaskItems, taskItems }) => {
    const [inputValue, setInputValue] = useState("")

    const inputRef = useRef(null)

    useEffect(() => {
        // Focus on the input element when the component mounts
        inputRef.current.focus()
        // [] ensure that the useEffect only runs once when the component renders
    }, [])

    const addTaskItem = () => {
        // Ensure some text, other than spaces, has been entered
        if (inputValue.trim() === "") return

        // .length will not always give the correct id.  Must check for highest id in the array.
        // setTaskItems([...taskItems, { text: inputValue, id: taskItems.length, completed: false }])

        // Use reduce() to find the maximum Id, then increment it
        let maxId = 0
        if (taskItems.length) {
            // Will always produce the object with the highest id - so take its .id and add 1 (useful for huge arrays)
            maxId = parseInt(taskItems.reduce((prev, current) => (prev && prev.id > current.id) ? prev : current).id) + 1
        }

        // Or use map() to find the maximum Id (works well with small arrays)
        const maxId2 = Math.max(...taskItems.map(task => task.id), 0) + 1

        // Update the taskItems array
        setTaskItems([...taskItems, { text: inputValue, id: maxId2, completed: false }])

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
            <input ref={inputRef} value={inputValue} onChange={(event) => setInputValue(event.target.value) } type="text" placeholder="Add a task" className='add-task-input' />
            <button onClick={addTaskItem} className='add-task-btn'>Add</button>
        </div>
    )
}

export default TaskForm