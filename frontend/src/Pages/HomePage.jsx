import logo from "../images/x_logo_background-removed.png"
import {Link} from "react-router"
import { Bell, CircleEllipsis, CircleSlash2, HouseIcon, Mail, SearchIcon, User, UserPlus, Users } from "lucide-react"

const HomePage = () => {
    return (
        <div className="relative h-full w-full">
            <div className="flex">
                {/* Left Side */}
                <div className="flex-[2] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800">
                    <div className="flex flex-col items-start px-4 py-5">
                        <div className="mb-5">
                            <Link to={"/"} className="btn btn-ghost">
                                <img src={logo} alt="x_logo" className=" w-15 h-15"/>
                            </Link>
                        </div>

                        <div className="flex flex-col items-start w-full gap-3">
                            <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                <HouseIcon className="w-8 h-8"/>
                                <span className="text-xl">Home</span>
                            </Link>

                            <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                <SearchIcon className="w-8 h-8"/>
                                <span className="text-xl">Explore</span>
                            </Link>

                            <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                <Bell className="w-8 h-8"/>
                                <span className="text-xl">Notifications</span>
                            </Link>

                            <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                <UserPlus className="w-8 h-8"/>
                                <span className="text-xl">Follow</span>
                            </Link>

                            <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                <Mail className="w-8 h-8"/>
                                <span className="text-xl">Chat</span>
                            </Link>

                            <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                <CircleSlash2 className="w-8 h-8"/>
                                <span className="text-xl">Grok</span>
                            </Link>

                            <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                <Users className="w-8 h-8"/>
                                <span className="text-xl">Communities</span>
                            </Link>

                            <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                <User className="w-8 h-8"/>
                                <span className="text-xl">Profile</span>
                            </Link>

                            <Link to={"/"} className="btn btn-ghost rounded-full p-3 w-full justify-start gap-4">
                                <CircleEllipsis className="w-8 h-8"/>
                                <span className="text-xl">More</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex-[4] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800"></div>
                <div className="flex-[3] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800"></div>
            </div>
        </div>
    );
}

export default HomePage;