import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { FaTasks, FaTimes } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuHistory } from "react-icons/lu";

const links = [
  {
    title: "Dashboard",
    link: "/",
    icon: <MdOutlineSpaceDashboard />,
  },
  {
    title: "Questions",
    link: "/question",
    icon: <GoProjectRoadmap />,
  },
  {
    title: "Bible",
    link: "/bible",
    icon: <FaTasks />,
  },
  {
    title: "History",
    link: "/histroy",
    icon: <LuHistory />,
  },
  {
    title: "Settings",
    link: "/settings",
    icon: <IoSettingsOutline />,
  }
];

const Sidebar = ({ close }) => {
  return (
    <nav className="mx-auto bg-blue-300 p-2 rounded-full">
      <ul className="flex gap-6">
        {links.map((link, index) => (
          <li key={index} title={`${link.title}`}>
            <NavLink
              to={link.link}
              onClick={() => close(false)}
              className={({ isActive }) =>
                isActive
                  ? "block bg-white text-blue-500 w-full p-1 rounded-sm"
                  : "block p-1 text-white"
              }
            >
              <span className="flex items-center gap-2">{link.icon}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
