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
import Activities from "./components/Activities";
import Profile from "./pages/Profile"



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path:"/signin", element: <SignIn />},
            { path:"/signup", element: <SignUp />},
            { path:"/cities", element: <Cities />},
            { path: "/activities/:itinerary_id", element: <Activities />},
            { path:"/city/:city_id", element: <CityDetails />},
            { path: "/auth/signup", element: <FormSignUp /> },
            { path: "/auth/signin", element: <FormSignIn /> },
            { path: "/profile", element: <Profile /> },
            { path: "/*", element: <NotFound />}
            
            
            
            


        ]


    }
])

export default router