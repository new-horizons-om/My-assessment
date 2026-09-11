import React from 'react'

const QuestionCard = () => {
  return (
    <div className="bg-white border border-blue-300 flex justify-center items-center gap-3 p-2 rounded-2xl hover:bg-blue-100 transition-all">
    <div className="w-15">
      <div className="w-10 h-10 flex justify-center items-center border border-blue-300 rounded-lg">
        <h1 className="font-bold text-blue-500">DW</h1>
      </div>
    </div>
    <div className="w-full grow">
      <h2 className="text-lg font-semibold">The New Birth in Christ</h2>
      <p className="text-xs text-gray-500">
        Reviewing the act of be Born again!
      </p>
    </div>
    <div className="flex flex-col items-end gap-1 w-30">
      <span className="text-[11px] bg-blue-500 px-2 rounded-md text-white">Not Review</span>
      <p  className="text-[11px]">
        <span>0</span> of <span>5</span>
      </p>
    </div>
  </div>
  )
}

export default QuestionCard