import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaPlus } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import TaskCard from "./taskCard";
import Model from "./model";

const TaskCardHolder = ({
  color = "gray",
  taskNo = 0,
  projectStatus = "To-Do",
  data,
}) => {
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);
  const borderColor = {
    borderColor: color,
    color: color,
  };

  return (
    <div className={`${hidden ? "h-10" : "h-auto"} bg-white p-2 rounded-lg`}>
      <div
        className={`flex justify-between items-center border-l-6 mb-4`}
        style={borderColor}
      >
        <div className="pl-3 flex justify-start items-center gap-4">
          <small className="font-semibold">{projectStatus}</small>
          <span className="bg-gray-200 px-1.5 py-0.5 text-sm ">{taskNo}</span>
        </div>
        <div className="flex justify-end items-center gap-4">
          <button onClick={() => setShow(true)} className="cursor-pointer">
            <FaPlus />
          </button>
          <button onClick={()=> setHidden(prev => !prev)} className="cursor-pointer">
            {hidden ? <FaChevronUp /> : <FaChevronDown /> }
            
          </button>
        </div>
      </div>
      <div className={`${hidden&&"hidden"}`}>
        {data?.map((task, index) => (
          <TaskCard key={index} task={task} color={color} />
        ))}
      </div>

      <Model show={show} setShow={setShow} data={data} />
    </div>
  );
};

export default TaskCardHolder;
