import {
    createBrowserRouter,
  } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute";
import ErrorElement from "../components/pages/ErrorElement";
import Home from "../Pages/Home";





  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainRoute />,
      errorElement:<ErrorElement />,
      children:[
        {
            path:'/',
            element:<Home />
        }
      ]
    },
  ]);

   export default router;
