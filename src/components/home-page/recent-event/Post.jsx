import { Link } from "react-router-dom"

export default function Post({ event }) {
    console.log('Called post')
    return (
        <Link to={`/post/events/${event.slug}/${event.id}`} className="w-full min-h-30 md:min-h-55 flex flex-col sm:flex-row gap-5 md:p-5 md:border-1 rounded-xl border-accent shadow-xl p-5 group cursor-pointer">
            <figure className="h-30 md:h-55 flex-1/3 overflow-hidden">
                <img src={event.banner} alt="event banner" className="h-full object-cover group-hover:scale-110 duration-100" />
            </figure>

            <article className="h-full flex-2/3 flex flex-col gap-1 md:gap-3">
                <p className="text-accent text-[10px] md:text-[14px] font-semibold">{event.progress}</p>

                <h3 className=" text-[15px] md:text-[18px] font-semibold hover:underline">{event.title}</h3>

                <p className=" text-[10px] md:text-[16px] opacity-70">{event.desc}</p>

                <div className="flex gap-2 mt-auto">
                    {event.tags.map((tag, index) => <Tag key={index} content={tag.value}></Tag>)}
                </div>
            </article>
        </Link>
    )
}

const Tag = ({ content }) => {
    return (
        <div className="text-primary bg-secondary h-3 md:h-6 text-[10px] md:text-[14px] font-[500] px-3 flex justify-center items-center rounded-[12px]">
            {content}
        </div>
    )
}