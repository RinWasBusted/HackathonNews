import { Link } from "react-router-dom";

export default function Menu(props) {
  console.log(props);

  return (
    <>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MENU~~~~~~~~~~~~~~~~~~~~~~~ */}
      <ul className="w-full h-auto flex flex-col items-center gap-y-5 text-black font-[550]">
        {props.menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            content={item.content}
            expand={props.expand}
            path={item.path}
          ></MenuItem>
        ))}
      </ul>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LOG OUT BUTTON~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <MenuItem
        icon="fa-solid fa-arrow-right-from-bracket"
        content="Log out"
        expand={props.expand}
      ></MenuItem>
    </>
  );
}

function MenuItem(props) {
  return (
    <Link
      to={props.path}
      className={`h-11 cursor-pointer w-full pl-1 flex justify-between items-center duration-100 group hover:text-white ${props.expand ? "hover:bg-[#5051F9] " : ""
        }`}
    >
      <i
        className={`${props.icon
          } px-3 text-[1.2rem] w-11 h-full text-center py-[12px] shrink-0 ${props.expand ? "" : "rounded-2xl group-hover:bg-[#5051F9]"
          }`}
      ></i>
      <p
        className={`grow-1 text-nowrap ${props.expand
          ? "pl-2"
          : " invisible absolute left-11 group-hover:translate-x-3 bg-[#5051F9] py-1 px-3 rounded-[5px] opacity-20 translate-x-[-5px] duration-100 transition-transform group-hover:opacity-100  group-hover:visible "
          }`}
      >
        {props.content}
      </p>
    </Link>
  );
}
