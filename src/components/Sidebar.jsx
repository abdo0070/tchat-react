import Chats from "./Chats"
import Search from "./Search"
import UserInfo from "./UserInfo"

const Sidebar = () => {
  return (
    <div>
        <UserInfo />
        <Search />
        <Chats />
    </div>
  )
}

export default Sidebar
