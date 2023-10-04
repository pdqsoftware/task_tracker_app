import { useState } from "react"
import './App.css';
import TaskForm from './components/TaskForm'
import TaskItem from "./components/TaskItem"

function App() {
    // taskItems contains a complete list of all the tasks, as an array
    const [taskItems, setTaskItems] = useState([])

    const deleteItemById = (id) => {
        // Removes one element from the array
        const newTaskItems = taskItems.filter(item => item.id !== id)
        setTaskItems(newTaskItems)
    }

    const taskCompletion = (taskId, isComplete) => {
        setTaskItems((prevTaskItems) => {
            // Return the mapped array after update
            return prevTaskItems.map((task) => {
                if (task.id === taskId) {
                    // Return the updated task
                    return {...task, completed: isComplete}
                }
                // Return the other tasks that do not match
                return task
            })
        })
    }

    console.log(taskItems)
    return (
        <>
            {/* TaskForm */}
            <TaskForm setTaskItems={ setTaskItems } taskItems={ taskItems } />

            {/* TasksContainer */}
            <div className='task-tracker-container'>
                {/* TaskItem */}
                {
                    taskItems.map((task, index) => {
                        return <TaskItem key={index} task={task} deleteItemById={deleteItemById} taskCompletion={taskCompletion} />
                    })
                }
            </div>
        </>
    )
}

export default App;
