export default function Post({ event }) {
    return (
        <div className="w-full min-h-55 flex lg:flex-row flex-col gap-5 p-5 border-1 rounded-xl border-accent shadow-2xs group cursor-pointer">
            <figure className="h-55 flex-1 overflow-hidden">
                <img src={event.banner} alt="event banner" className="h-full object-cover group-hover:scale-110 duration-100" />
            </figure>

            <article className="h-full flex-1 flex flex-col gap-3">
                <p className="text-accent text-[14px] font-semibold">{event.progress}</p>

                <h3 className="text-[18px] font-semibold hover:underline">{event.title}</h3>

                <p className="text-[16px] opacity-70">{event.desc}</p>

                <div className="flex gap-2 mt-auto">
                    {event.tags.map((tag, index) => <Tag key={index} content={tag}></Tag>)}
                </div>
            </article>
        </div>
    )
}

const Tag = ({ content }) => {
    return (
        <div className="text-primary bg-secondary h-6 text-[14px] font-[500] px-3 flex justify-center items-center rounded-[12px]">
            {content}
        </div>
    )
}