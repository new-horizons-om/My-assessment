import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const AnswerCard = ({ info }) => {
  const [show, setShow] = useState(false);
  return (
    <li
      onClick={() => setShow((prev) => !prev)}
      className="p-2 border border-blue-400/40 rounded-md overflow-hidden"
    >
      <div className="flex items-center justify-between">
        <h3 className="grow mb-2 font-semibold">{info?.question}</h3>
        {show? <FaChevronUp/> : <FaChevronDown/>}
      </div>
      <p className={`${!show && "hidden"} text-gray-600`}>{info?.answer}</p>
    </li>
  );
};

export default AnswerCard;
