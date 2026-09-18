import { useParams } from "react-router-dom";
import { questionData } from "../data";
import { useState } from "react";
import AnswerCard from "../components/common/answerCard";

const View = () => {
 
  const { id } = useParams();
  const singleData = questionData.filter((data) => data.id === Number(id));

  return (
    <div>
      {singleData.map((detail) => (
        <div key={detail.id}>
          <div className="flex flex-col items-center justify-center my-2 bg-blue-400 text-white p-3 rounded-md h-40">
            <h1 className="font-bold text-2xl">{detail.topic}</h1>
            <p className="text-md text-gray-100">{detail.desc}</p>
          </div>

          <ul className="space-y-5 mt-8">
            {detail.viewQuestion.map((info, index) => (
                <AnswerCard key={index} info={info}/>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default View;
