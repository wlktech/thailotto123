import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Pages/layouts/Layout";
import About from "../Pages/About";
import Search from "../Pages/Search";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";
import Profile from "../Pages/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children : [
        {
            path : "",
            element : <Home />
        },
        {
            path : "/about",
            element : <About />
        },
        {
            path : "/search",
            element : <Search />
        },
        {
            path : "/login",
            element : <Login />
        },
        {
            path : "/register",
            element : <Register />
        },
        {
            path : "/profile",
            element : <Profile />
        },
        {
            path : "*",
            element : <NotFound />
        }
      ]
    },
]);


export default router;