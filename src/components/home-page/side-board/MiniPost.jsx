import { Link } from "react-router-dom"

export default function MiniPost({ event }) {
    return (
        <Link to={`/post/${event.slug}`} className="w-full sm:h-20 flex sm:flex-row flex-col gap-3 group cursor-pointer overflow-hidden">
            <figure className="h-30 flex-1/3 overflow-hidden flex justify-end">
                <img src={event.banner} alt="event banner" className="h-full w-full object-cover group-hover:scale-110 duration-100" />
            </figure>

            <article className="h-full flex-2/3 flex flex-col gap-1">
                {/* <p className="text-accent text-[14px] font-semibold">{event.progress}</p> */}

                <h3 className="text-[15px] font-semibold hover:underline">{event.title}</h3>

                {/* <p className="text-[10px] opacity-70 overflow-hidden">{event.desc}</p> */}

                <div className="flex gap-2 mt-auto flex-wrap ">
                    {event.tags.map((tag, index) => <Tag key={index} content={tag}></Tag>)}
                </div>
            </article>
        </Link>
    )
}

const Tag = ({ content }) => {
    return (
        <div className="text-primary bg-secondary h-3 text-[10px] font-[500] px-3 flex justify-center items-center rounded-[12px] text-nowrap">
            {content}
        </div>
    )
}