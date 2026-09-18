import React from "react";
import { Link } from "react-router-dom";

const QuestionCard = ({ question }) => {
  return (
    <Link to={`view/${question?.id}`} className="bg-white border border-blue-300 flex justify-center items-center gap-3 p-2 rounded-2xl hover:bg-blue-100 transition-all cursor-pointer">
      <div className="w-15">
        <div className="w-10 h-10 flex justify-center items-center border border-blue-300 rounded-lg">
          <h1 className="font-bold text-blue-500">
            {question?.topic
               .split(" ")
               .filter(word => /^[a-zA-Z]/.test(word))
               .slice(0, 2)
               .map(word => word[0].toUpperCase())
               .join("")}
          </h1>
        </div>
      </div>
      <div className="w-full grow">
        <h2 className="text-lg font-semibold">{`${question?.topic.length > 20 ? question?.topic.slice(0, 15) + "..." : question?.topic}`}</h2>
        <p className="text-xs text-gray-500">{`${question?.desc.length > 20 ? question?.desc.slice(0, 25) + "..." : question?.desc}`}</p>
      </div>
      <div className="flex flex-col items-end gap-1 w-30">
        <span
          className={`${question?.status === "Not Reviewed" ? "bg-gray-500" : "bg-blue-500"} text-[11px] px-1 rounded-md text-white`}
        >
          {question?.status}
        </span>
        <p className="text-[11px]">
          <span>0</span> of <span>{question?.viewQuestion.length}</span>
        </p>
      </div>
    </Link>
  );
};

export default QuestionCard;
