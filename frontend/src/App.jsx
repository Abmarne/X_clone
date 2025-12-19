import logo from "../src/images/x_logo_background-removed.png"
import {Routes, Route} from "react-router"
import HomePage from "./Pages/HomePage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App