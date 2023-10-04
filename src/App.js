import { useEffect, useState } from "react"
import './App.css';
import TaskForm from './components/TaskForm'
import TaskItem from "./components/TaskItem"

function App() {
    // taskItems contains a complete list of all the tasks, as an array
    const [taskItems, setTaskItems] = useState([])
    // filterType is the selection to display: all, completed or pending
    const [filterType, setFilterType] = useState("all")
    // Use another array to hold the filtered tasks
    const [filteredTasks, setFilteredTasks] = useState([])

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

    // Executes when filterType or taskItems change
    useEffect(() => {
        if (filterType === "completed") {
            const newTaskItems = taskItems.filter((task) => task.completed)
            setFilteredTasks(newTaskItems)
        } else if (filterType === "pending") {
            const newTaskItems = taskItems.filter((task) => !task.completed)
            setFilteredTasks(newTaskItems)
        } else {
            setFilteredTasks(taskItems)
        }
    }, [filterType, taskItems])
    // Note: empty array, means useEffect() runs once when the component starts
    // Note: no array at all, means useEffect() runs every time the component updates

    return (
        <>
            {/* TaskForm */}
            <TaskForm setTaskItems={ setTaskItems } taskItems={ taskItems } />

            {/* TasksContainer */}
            <div className='task-tracker-container'>
                {/* Info Bar */}
                <div className="task-tracker-info-bar">
                    <span>{taskItems.length} items</span>
                    <span 
                        style={{ backgroundColor: filterType === "all" && "#dcdcdc"}}
                        onClick={() => setFilterType("all")}
                    >
                        All
                    </span>
                    <span
                        style={{ backgroundColor: filterType === "completed" && "#dcdcdc"}}
                        onClick={() => setFilterType("completed")}
                    >
                        Completed
                    </span>
                    <span 
                        style={{ backgroundColor: filterType === "pending" && "#dcdcdc"}}
                        onClick={() => setFilterType("pending")}
                    >
                        Pending
                    </span>
                </div>
                {/* TaskItem */}
                {
                    filteredTasks.map((task, index) => {
                        return <TaskItem key={index} task={task} deleteItemById={deleteItemById} taskCompletion={taskCompletion} />
                    })
                }
            </div>
        </>
    )
}

export default App;
