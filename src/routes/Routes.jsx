import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layout/Layouts";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Errorpage from "../pages/Errorpage";
import Cards from "../components/Cards";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "category/:category",
            element: <Cards></Cards>,
            loader: () => fetch("../items.json"),
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/details",
        element: <Details></Details>,
      },
    ],
  },
]);

export default routes;
