import Heading from "./common/heading";
import TaskCardHolder from "./common/taskCardHolder";
import { todo, onProgress, inReview, complete } from "../data";

const TaskList = () => {
  
  return (
    <div className="w-full space-y-5 h-full overflow-auto scrollbar-none">
      <Heading
        HeadingText="Task List"
        HeadingDesc="View all current work in progress."
      />

      <div className="p-3 bg-white h-20 rounded-md shadow sticky top-0 -z-1 lg:z-0"></div>

      <div className="grid lg:grid-cols-4 gap-2">
        <TaskCardHolder
          color="gray"
          projectStatus="To-Do"
          taskNo={todo.length}
          data={todo}
        />
        <TaskCardHolder color="brown" projectStatus="On Progress" taskNo={onProgress.length}  data={onProgress}/>
        <TaskCardHolder color="purple" projectStatus="In Review" taskNo={inReview.length}  data={inReview}/>
        <TaskCardHolder color="green" projectStatus="Completed" taskNo={complete.length}  data={complete}/>
      </div>
    </div>
  );
};

export default TaskList;
