import Post from "./Post"
import Example from '../../../assets/Example.jpg'
import { useState } from "react"

export default function RecentEvent() {
    const eventList = [
        {
            id: 1,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            progress: 'Prepare',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus.',
            slug: 'slug-example'
        },
        {
            id: 2,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            progress: 'Prepare',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus.',
            slug: 'slug-example'
        },
        {
            id: 3,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            progress: 'Prepare',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus.',
            slug: 'slug-example'
        },
        {
            id: 1,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            progress: 'Prepare',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus.',
            slug: 'slug-example'
        },
        {
            id: 2,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            progress: 'Prepare',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus.',
            slug: 'slug-example'
        },
        {
            id: 3,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            progress: 'Prepare',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus.',
            slug: 'slug-example'
        },
    ]

    const [postNum, setPostNum] = useState(Math.min(eventList.length, 3));

    const handleShowMore = () => {
        const newPostNum = Math.min(postNum + 3, eventList.length);
        setPostNum(newPostNum);
    }

    return (
        <section className="w-full py-10 px-8">
            <h2 className="text-[24px] font-semibold mb-10">Recent event posts</h2>

            <main className="flex flex-col items-center gap-10 w-full">
                {eventList.slice(0, postNum).map((event) => <Post key={event.id} event={event}></Post>)}

                <div className="cursor-pointer hover:underline" onClick={handleShowMore}>Show more</div>
            </main>
        </section>
    )
}