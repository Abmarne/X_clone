
import { Link } from "react-router"

export const FollowSuggestions = ({user,userName,userDescription}) => {
  return (
    <div>
        <Link >
            <div className="flex justify-between">

                <div className="flex p-1">
                    <img src={user.profilePicture} alt="profile" className="w-8 h-8 rounded-full m-3"/>
                    <div className="flex-1">
                        <div className="text-sm">
                            {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                            {userName}
                        </div>
                        <div className="text-sm">
                            {userDescription}
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
