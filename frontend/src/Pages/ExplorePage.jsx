import LeftPanel from "../Components/LeftPanel"
import RightPanel from "../Components/RightPanel"

const ExplorePage = () => {
  return (
    <div className="relative h-full w-full">
        <div className="flex">
            <LeftPanel/>

            <div className="flex-[4] min-h-screen bg-[rgba(0,0,0,0.0)] border border-black border-r-gray-800">
                <div className="flex flex-col items-start px-10 py-5">
                    <div className="w-full mt-2">
                        <input id="search" type="text" placeholder="Search"
                        className="w-full h-12 rounded-full bg-black border border-gray-800 
                        focus:border-[#1D9BF0] focus:outline-none text-white placeholder:text-gray-500 px-4">
                        </input>
                    </div>
                </div>
            </div>
            <RightPanel/>
        </div>
    </div>
  )
}

export default ExplorePage