import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Layout from './layouts/Layout'
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cities from "./pages/Cities";
import CityDetails from "./pages/CityDetails";
import NotFound from "./pages/NotFound"
import FormSignUp from "./pages/FormSignUp";
import FormSignIn from "./pages/FormSignIn";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path:"/signin", element: <SignIn />},
            { path:"/signup", element: <SignUp />},
            { path:"/cities", element: <Cities />},
            { path:"/city/:city_id", element: <CityDetails />},
            { path: "/auth/signup", element: <FormSignUp /> },
            { path: "/auth/signin", element: <FormSignIn /> },
            { path: "/*", element: <NotFound />}
            
            
            
            


        ]


    }
])

export default router