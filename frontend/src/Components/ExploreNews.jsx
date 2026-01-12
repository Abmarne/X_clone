
const ExploreNews = ({newsItems = []}) => {
  return (
    <div className='rounded-[6%] w-full bg-black'>
        {/* <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <div className='font-bold text-white'>
                Today's News
            </div>

            <button className='flex items-center justify-center p-2 rounded-full hover:bg-slate-800'>
                <X className='rounded-full w-4 h-4 text-gray-400'/>
            </button>
        </div> */}

    
        {newsItems.map((news, index) => (
            <div key={index} className=' cursor-pointer transition-colors pb-3 last:border-b-0'>
                <a className='text-lg font-bold text-white mb-2 hover:underline'>
                    {news.headline}
                </a>
                <div className='flex text-sm gap-2 text-gray-500'>
                    <div>
                        {news.time}
                    </div>
                    <div>
                        · {news.category}
                    </div>
                    <div>
                        · {news.posts}
                    </div>
                </div>
            </div>
        ))}

        <div className="h-0 border border-gray-800"></div>
        
    </div>
  )
}

export default ExploreNews;