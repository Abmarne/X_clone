import logo from "../src/images/x_logo_background-removed.png"
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ExplorePage from "./Pages/ExplorePage"
import FollowPage from "./Pages/FollowPage"
import NotificationPage from "./Pages/NotificationPage"
import Chat from "./Pages/Chat"

import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/follow" element={<FollowPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  )
}

export default App