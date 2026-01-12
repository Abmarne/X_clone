import { Settings } from "lucide-react";
import LeftPanel from "../Components/LeftPanel"
import RightPanel from "../Components/RightPanel"
import { Link, useLocation } from "react-router-dom"

const NotificationPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const activeTab = searchParams.get('tab') || 'all';

  return (
    <div className="relative h-full w-full">
        <div className="flex">
            <LeftPanel/>

            <div className="flex-[4] min-h-screen bg-black border border-black border-r-gray-800 flex flex-col">
                <div className="flex justify-between mb-2 p-4">
                    <div className="text-xl font-bold">
                        Notifications
                    </div>
                    <Link to={"/settings"} className="btn btn-ghost rounded-full p-3">
                        <Settings className="w-5 h-5"/>
                    </Link>
                </div>

                <div className="flex">
                    <Link 
                        to="/notifications?tab=all" 
                        className={`flex-1 border border-black border-b-gray-800 text-center p-3 hover:bg-gray-800 bg-transparent ${
                            activeTab === 'all' ? 'text-white' : 'text-gray-500'
                        }`}
                    >
                        All
                    </Link>

                    <Link 
                        to="/notifications?tab=verified" 
                        className={`flex-1 border border-black border-b-gray-800 text-center p-3 hover:bg-gray-800 bg-transparent ${
                            activeTab === 'verified' ? 'text-white' : 'text-gray-500'
                        }`}
                    >
                        Verified
                    </Link>

                    <Link 
                        to="/notifications?tab=mentions" 
                        className={`flex-1 border border-black border-b-gray-800 text-center p-3 hover:bg-gray-800 bg-transparent ${
                            activeTab === 'mentions' ? 'text-white' : 'text-gray-500'
                        }`}
                    >
                        Mentions
                    </Link>
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <div className="text-3xl text-gray-500">
                        No Notifications
                    </div>
                </div>
            </div>
            
            <RightPanel/>
        </div>
    </div>
  )
}

export default NotificationPage