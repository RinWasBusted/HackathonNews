import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import InnerPost from "../pages/InnerPost";
import Admin from "../pages/Admin";

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
    path: "/admin/login",
    element: <Admin></Admin>,
  },
]);

export default router
