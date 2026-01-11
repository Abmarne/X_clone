import React from 'react'
import {X} from "lucide-react"

const TodayNews = ({newsItems = []}) => {
  return (
    <div className='border border-gray-600 rounded-[6%] w-full bg-black'>
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <div className='font-bold text-white'>
                Today's News
            </div>

            <button className='flex items-center justify-center p-2 rounded-full hover:bg-slate-800'>
                <X className='rounded-full w-4 h-4 text-gray-400'/>
            </button>
        </div>

        <div>
            {newsItems.map((news, index) => (
                <div key={index} className='p-4 cursor-pointer transition-colors border-b border-gray-800 last:border-b-0'>
                    <a className='text-xl font-bold text-white mb-2 hover:underline'>
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
        </div>
    </div>
  )
}

export default TodayNews;