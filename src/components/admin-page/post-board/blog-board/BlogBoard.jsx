import Example from '../../../../assets/Example.jpg'
import PostCard from '../PostCard'

export default function BlogBoard() {
    const blogList = [
        {
            id: 1,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            date: '27-08-2006',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus.',
            slug: 'slug-xample'
        },
        {
            id: 2,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM ',
            date: '27-08-2006',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus.',
            slug: 'slug-xample'
        },
        {
            id: 3,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            date: '27-08-2006',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus.',
            slug: 'slug-xample'
        },
        {
            id: 1,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            date: '27-08-2006',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus.',
            slug: 'slug-xample'
        },
        {
            id: 2,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            date: '27-08-2006',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus. Esse expedita neque perspiciatis eum animi necessitatibus.',
            slug: 'slug-xample'
        },
        {
            id: 3,
            banner: Example,
            title: 'Cuoc thi hackathon DHQG HCM',
            date: '27-08-2006',
            tags: ['AI', 'Blockchain'],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus.',
            slug: 'slug-xample'
        },
    ]

    return (
        <section className="flex flex-col">
            {blogList.map((blog) => <PostCard key={blog.id} post={blog}></PostCard>)}
        </section>
    )
}