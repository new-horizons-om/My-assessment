import { FaCalendar } from "react-icons/fa"

const Heading = ({HeadingText="Heading", HeadingDesc="New description"}) => {
  return (
    <div className="flex justify-between items-center">
        <div>
            <h1 className="text-2xl font-semibold">{HeadingText}</h1>
            <p className="text-gray-500">{HeadingDesc}</p>
        </div>
        <div className="p-2 rounded-md bg-orange-400 inline-flex gap-5 text-white">
            <FaCalendar/>
            <small>{`${new Date().getDay()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`}</small>
        </div>
    </div>
  )
}

export default Heading