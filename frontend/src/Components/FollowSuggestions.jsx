
import { Link } from "react-router"

export const FollowSuggestions = () => {
  return (
    <div>
        <Link >
            <div className="flex justify-between">

                <div className="flex p-1">
                    <img src="" alt="profile" className="w-8 h-8 rounded-full m-3"/>
                    <div className="flex-1">
                        <div className="text-sm">
                            Name
                        </div>
                        <div className="text-sm text-gray-500">
                            Username
                        </div>
                        <div className="text-sm">
                            Description
                        </div>
                    </div>
                </div>

                <div className="flex items-center pr-3">
                    <button className="bg-white px-6 py-2 btn rounded-full justify-center text-black font-bold">
                        Follow
                    </button>   
                </div>
            </div>
                  
        </Link>
    </div>
  )
}
