import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function PostBoard() {
    const typeList = [
        {
            content: 'Event',
            path: '/admin/post/event',
        },
        {
            content: 'Blog',
            path: '/admin/post/blog',
        },
    ]

    const { pathname } = useLocation()

    return (
        <div className="flex flex-col ">
            <h2 className="text-3xl font-[600] w-full border-b-2 p-5">My posts / {typeList.map((type) => pathname.includes(type.path) ? <Link to={type.path}>{type.content}</Link> : '')}</h2>

            <ul className="flex gap-5 border-primary border-t-1 p-10">
                {typeList.map((type, index) => <Link key={index} to={type.path} className={`text-[16px] px-3 py-1 font-[500] hover:border-b-3 hover:border-l-3 rounded-[3px] ${pathname.includes(type.path) ? 'border-b-3 border-l-3 border-black' : 'border-black/20 '}`}>{type.content}</Link>)}
            </ul>
            <Outlet></Outlet>
        </div >
    )
};
