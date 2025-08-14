export default function Post({ post }) {
    return (
        <>
            <figure className='w-full max-w-[1280px] aspect-5/2 relative flex justify-center overflow-hidden'>
                <img src={post.banner} alt="Hackathon News Banner" className='w-full h-full object-cover' />
            </figure>

            <article className="flex flex-col gap-1">
                <h2 className="font-bold text-3xl lg:text-4xl ">
                    {post.title}
                </h2>

                <p className="text-[13px]">
                    {post.type === 'event' ? post.progress : post.date}
                </p>

                <p className="mt-5">
                    {post.content}
                </p>
            </article>
        </>
    )
}