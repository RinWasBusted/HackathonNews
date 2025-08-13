import Post from "./Post"
import Example from '../../../assets/Example.jpg'
import { useState } from "react"

export default function RecentBlog() {
    const blogList = [
        {
            id: 1,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            date: '27-08-2006',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus.'
        },
        {
            id: 2,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            date: '27-08-2006',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus.'
        },
        {
            id: 3,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            date: '27-08-2006',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus.'
        },
        {
            id: 1,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            date: '27-08-2006',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus.'
        },
        {
            id: 2,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            date: '27-08-2006',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus.'
        },
        {
            id: 3,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            date: '27-08-2006',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus.'
        },
    ]

    const [postNum, setPostNum] = useState(Math.min(blogList.length, 3));

    const handleShowMore = () => {
        const newPostNum = Math.min(postNum + 3, blogList.length);
        setPostNum(newPostNum);
    }

    return (
        <section className="w-full py-10 px-8">
            <h2 className="text-[24px] font-semibold mb-10">Recent Hackathon blog</h2>

            <main className="flex flex-col items-center gap-5 md:gap-10 w-full">
                {blogList.slice(0, postNum).map((event) => <Post key={event.id} event={event}></Post>)}

                <div className="cursor-pointer hover:underline" onClick={handleShowMore}>Show more</div>
            </main>
        </section>
    )
}