import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>this path is /</div>,
    errorElement: (
      <div className="text-[200px] text-red-500">404 Not Found</div>
    ),
  },
]);

export default router
