import React from "react";
import QuestionCard from "./common/questionCard";

const Question = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="h-50 p-5 flex justify-center items-center text-sm bg-white border border-gray-300 rounded-lg">
        <h1 className="text-2xl text-gray-800 font-semibold">
          Discipleship Assessment Questions
        </h1>
      </div>
      <div className="space-y-3">
            <QuestionCard/>
            <QuestionCard/>
            <QuestionCard/>
            <QuestionCard/>
      </div>
    </div>
  );
};

export default Question;
