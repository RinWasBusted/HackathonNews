import Example from '../../../assets/Example.jpg'
import MiniPost from "./MiniPost"

export default function SideBoard() {
    const sidePostList = [
        {
            id: 1,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            progress: 'Prepare',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus.'
        },
        {
            id: 2,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            progress: 'Prepare',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus.'
        },
        {
            id: 3,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            progress: 'Prepare',
            tags: ['AI', 'Blockchain', 'UX/UI Design', 'Frontend'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus.'
        },
        {
            id: 4,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            progress: 'Prepare',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus.'
        },
        {
            id: 5,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            progress: 'Prepare',
            tags: ['AI', 'Blockchain', 'UX/UI Design', 'Frontend'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus.'
        },
    ]

    return (
        <aside className="w-full flex flex-col gap-5 p-10">
            <h3 className="text-[20px] font-[600] w-full border-secondary border-b-1 pb-5 mb-5">You might interested in</h3>

            <main className="flex flex-col items-center gap-10 w-full">
                {sidePostList.map((event) => <MiniPost key={event.id} event={event}></MiniPost>)}
            </main>
        </aside>
    )
}