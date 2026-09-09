import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { FaTasks, FaTimes } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuHistory } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";



const links = [
  {
    title: "Dashboard",
    link: "/",
    icon: <MdOutlineSpaceDashboard />
  },
  {
    title: "Questions",
    link: "/question",
    icon: <GoProjectRoadmap />
  },
  {
    title: "Bible",
    link: "/bible",
    icon: <FaTasks />
  },
  {
    title: "History",
    link: "/histroy",
    icon: <LuHistory />
  },
  {
    title: "Settings",
    link: "/settings",
    icon: <IoSettingsOutline/>
  },
  {
    title: "Help Center",
    link: "/help-center",
    icon: <IoIosHelpCircleOutline/>
  },


]

const Sidebar = ({close}) => {
  return (
    <nav className="flex flex-col h-full">
      <div className="flex flex-col gap-6 flex-1">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-400">My Assessment</h1>
        <button onClick={()=> close(false)} className="lg:hidden text-orange-400"><FaTimes size={25}/></button>
      </div>

     
      <div>
        <ul className=" space-y-4">
          {
            links.map((link, index)=> (
              <li key={index} className="w-full">
            <NavLink
              to={link.link}
              onClick={()=> close(false)}
              className={({ isActive}) =>
                 isActive ? "block bg-orange-400 text-white w-full p-1 rounded-sm" : "block p-1"
              }
            >
              <span className="flex items-center gap-2">{link.icon}{link.title}</span>
              
            </NavLink>
          </li>
            ))
          }

          
      
        </ul>
      </div>

      </div>

      <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-orange-400 py-2 flex justify-center items-center"><FaRegUser size={25} color="white"/></div>
            <div>
              <h1 className="text-sm font-semibold">Username</h1>
              <p className="text-xs ">Staff</p>
            </div>
          </div>
          <button title="Logout" className="flex items-center gap-2 cursor-pointer"><IoLogOutOutline size={25}/></button>
      </div>
    </nav>
  );
};

export default Sidebar;
