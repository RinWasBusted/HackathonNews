import Example from '../../../../assets/Example.jpg'
import PostCard from '../PostCard'

export default function EventBoard() {
    const events = [
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
            id: 4,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            progress: 'Prepare',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus.',
            slug: 'slug-example'
        },
        {
            id: 5,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            progress: 'Prepare',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus.',
            slug: 'slug-example'
        },
        {
            id: 6,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            progress: 'Prepare',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus.',
            slug: 'slug-example'
        },
    ]

    return (
        <section className="flex flex-col">
            {events.map((event) => <PostCard key={event.id} post={event}></PostCard>)}
        </section>
    )
}
