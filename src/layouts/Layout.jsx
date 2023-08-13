import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
export default function Layout({}) {    
    return (
        <div className='mx-auto px-4 md:px-10 min-h-screen w-full sm:bg-white
        md:bg-[url(./img/welcome.jpg)] bg-cover
        lg:bg-[url(./img/welcome.jpg)] bg-cover  )'> 
  
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
  }
  