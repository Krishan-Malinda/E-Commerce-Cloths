import App from "./App";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";

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
];