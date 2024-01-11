import { Link, NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import useAuth from "../Hooks/useAuth";
import useCart from './../Hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(res => { console.log(res) })
            .catch(error => console.log(error))
    }

    return (
        <div className="">
            <nav className="bg-black text-white w-full bg-opacity-70 dark:bg-gray-900 fixed z-10">
                <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-[#EEFF25]">FuDo</span>
                    </Link>
                    {
                        user ?
                            <div className="flex items-end md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <div className="flex items-center">
                                    <div onClick={() => navigate('/dashboard/cart')} tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-5">
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            <span className="badge badge-sm indicator-item">{cart.length}</span>
                                        </div>
                                    </div>
                                    <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                                    </button>
                                    {/* <!-- Dropdown menu --> */}
                                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                        <div className="px-4 py-3">
                                            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user.email}</span>
                                        </div>
                                        <ul className="py-2" aria-labelledby="user-menu-button">
                                            <li>
                                                {
                                                    user.role === "Admin" ? <Link to='/dashboard/adminHome' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link> : <Link to='/dashboard/userHome' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                                                }
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                            </li>
                                            <li>
                                                <Link onClick={handleLogOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="flex items-end md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <Link to='/login'>
                                    <button className="btn hover:bg-[#EEFF25] btn-outline btn-warning">Login</button>
                                </Link>
                            </div>
                    }

                    <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 text-white rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                            <li>
                                <NavLink to='/' className="block py-2 px-1 rounded text-white hover:text-[#EEFF25]">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' className="block py-2 px-1 rounded text-white hover:text-[#EEFF25]">About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/ourMenu' className="block py-2 px-1 rounded text-white hover:text-[#EEFF25]">Our Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to='/ourShop/salad' className="block py-2 px-1 rounded text-white hover:text-[#EEFF25]">Our Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' className="block py-2 px-1 rounded text-white hover:text-[#EEFF25]">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;