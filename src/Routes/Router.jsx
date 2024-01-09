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
import Dashboard from "../Pages/Dashbord/Dashboard/Dashboard";
import Cart from "../Pages/Dashbord/Cart/Cart";
import AdminHome from './../Pages/Dashbord/AdminHome/AdminHome';
import AddItems from './../Pages/Dashbord/AddItems/AddItems';
import ManageItems from './../Pages/Dashbord/ManageItems/ManageItems';
import Bookings from './../Pages/Dashbord/Bookings/Bookings';
import AllUsers from './../Pages/Dashbord/AllUsers/AllUsers';
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/ourMenu',
        element: <OurMenu />
      },
      {
        path: '/ourShop/:category',
        element: <OurShop />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/registration',
        element: <Registration />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: '/dashboard/cart',
        element: <Cart />
      },
      {
        path: '/dashboard/home',
        element: <AdminHome />
      },
      {
        path: '/dashboard/addItems',
        element: <AddItems />
      },
      {
        path: '/dashboard/manageItems',
        element: <ManageItems />
      },
      {
        path: '/dashboard/bookings',
        element: <Bookings />
      },
      {
        path: '/dashboard/allUsers',
        element: <AllUsers />
      },
    ]
  }
]);