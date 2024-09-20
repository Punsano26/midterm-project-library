import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../page/Home";
import Addbook from "../page/Addbook";
import Login from "../page/Login";
import Register from "../page/Register";
import Editbook from "../page/Editbook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "add",
        element: <Addbook />,
      },
      {
        path: "edit/:bookID",
        element: <Editbook />,
      },
    ],
  },
]);

export default router;