import { Outlet } from "react-router-dom"
import Navbar from "../components/pages/Home/Navbar"
import Footer from "../components/pages/Home/Footer"


const MainRoute = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
        <Navbar />
      <div className="min-h-screen">
      <Outlet />
      </div>
       <Footer />
    </div>
  )
}

export default MainRoute