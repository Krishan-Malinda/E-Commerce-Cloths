import App from "./App";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import Shop from "./Pages/Shop";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";

export const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Home",
        element: <Home />,
    },
    {
        path: "/AboutUs",
        element: <AboutUs />,
    },
    {
        path: "/Blog",
        element: <Blog />,
    },
    {
        path: "/ContactUs",
        element: <ContactUs />,
    },
    {
        path: "/Shop",
        element: <Shop />,
    },
    /* {
        path: "/Login",
        element: <Login />,
    },
    {
        path: "/Register",
        element: <Register />,
    }, */
];