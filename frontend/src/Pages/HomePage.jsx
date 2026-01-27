import { Link, useLocation } from "react-router-dom"
import LeftPanel from "../Components/LeftPanel"
import RightPanel from "../Components/RightPanel";
import NewPost from "../Components/NewPost";
import Posts from "../Components/Posts";

import { useState, useEffect, useCallback } from "react";

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPosts = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:3000/x/post');
            if (!response.ok) throw new Error('Failed to fetch posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const activeTab = searchParams.get('tab') || 'for-you';

    return (
        <div className="relative h-full w-full">
            <div className="flex">
                {/* Left Side */}
                <LeftPanel />

                <div className="flex-[4] min-h-screen bg-black border border-black border-r-gray-800">
                    <div className=" flex font-bold">
                        <div className="flex-1 border border-black border-b-gray-800 p-4 text-center hover:bg-gray-800 bg-transparent">
                            <Link to={"/home"} >For you</Link>
                        </div>
                        <div className="flex-1 border border-black border-b-gray-800 p-4 text-center hover:bg-gray-800 bg-transparent   ">
                            <Link to={"/home/following"}>Following</Link>
                        </div>
                    </div>

                    <NewPost onPostSuccess={fetchPosts} />

                    <Posts posts={posts} isLoading={isLoading} />
                </div>

                {/*Right side */}
                <RightPanel />
            </div>
        </div>
    );
}

export default HomePage;