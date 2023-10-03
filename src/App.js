import { useState } from "react"
import './App.css';
import TaskForm from './components/TaskForm'
import TaskItem from "./components/TaskItem"

function App() {
    // taskItes contains a complete list of all the tasks
    const [taskItems, setTaskItems] = useState([])


    return (
        <>
            {/* TaskForm */}
            <TaskForm setTaskItems={ setTaskItems } taskItems={ taskItems } />

            {/* TasksContainer */}
            <div className='task-tracker-container'>
                {/* TaskItem */}
                {
                    taskItems.map((task, index) => {
                        return <TaskItem key={index} task={task} />
                    })
                }
            </div>
        </>
    )
}

export default App;
