import { Ellipsis } from "lucide-react"
import { Link } from "react-router"

export const FollowSuggestions = () => {
  return (
    <div>
        <Link  className={" flex p-1 w-full h-[80%] justify-start"}>
            
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
    
            <div>
                <button className="bg-white p-4 btn  rounded-full  justify-center text-black font-bold">
                    Post
                </button>   
            </div>
                
        </Link>
    </div>
  )
}
