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
import UserHome from "../Pages/Dashbord/UserHome/UserHome";
import Reservation from "../Pages/Dashbord/Reservation/Reservation";
import PaymentHistory from "../Pages/Dashbord/PaymentHistory/PaymentHistory";
import ManageBooking from "../Pages/Dashbord/ManageBooking/ManageBooking";
import AdminRoute from "./AdminRoute";
import AddReview from './../Pages/Dashbord/AddReview/AddReview';
import UpdateItems from "../Pages/Dashbord/UpdateItems/UpdateItems";


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
      // user route 
      {
        path: '/dashboard/userHome',
        element: <UserHome />
      },
      {
        path: '/dashboard/cart',
        element: <Cart />
      },
      {
        path: '/dashboard/paymentHistory',
        element: <PaymentHistory />
      },
      {
        path: '/dashboard/userBookings',
        element: <Bookings />
      },
      {
        path: '/dashboard/addReview',
        element: <AddReview/>
      },
      {
        path: '/dashboard/reservation',
        element: <Reservation />
      },

      // admin routes 
      {
        path: '/dashboard/adminHome',
        element: <AdminRoute><AdminHome /></AdminRoute>
      },
      {
        path: '/dashboard/addItems',
        element: <AdminRoute><AddItems /></AdminRoute>
      },
      {
        path: '/dashboard/manageItems',
        element: <AdminRoute><ManageItems /></AdminRoute>
      },
      {
        path: '/dashboard/manageBookings',
        element: <AdminRoute><ManageBooking /></AdminRoute>
      },
      {
        path: '/dashboard/allUsers',
        element: <AdminRoute><AllUsers /></AdminRoute>
      },
      {
        path: '/dashboard/manageItems/updateItems/:id',
        element: <AdminRoute><UpdateItems /></AdminRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
      }
    ]
  }
]);