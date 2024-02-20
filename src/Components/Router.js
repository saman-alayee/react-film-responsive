import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Homepage from "../Pages/Home-page"
import AboutUs from "../Pages/Aboutus"

export default function Router(){
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage/>
        },
        {
            path:"/About-us",
            element: <AboutUs/>
        }

    ])
    return(
     <RouterProvider router={router} />
    )
}