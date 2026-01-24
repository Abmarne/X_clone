import logo from "../images/x_logo_background-removed.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Bell, CircleEllipsis, CircleSlash2, Ellipsis, Feather, FeatherIcon, HouseIcon, Mail, SearchIcon, Settings, User, UserPlus, Users, MailPlus } from "lucide-react";

const Chat = () => {
  const [activeTab, setActiveTab] = useState(true);

  return (
    <>
        <div className="flex h-screen overflow-hidden">
            <div className="flex-[1] border border-black border-r-gray-800 overflow-hidden">
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

            <div className="flex-[5] border border-black border-l-gray-800 overflow-hidden flex flex-col h-screen">
                <div className="flex-shrink-0">
                    <div className="flex justify-between">
                        <span className="m-5 font-bold text-xl">Chat</span>
                        <div className="flex gap-3">
                            <Settings className="mt-5"></Settings>
                            <MailPlus className="mt-5 mr-5"></MailPlus>
                        </div>
                    </div>

                    <div className="flex flex-col items-start px-10 py-5">
                        <div className="w-full mt-2">
                            <input id="search" type="text" placeholder="Search"
                            className="w-full h-12 rounded-full bg-black border border-gray-800 
                            focus:border-[#1D9BF0] focus:outline-none text-white placeholder:text-gray-500 px-4">
                            </input>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        
                        <button
                            onClick={() => setActiveTab(true)}
                            className={`border border-gray-800 p-2 rounded-full ml-10
                                    ${activeTab ? "bg-white text-black" : "text-gray-500"}
                                `}
                        >All</button>
                        <button
                            onClick={() => setActiveTab(false)}
                            className={`border border-gray-800 p-2 rounded-full
                                    ${!activeTab ? "bg-white text-black" : "text-gray-500"}
                                `}
                        >Requests</button>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center flex-1 overflow-hidden">
                    <Mail className="h-16 w-16 mb-5"></Mail>
                    <div className="font-bold">Empty Inbox</div>
                    <div className="text-gray-600">Message someone</div>
                </div>
            </div>

            <div className="flex-[6] border border-black border-l-gray-800 overflow-hidden">
                <div className="flex items-center justify-center h-full">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div className="flex items-center justify-center">
                            <div className="bg-gray-900 rounded-full p-4">
                                <Mail className="w-16 h-16"></Mail>
                            </div>
                        </div>
                        <div className="font-bold text-lg">Start Conversation</div>
                        <div className="text-gray-600">Choose from your existing Conversations, or start a new one.</div>
                        <div>
                            <button className="bg-white text-black p-2 rounded-full font-bold">New Chat</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>    
    </>
  )
}

export default Chat