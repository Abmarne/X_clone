import logo from "../images/x_logo_background-removed.png"
import {Link} from "react-router"
import { Bell, CircleEllipsis, CircleSlash2, HouseIcon, Mail, SearchIcon, User, UserPlus, Users } from "lucide-react"

const HomePage = () => {
    return (
        <div className="relative h-full w-full">
            <div className="flex">
                {/* Left Side */}
                <div className="flex-[3] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800">
                    <div className="absolute flex flex-col items-center justify-center">
                        <div className="m-5">
                            <div>
                                <Link to={"/"} className="btn btn-ghost">
                                    <img src={logo} alt="x_logo" className=" w-15 h-15"/>
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center justify-center flex-col">
                            <div>
                                <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full h-full">
                                    <HouseIcon className="w-8 h-8"/>
                                    <span className="text-xl">Home</span>
                                </Link>
                            </div>

                            <div>
                                <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full h-full">
                                    <SearchIcon className="w-8 h-8"/>
                                    <span className="text-xl">Explore</span>
                                </Link>
                            </div>

                            <div>
                                <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full h-full">
                                    <Bell className="w-8 h-8"/>
                                    <span className="text-xl">Notifications</span>
                                </Link>
                            </div>

                            <div>
                                <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full h-full">
                                    <UserPlus className="w-8 h-8"/>
                                    <span className="text-xl">Follow</span>
                                </Link>
                            </div>

                            <div>
                                <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full h-full">
                                    <Mail className="w-8 h-8"/>
                                    <span className="text-xl">Chat</span>
                                </Link>
                            </div>

                            <div>
                                <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full h-full">
                                    <CircleSlash2 className="w-8 h-8"/>
                                    <span className="text-xl">Grok</span>
                                </Link>
                            </div>

                            <div>
                                <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full h-full">
                                    <Users className="w-8 h-8"/>
                                    <span className="text-xl">Communities</span>
                                </Link>
                            </div>

                            <div>
                                <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full h-full">
                                    <User className="w-8 h-8"/>
                                    <span className="text-xl">Profile</span>
                                </Link>
                            </div>

                            <div>
                                <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full h-full">
                                    <CircleEllipsis className="w-8 h-8"/>
                                    <span className="text-xl">More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-[4] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800"></div>
                <div className="flex-[4] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800"></div>
            </div>
        </div>
    );
}

export default HomePage;