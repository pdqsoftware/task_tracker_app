import { useEffect, useState } from "react"
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import AboutPage from "./components/About";

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


    //
    // In its prevoious form the state was lost as the user moved between pages.
    // So 'App' was removed from the <Routes> section of index.js - this is because the contents of <Routes> will rerender whenever a route changes.
    // By including only App's JSX, below, within <Routes> then only the jsx rerenders leaving the state, above, intact - very clever!
    //
    // Now all the JSX from App has been moved to <Home>.
    // Then all the other <Route>s have been included here.  This ensures that App state never rerenders
    //

    return (
        <Routes>
            <Route 
                index
                path="/" 
                element={
                    <Home 
                        taskItems={taskItems}
                        setTaskItems={setTaskItems}
                        filteredTasks={filteredTasks}
                        setFilteredTasks={setFilteredTasks}
                        filterType={filterType}
                        setFilterType={setFilterType}
                        deleteItemById={deleteItemById}
                        taskCompletion={taskCompletion}
                    />
                } 
            />
            <Route path="/about" Component={AboutPage} />
            <Route path="*" element={<div>Page not found!<Link to="/">Go to home page</Link></div>} />
        </Routes>
    )
}

export default App;
