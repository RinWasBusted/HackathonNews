import { useState } from "react";

import Logo from "../../../assets/HackathonNewsLogo.png";
import Menu from "./Menu.jsx";
import { Link } from "react-router-dom";

function SideBar() {
  const [expand, setExpand] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const menuItems = [
    {
      content: "Write new post",
      icon: "fa-solid fa-feather",
      path: '/admin/write-new-post'
    },
    {
      content: "Posts",
      icon: "fa-regular fa-calendar",
      path: '/admin/post/event'
    },
    // {
    //   content: "Blogs",
    //   icon: "fa-solid fa-user",
    //   path: '/admin/blogs'
    // },
    {
      content: "Setting",
      icon: "fa-solid fa-gear",
      path: '/admin/setting'
    },
  ];

  // ~~~~~~~~~~~~~~~~~RESET EXPAND~~~~~~~~~~~~~~~~~~~~~~
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1024) {
      setExpand(true);
    } else {
      setShowSideBar(false);
    }
  });

  return (
    <>
      <div id="container" className="relative w-0 lg:w-13 z-10 ">
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~SHOW SIDEBAR BUTTON~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <div
          className="absolute top-4 left-4 lg:hidden cursor-pointer"
          onClick={() => setShowSideBar((s) => !s)}
        >
          <i
            className={`fa-solid text-[30px] absolute !inline-block duration-200 z-4 ${showSideBar ? "fa-xmark" : "fa-bars"
              }`}
          ></i>
        </div>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NAV BAR~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

        <nav
          className={` fixed top-0 left-0 flex w-50 bg-white h-[100vh] flex-col pt-30 pb-10 items-center lg:translate-0 border-r-2 justify-between  translate-x-[-100%] origin-left duration-200   ${showSideBar ? " !translate-0" : ""
            } ${expand ? "overflow-hidden" : "!w-13"}`}
        >
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~EXPAND BUTTON~~~~~~~~~~~~~~~~~~~~ */}
          <div
            className="absolute top-2 text-[30px] w-full flex justify-end pr-3 lg:visible invisible "
            onClick={() => setExpand((e) => !e)}
          >
            <i
              className={` ${!expand
                ? "fa-solid fa-angles-right cursor-pointer hover:text-[#5051F9]"
                : "fa-solid fa-angles-left cursor-pointer duration-100 hover:text-[#5051F9]"
                }`}
            ></i>
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~LOGO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          <Link to={'/'}
            className={`w-[30%] absolute top-15 cursor-pointer hover:scale-[110%] duration-200 ${expand ? "" : "w-[70%]"
              }`}
          >
            <img src={Logo} alt="LOGO" />
          </Link>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Menu~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          <Menu expand={expand} menuItems={menuItems}></Menu>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
