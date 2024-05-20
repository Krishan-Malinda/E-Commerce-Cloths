import App from "./App";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import Shop from "./Pages/Shop";

export const routes = [
    {
        path: "/",
        element: <App />,
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
];