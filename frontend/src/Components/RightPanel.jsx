import TodayNews from "./TodayNews";

const RightPanel = () =>{
    return(
        <div className="flex-[3] h-screen bg-black border border-black border-r-gray-800 sticky top-0 self-start overflow-y-auto scrollbar-hide">
            <div className="flex flex-col items-start px-10 py-5">
                <div className="w-full mt-2">
                    <input id="search" type="text" placeholder="Search"
                    className="w-full h-12 rounded-full bg-black border border-gray-800 
                    focus:border-[#1D9BF0] focus:outline-none text-white placeholder:text-gray-500 px-4">
                    </input>
                </div>
            </div>

            <div className="px-10 py-5">
                <TodayNews 
                    newsItems={[1,2,3].map((num) => ({
                        headline: `headline ${num}`,
                        time: `2 days ago`,
                        category: `News`,
                        posts: `${Math.floor(Math.random() * (1000 - 80)) + 80} posts`
                    }))}
                />
            </div>

        </div>
    );
}

export default RightPanel;