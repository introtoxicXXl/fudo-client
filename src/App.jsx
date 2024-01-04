import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'

function App() {
  const location = useLocation()
  const noNavFooter = location.pathname.includes('/login') || location.pathname.includes('/registration');

  return (
    <>
      {noNavFooter || <Navbar />}
      <Outlet />
      {noNavFooter || <Footer />}
    </>
  )
}

export default App
