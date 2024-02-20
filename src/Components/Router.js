import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Homepage from "../Pages/Home-page"

export default function Router(){
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage/>
        }
    ])
    return(
     <RouterProvider router={router} />
    )
}