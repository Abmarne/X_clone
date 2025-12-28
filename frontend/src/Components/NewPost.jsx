import { useState } from 'react'

const NewPost = () => {
  const [post, setPost] = useState({ content: '' })

  return (
    <div className="card bg-base-100">
        <div className="card-body bg-black border border-black border-b-gray-800">
            <div className="form-control mb-4 flex gap-5">
                <img src="" alt="profile" className="w-8 h-8 rounded-full"/>
                <input
                    type="text"
                    placeholder="What's happening?"
                    className="w-full bg-black text-xl outline-none border-none focus:outline-none focus:ring-0 focus:border-none"
                    value={post.content}
                    onChange={(e) => setPost({ ...post, content: e.target.value })}
                />
            </div>

            <button className="bg-white p-3 btn rounded-full btn-ghost h-[90%] justify-center text-black font-bold">Post</button>
        </div>
    </div>
  )
}

export default NewPost