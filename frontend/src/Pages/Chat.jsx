import logo from "../images/x_logo_background-removed.png"
import { Link } from "react-router-dom"
import { Bell, CircleEllipsis, CircleSlash2, Ellipsis, Feather, FeatherIcon, HouseIcon, Mail, SearchIcon, User, UserPlus, Users } from "lucide-react";

const Chat = () => {
  return (
    <>
        <div className="flex h-screen">
            <div className="flex-[1] border border-black border-r-gray-800 ">
                <div className="flex flex-col items-end px-4 gap-4">
    
                    <div className="mt-5">
                        <Link to={"/"} className="btn btn-ghost">
                            <img src={logo} alt="x_logo" className=""/>
                        </Link>
                    </div>

                    <div>
                        <Link to={"/"} className="btn btn-ghost rounded-full w-full">
                            <HouseIcon className="w-8 h-8"/>
                        </Link>
                    </div>

                    <div>
                        <Link to={"/explore"} className="btn btn-ghost rounded-full w-full">
                            <SearchIcon className="w-8 h-8"/>
                        </Link>
                    </div>

                    <div>
                        <Link to={"/notifications"} className="btn btn-ghost rounded-full p-3 w-full">
                            <Bell className="w-8 h-8"/>
                        </Link>
                    </div>

                    <div>
                        <Link to={"/follow"} className="btn btn-ghost rounded-full p-3 w-full">
                            <UserPlus className="w-8 h-8"/>
                        </Link>
                    </div>

                    <div>
                        <Link to={"/chat"} className="btn btn-ghost rounded-full p-3 w-full">
                            <Mail className="w-8 h-8"/>
                        </Link>
                    </div>

                    <div>
                        <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full">
                            <CircleSlash2 className="w-8 h-8"/>
                        </Link>
                    </div>

                    <div>
                        <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full">
                            <Users className="w-8 h-8"/>
                        </Link>
                    </div>

                    <div>
                        <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full">
                            <User className="w-8 h-8"/>
                        </Link>
                    </div>

                    <div>
                        <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full">
                            <CircleEllipsis className="w-8 h-8"/>
                        </Link>
                    </div>

                    <div className="flex gap-5 items-end ">
                        <Link to={"/compose"} className="btn btn-ghost rounded-full p-3 w-full">
                            <Feather className="w-8 h-8"/>
                        </Link>
                    </div>

                    <div className="flex gap-5 items-end ">
                        <img src="" alt="profile" className="w-8 h-8 rounded-full mt-4 mr-4"/>
                    </div>

                </div>
            </div>
            <div className="flex-[5] border border-black border-l-gray-800">

            </div>
            <div className="flex-[6] border border-black border-l-gray-800">

            </div>
        </div>    
    </>
  )
}

export default Chat