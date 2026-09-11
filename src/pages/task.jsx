import { useParams } from "react-router-dom"
import { taskData } from "../data"
import TaskCard from "../components/common/taskCard"


const Task = () => {
    const {taskID} = useParams()

    const singleTask = taskData.filter((task)=> task.projectID === Number(taskID))

  return (
    <div className="space-y-5">
        <h1 className="text-lg font-semibold">Task Detail View</h1>
        {singleTask.map((task, index)=>(
            <TaskCard key={index} task={task}/>
        ))}
    </div>
  )
}

export default Task