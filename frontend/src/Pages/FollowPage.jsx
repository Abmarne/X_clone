import { MoveLeft, Settings } from "lucide-react";
import LeftPanel from "../Components/LeftPanel"
import RightPanel from "../Components/RightPanel"
import { Link, useLocation } from "react-router-dom"
import { FollowSuggestions } from "../Components/FollowSuggestions";

const FollowPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const activeTab = searchParams.get('tab') || 'who-to-follow';

  return (
    <div className="relative h-full w-full">
        <div className="flex">
            <LeftPanel/>

            <div className="flex-[4] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800">

                <div className="flex justify-between mb-2">

                    <div className="flex gap-4 items-center">
                        <div>
                            <Link to={"/"} className="btn btn-ghost rounded-full p-3">
                                <MoveLeft className="w-5 h-5"/>
                            </Link>
                        </div>

                        <div className="text-xl font-bold">
                            Follow
                        </div>
                    </div>

                    <div>
                        <Link to={"/settings"} className="btn btn-ghost rounded-full p-3">
                            <Settings className="w-5 h-5"/>
                        </Link>
                    </div>
                </div>

                <div className="flex">
                    <Link 
                        to="/follow?tab=who-to-follow" 
                        className={`flex-1 border border-black border-b-gray-800 text-center p-3 hover:bg-gray-800 bg-transparent ${
                            activeTab === 'who-to-follow' ? 'text-white' : 'text-gray-500'
                        }`}
                    >
                        Who to Follow
                    </Link>

                    <Link 
                        to="/follow?tab=creators-for-you" 
                        className={`flex-1 border border-black border-b-gray-800 text-center p-3 hover:bg-gray-800 bg-transparent ${
                            activeTab === 'creators-for-you' ? 'text-white' : 'text-gray-500'
                        }`}
                    >
                        Creators for You
                    </Link>
                </div>

                <div className="text-xl font-bold m-4">
                    Suggested For You
                </div>

                <div>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <FollowSuggestions
                            key={num}
                            user={{
                                name: `user${num}`,
                                profilePicture: "https://via.placeholder.com/32"
                            }}
                            userName={`@user${num}`}
                            userDescription={`This is user${num}'s description`}
                        />
                    ))} 
                </div>
            </div>
            
            <RightPanel/>
        </div>
    </div>
  )
}

export default FollowPage