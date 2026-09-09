import TaskCard from "./taskCard";

const Model = ({show, setShow, data}) => {
  return (
    <div onClick={()=> setShow(false)}
      className={`${show ? "flex" : "hidden"} fixed top-0 left-0 w-full h-screen bg-gray-600/10 backdrop-blur-xs justify-center items-center z-99 `}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-100 mx-auto bg-white shadow-md rounded-md border border-gray-300 h-auto overflow-auto scrollbar-none p-5">
        <h1>Creating new task</h1>
        <TaskCard />
        {data.map((status, index) => (
          <div key={index}>
            <h3>Task Status: {status.status}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Model;
