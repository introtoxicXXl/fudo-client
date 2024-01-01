import {
  createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from './../Pages/About';
import OurMenu from "../Pages/OurMenu";
import OurShop from "../Pages/OurShop";


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
      }
    ]
  },
]);