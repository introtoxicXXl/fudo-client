import { NavLink, Outlet } from "react-router-dom";
import './Dashboard.css';
import { FaBook, FaCartArrowDown, FaHome, FaUsers } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";

const Dashboard = () => {

    return (
        <div className="flex">
            <div className="md:w-2/12 bg-orange-500 min-h-screen">
                <ul id="dashboard-user" className="menu space-y-3 fixed">
                    <li className="">
                        <NavLink to='/dashboard/home' className='flex items-center'> <FaHome className="mr-2" /> Admin Home</NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/cart' className='flex items-center'><FaCartArrowDown className="mr-2" /> My Cart</NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/addItems' className='flex items-center'><ImSpoonKnife className="mr-2" />Add Items</NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/manageItems' className='flex items-center'><TfiMenuAlt className="mr-2" />Manage Items</NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/bookings' className='flex items-center'><FaBook className="mr-2" />Manage Bookings</NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/allUsers' className='flex items-center'><FaUsers className="mr-2" />All Users</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li className="">
                        <NavLink to='/' className='flex items-center'> <FaHome className="mr-2" />Home</NavLink>
                    </li>
                </ul>
            </div>
            <div className="md:w-10/12">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;