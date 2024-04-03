import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Homepage from "../Pages/Home-page"
import AboutUs from "../Pages/Aboutus"
import Contactus from "../Pages/Contactus"
import SingleMovie from "../Pages/SingleMovie"
import Layout from "./Layout"
import ErrorPage from "../Pages/Eror"
import Movies from "../Pages/Movies"
import Search from "../Pages/Search"


export default function Router(){
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                   index: true,
                    element: <Homepage/>
                },
                {
                    path:"/About-us",
                    element: <AboutUs/>
                },
                {
                    path:"/Contact-us",
                    element: <Contactus/>
                },
                {
                    path:"/m/:id",
                    element: <SingleMovie/>
                },
                {
                    path:"/movies",
                    element: <Movies/>
                },
                {
                    path:"/search",
                    element: <Search/>
                }
        ]
        }
        
    ])
    return <RouterProvider router={router} />
    
}