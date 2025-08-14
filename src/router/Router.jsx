import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import InnerPost from "../pages/InnerPost";
import Admin from "../pages/Admin";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: (
      <div className="text-[200px] text-red-500">404 Not Found</div>
    ),
  },
  {
    path: "/post/:slug",
    element: <InnerPost></InnerPost>,
  },
  {
    path: '/admin',
    element: <Admin></Admin>
  },
  {
    path: "/admin/login",
    element: <Login></Login>,
  },
]);

export default router
