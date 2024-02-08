import { calcTime } from "../helpers/calculateTime"

const Message = ({msg}) => {
  return (
    <div className="flex items-center gap-6 p-2 m-2">
    <div className="flex items-center flex-col rounded-full">
      <img className="w-14 rounded-full" src="/logo/logo-black.svg" alt="" />  
      <span className="text-sky-600 font-medium text-sm">{calcTime(msg.send_at)}</span>
    </div>
    <div className="flex items-center">
      <span className="bg-white p-3 font-semibold rounded-b-lg">{msg.content}</span>
    </div>
    </div>
  )
}

export default Message
