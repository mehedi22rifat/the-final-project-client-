import {
    createBrowserRouter,
  } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute";
import ErrorElement from "../components/pages/ErrorElement";
import Home from "../Pages/Home";
import SingUp from "../components/pages/Authemtacation/SingUp";
import SingIn from "../components/pages/Authemtacation/SingIn";





  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainRoute />,
      errorElement:<ErrorElement />,
      children:[
        {
            path:'/',
            element:<Home />
        },
        {
          path:'/singUp',
          element:<SingUp />
        },
        {
          path:'/singIn',
          element:<SingIn />
        }
      ]
    },
  ]);

   export default router;
