
import QuestionCard from "./common/questionCard";
import { questionData } from "../data";

const Question = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="h-50 p-5 flex justify-center items-center text-sm bg-white border border-gray-300 rounded-lg">
        <h1 className="text-2xl text-gray-800 font-semibold">
          Discipleship Assessment Questions
        </h1>
      </div>
      <div className="space-y-3">
        {
            questionData.map((question, index) =>(
                <QuestionCard key={index} question={question}/>
            ))
        }
      </div>
    </div>
  );
};

export default Question;
