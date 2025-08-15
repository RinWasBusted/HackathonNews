import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import InnerPost from "../pages/InnerPost";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import EventBoard from "../components/admin-page/post-board/event-board/EventBoard";
import BlogBoard from "../components/admin-page/post-board/blog-board/BlogBoard";
import PostBoard from "../components/admin-page/post-board/PostBoard";
import WriteNewPostBoard from "../components/admin-page/write-new-post-board/WriteNewPostBoard";

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
    element: <Admin></Admin>,
    children: [
      {
        index: true,
        element: <div className="w-full h-full flex justify-center items-center text-4xl opacity-50">Choose something on menu...</div>
      },
      {
        path: 'post',
        element: <PostBoard></PostBoard>,
        children: [
          {
            path: 'event',
            element: <EventBoard></EventBoard>
          },
          {
            path: 'blog',
            element: <BlogBoard></BlogBoard>
          },
        ]
      },
      {
        path: 'write-new-post',
        element: <WriteNewPostBoard></WriteNewPostBoard>
      }
    ]
  },
  {
    path: "/admin/login",
    element: <Login></Login>,
  },
]);

export default router
