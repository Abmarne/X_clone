

const Trending = ({items = []}) => {
  return (
    <>
      {items.map((news,index) => (
        <div className="p-2">
          <div className="text-sm text-gray-700">
            {news.type}
          </div>
          <div className="text-lg">
            {news.tag}
          </div>
          <div className="text-sm text-gray-700">
            {news.post}
          </div>
        </div>
      ))}
    </>
  )
}

export default Trending