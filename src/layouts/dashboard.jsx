import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import "../../src/index.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 bg-gray-100 h-screen relative z-99">
      <div
        className={`${showSidebar ? "translate-x-0" : "-translate-x-full "} absolute h-screen transform transition ease-linear lg:translate-0 lg:static lg:col-span-1 w-full lg:w-auto bg-white p-5`}
      >
        <Sidebar close={setShowSidebar} />
      </div>
      <div className="col-span-1 lg:col-span-5 p-5 flex flex-col justify-start items-start gap-2 h-full overflow-y-auto">
        <div className="lg:hidden flex justify-between w-full bg-blue-600 text-white p-1 rounded-md shadow">
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
              <p className="text-blue-600 font-bold">OM</p>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
