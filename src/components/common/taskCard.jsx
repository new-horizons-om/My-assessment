import { FiLoader } from "react-icons/fi";
import { Link } from "react-router-dom";



const TaskCard = ({task, color}) => {

    const styleColor = {
        borderColor: color,
        color: color,
      };

    const bgColor = {
      backgroundColor: color,
    }


  return (
    <div className="p-2 rounded-sm bg-gray-100 space-y-3 border border-gray-300 mb-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`${task?.rate === "High"?"bg-red-500 text-white" : "bg-white"} text-sm  px-2 py-0.5 rounded-sm`}>{task?.rate}</span>
          <span className="text-sm bg-white px-2 py-0.5 rounded-sm">{task?.type}</span>
        </div>
        <div>
            <small>{task?.projectID}</small>
        </div>
      </div>

      <div className={`${task?.image === "" && "hidden"} w-full justify-center items-center bg-amber-500 h-30 rounded-md overflow-hidden`}>
        <img src={task?.image} alt={task?.image}/>
      </div>

      <div>
        <h3 className="text-md font-semibold" style={styleColor}>{task?.title}</h3>
        <p className="text-xs text-gray-500">{task?.desc}</p>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-center">
            <span className="inline-flex text-sm items-center gap-1">{task?.status}</span>
            <span>{task?.progess}%</span>
        </div>
        <div>
            <progress className="w-full h-2" value={`${task?.progess}`} max={"100"}  min={"0"}></progress>
        </div>
        <Link to={`/task/${task?.projectID}`} className="block text-center rounded-md py-1 text-white font-semibold" style={bgColor}>View Task</Link>
      </div>
    </div>
  );
};

export default TaskCard;
