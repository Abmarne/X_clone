import logo from "../src/images/x_logo_background-removed.png"
import {Routes, Route} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ExplorePage from "./Pages/ExplorePage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<ExplorePage />} />
    </Routes>
  )
}

export default App