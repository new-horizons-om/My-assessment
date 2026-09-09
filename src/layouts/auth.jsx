import React from "react";
import { Link, Outlet } from "react-router-dom";
import { CiAlignBottom } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa";

const Auth = () => {
  return (
    <div className="grid lg:grid-cols-5  h-screen p-10">
     
      <div className=" lg:col-span-3 flex justify-center pt-10 overflow-y-auto scrollbar-none relative">
      <Link to={"/auth"} className="absolute top-0 lg:left-0 right-0 flex max-w-max items-center gap-1 text-gray-900 hover:text-orange-400 tranisition">
        <FaChevronLeft /> Back
      </Link>
        <Outlet />
      </div>

      <div className="bg-orange-400 hidden lg:flex flex-col justify-center items-center lg:col-span-2 rounded-4xl shadow-ld relative">
        <span className="text-white/70 animate-ping absolute top-60">
          <CiAlignBottom size={100} />
        </span>
        <span className="text-white/70">
          <CiAlignBottom size={200} />
        </span>
        <h1 className="text-5xl text-white/70 font-bold">Bassi</h1>
      </div>
    </div>
  );
};

export default Auth;
