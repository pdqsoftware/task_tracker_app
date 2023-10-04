import React from "react"
import TaskForm from "./TaskForm"
import TaskItem from "./TaskItem"

const Home = ({
    taskItems,
    setTaskItems,
    filteredTasks,
    setFilteredTasks,
    filterType,
    setFilterType,
    deleteItemById, 
    taskCompletion
}) => {
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

export default Home