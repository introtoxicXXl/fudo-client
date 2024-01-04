import {
  createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from './../Pages/About';
import OurMenu from "../Pages/OurMenu";
import OurShop from "../Pages/OurShop";
import Login from "../Pages/Login";
import Contact from "../Pages/Contact";
import Registration from "../Pages/Registration";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/ourMenu',
        element:<OurMenu/>
      },
      {
        path:'/ourShop/:category',
        element:<OurShop/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/registration',
        element:<Registration/>
      }
    ]
  },
]);