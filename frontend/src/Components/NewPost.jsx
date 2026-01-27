import { useState } from 'react'
import toast from 'react-hot-toast'

const NewPost = ({ onPostSuccess }) => {
  const [post, setPost] = useState({ content: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!post.content || post.content.trim() === '') {
      toast.error('Post cannot be empty!')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:3000/x/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: post.content
        })
      })

      const data = await response.json()

      if (data.success) {
        toast.success('Post created successfully!')
        setPost({ content: '' })
        if (onPostSuccess) onPostSuccess()
        // Reset textarea height
        const textarea = document.querySelector('textarea')
        if (textarea) {
          textarea.style.height = 'auto'
        }
      } else {
        toast.error(data.message || 'Failed to create post')
      }
    } catch (error) {
      console.error('Error creating post:', error)
      toast.error('Failed to create post. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="card bg-base-100">
      <div className="card-body bg-black border border-black border-b-gray-800">
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4 flex gap-5">
            <img src="" alt="profile" className="w-8 h-8 rounded-full" />
            <textarea
              placeholder="What's happening?"
              className="w-full bg-black text-xl outline-none border-none focus:outline-none focus:ring-0 focus:border-none resize-none overflow-hidden"
              value={post.content}
              onChange={(e) => {
                setPost({ ...post, content: e.target.value })
                // Auto-resize textarea
                e.target.style.height = 'auto'
                e.target.style.height = e.target.scrollHeight + 'px'
              }}
              rows="1"
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="bg-white p-3 btn rounded-full btn-ghost h-[90%] justify-center text-black font-bold"
            disabled={isLoading || !post.content.trim()}
          >
            {isLoading ? 'Posting...' : 'Post'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewPost