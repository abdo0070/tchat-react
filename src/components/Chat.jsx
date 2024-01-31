import Header from "./Header"
import Messages from "./Messages"

const Chat = () => {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <Messages />
      <div className="">
        <form action="">
          <input className="outline-none w-full p-3 text-lg font-bold"  placeholder="Type..." type="text" />
        </form>
      </div>
    </div>
  )
}

export default Chat
