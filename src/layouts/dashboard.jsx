import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import "../../src/index.css";
import { FaBars } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className=" bg-gray-100 h-screen relative z-99 scrollbar-none w-200 mx-auto overflow-hidden">
      <div className="absolute flex justify-center items-center w-full bottom-5">
        <Sidebar />
      </div>

      <div className="col-span-1 lg:col-span-5 lg:p-5 pt-2 px-4 pb-10 flex flex-col justify-start items-start gap-2 h-full overflow-y-auto">
        <div className="lg:hidden flex justify-between w-full bg-blue-400 text-white p-2 rounded-md shadow">
          <div className="inline-flex items-center gap-2">
            <button
              onClick={() => setShowSidebar((prev) => !prev)}
              className="block lg:hidden"
            >
              <FaBars size={22} />
            </button>
            <h1 className="text-lg font-semibold">My assessment</h1>
          </div>

          <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
            <p className="text-blue-400 font-bold">OM</p>
          </div>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
