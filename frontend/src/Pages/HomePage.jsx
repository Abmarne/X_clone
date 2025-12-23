import {Link} from "react-router"
import LeftPanel from "../Components/LeftPanel"

const HomePage = () => {
    

    return (
        <div className="relative h-full w-full">
            <div className="flex">
                {/* Left Side */}
                <LeftPanel/>

                <div className="flex-[4] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800">
                    <div className=" flex mt-3 font-bold">
                        <div className="flex-1 border border-black border-b-gray-800 p-4 text-center hover:bg-gray-800 bg-transparent">
                            <Link to={"/home"}>For you</Link>
                        </div>
                        <div className="flex-1 border border-black border-b-gray-800 p-4 text-center hover:bg-gray-800 bg-transparent   ">
                            <Link to={"/home/following"}>Following</Link>
                        </div>
                    </div>
                </div>
                
                {/*Right side */}
                <div className="flex-[3] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800 sticky top-0">
                    <div className="flex flex-col items-start px-4 py-5">
                        <div className="w-full mt-2">
                            <input id="search" type="text" placeholder="Search"
                            className="w-full h-12 rounded-full bg-black border border-gray-800 
                            focus:border-[#1D9BF0] focus:outline-none text-white placeholder:text-gray-500 px-4">
                            </input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;