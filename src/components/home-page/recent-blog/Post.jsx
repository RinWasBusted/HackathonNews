export default function Post({ event }) {
    return (
        <div className="w-full min-h-30 flex gap-2 md:gap-5 border-accent group cursor-pointer border-b-1 pb-5">
            <figure className="h-30  flex-1/3 overflow-hidden">
                <img src={event.banner} alt="event banner" className="h-full object-cover group-hover:scale-110 duration-100" />
            </figure>

            <article className="h-full flex-2/3 flex flex-col gap-1 md:gap-3">
                <h3 className=" text-[12px] md:text-[15px] font-semibold hover:underline">{event.title}</h3>

                <p className="text-accent text-[10px] md:text-[12px] font-semibold">{event.date}</p>

                <p className=" text-[10px] md:text-[14px] opacity-70">{event.desc}</p>

                <div className="flex gap-2 mt-auto">
                    {event.tags.map((tag, index) => <Tag key={index} content={tag}></Tag>)}
                </div>
            </article>
        </div>
    )
}

const Tag = ({ content }) => {
    return (
        <div className="text-primary bg-secondary h-3 md:h-6 text-[10px] md:text-[14px] font-[500] px-3 flex justify-center items-center rounded-[12px]">
            {content}
        </div>
    )
}