import { Link } from "react-router-dom"

export default function PostCard({ post }) {
    return (
        <div className="flex justify-between h-30 px-10 gap-5 py-5 border-t-1 border-black/50 hover:bg-black/10">
            <section className="h-full w-20 shrink-0">
                <h3 className="font-[600] text-[16px]">ID</h3>
                <p>{post.id}</p>
            </section>

            <Link to={`/post/${post.slug}`} className="flex grow-1 gap-2 cursor-pointer">
                <figure className="h-full aspect-5/3 overflow-hidden rounded-2xl shrink-0">
                    <img src={post.banner} alt={`event-${post.id}-banner`} className="h-full w-full object-cover" />
                </figure>
                <article>
                    <h4 className="text-[18px] font-[600]">{post.title}</h4>
                    <p className="text-[13px]">{post.desc}</p>
                </article>
            </Link>

            <section className="h-full flex flex-col">
                <h3 className="font-[600] text-[16px]">Actions</h3>
                <div className="flex flex-col justify-between h-full">
                    <button className="bg-cyan-400 h-6 w-6 rounded-[5px] cursor-pointer text-[13px] hover:text-white duration-100">
                        <i className="fa-solid fa-pen"></i>
                    </button>

                    <button className="bg-red-400 h-6 w-6 rounded-[5px] cursor-pointer text-[13px] hover:text-white duration-100">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </section>
        </div>
    )
}