import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: (
      <div className="text-[200px] text-red-500">404 Not Found</div>
    ),
  },
]);

export default router
