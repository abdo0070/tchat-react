import Header from "./Header"
import Messages from "./Messages"

const Chat = () => {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <Messages />
      <div className="flex bg-slate-100 justify-between p-3">
          <input className="outline-none bg-transparent w-full text-lg font-bold"  placeholder="Type..." type="text" />
          <button className="p-2 w-28 text-white bg-cyan-500 mr-6">SEND</button>
      </div>
    </div>
  )
}

export default Chat
