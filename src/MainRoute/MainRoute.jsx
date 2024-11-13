import { Outlet } from "react-router-dom"


const MainRoute = () => {
  return (
    <div>
        <h1>navbar</h1>
        <Outlet />
        <h1>footer</h1>
    </div>
  )
}

export default MainRoute