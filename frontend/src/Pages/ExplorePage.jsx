import LeftPanel from "../Components/LeftPanel"
import RightPanel from "../Components/RightPanel"
import { Link, useLocation } from "react-router-dom"

const ExplorePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeTab = searchParams.get('tab') || 'for-you';
  
  return (
    <div className="relative h-full w-full">
        <div className="flex">
            <LeftPanel/>

            <div className="flex-[4] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800">
                <div className="sticky top-0 z-10 bg-black bg-opacity-80 backdrop-blur-sm">

                    <div className="flex flex-col items-start px-10">
                        <div className="w-full mt-2">
                            <input id="search" type="text" placeholder="Search"
                            className="w-full h-12 rounded-full bg-black border border-gray-800 
                            focus:border-[#1D9BF0] focus:outline-none text-white placeholder:text-gray-500 px-4">
                            </input>
                        </div>
                    </div>

                    <div className="flex">
                        <Link 
                            to="/explore?tab=for-you" 
                            className={`flex-1 border border-black border-b-gray-800 text-center p-3 hover:bg-gray-800 bg-transparent ${
                                activeTab === 'for-you' ? 'text-white' : 'text-gray-500'
                            }`}
                        >
                            For You
                        </Link>

                        <Link 
                            to="/explore?tab=trending" 
                            className={`flex-1 border border-black border-b-gray-800 text-center p-3 hover:bg-gray-800 bg-transparent ${
                                activeTab === 'trending' ? 'text-white' : 'text-gray-500'
                            }`}
                        >
                            Trending
                        </Link>

                        <Link 
                            to="/explore?tab=news" 
                            className={`flex-1 border border-black border-b-gray-800 text-center p-3 hover:bg-gray-800 bg-transparent ${
                                activeTab === 'news' ? 'text-white' : 'text-gray-500'
                            }`}
                        >
                            News
                        </Link>

                        <Link 
                            to="/explore?tab=sports" 
                            className={`flex-1 border border-black border-b-gray-800 text-center p-3 hover:bg-gray-800 bg-transparent ${
                                activeTab === 'sports' ? 'text-white' : 'text-gray-500'
                            }`}
                        >
                            Sports
                        </Link>

                        <Link 
                            to="/explore?tab=entertainment" 
                            className={`flex-1 border border-black border-b-gray-800 text-center p-3 hover:bg-gray-800 bg-transparent ${
                                activeTab === 'entertainment' ? 'text-white' : 'text-gray-500'
                            }`}
                        >
                            Entertainment
                        </Link>
                    </div>
                </div>
            </div>
            
            <RightPanel/>
        </div>
    </div>
  )
}

export default ExplorePage