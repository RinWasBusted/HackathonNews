import Example from '../../../../assets/Example.jpg'
import PostCard from '../PostCard'
import { useState, useEffect } from 'react'

export default function EventBoard() {
    const [eventList, setEventList] = useState([]);

    useEffect(() => {

        setEventList([
            {
                id: 1,
                banner: "https://appsembler.com/wp-content/uploads/2024/04/10-Tips-for-Hackathon-Success-in-2024.png",
                content: `<h1>this is h1 content</h1><p style="text-align: right;">right align testing</p><p></p>`,
                date: '',
                desc: 'this is the post description',
                progress: 'ongoing',
                tags: ['AI', "Fullstack"],
                title: '10 tips for hackathon success in 2024',
                type: 'event'
            },
            {
                id: 2,
                banner: "https://appsembler.com/wp-content/uploads/2024/04/10-Tips-for-Hackathon-Success-in-2024.png",
                content: `<h1>this is h1 content</h1><p style="text-align: right;">right align testing</p><p></p>`,
                date: '',
                desc: 'this is the post description',
                progress: 'ongoing',
                tags: [],
                title: '10 tips for hackathon success in 2024',
                type: 'event'
            },
            {
                id: 3,
                banner: "https://appsembler.com/wp-content/uploads/2024/04/10-Tips-for-Hackathon-Success-in-2024.png",
                content: `<h1>this is h1 content</h1><p style="text-align: right;">right align testing</p><p></p>`,
                date: '',
                desc: 'this is the post description',
                progress: 'ongoing',
                tags: [],
                title: '10 tips for hackathon success in 2024',
                type: 'event'
            },
            {
                id: 4,
                banner: "https://appsembler.com/wp-content/uploads/2024/04/10-Tips-for-Hackathon-Success-in-2024.png",
                content: `<h1>this is h1 content</h1><p style="text-align: right;">right align testing</p><p></p>`,
                date: '',
                desc: 'this is the post description',
                progress: 'ongoing',
                tags: [],
                title: '10 tips for hackathon success in 2024',
                type: 'event'
            },
        ])

    }, [])


    return (
        <section className="flex flex-col w-full">
            {eventList.map((event) => <PostCard key={event.id} postType={'events'} post={event}></PostCard>)}
        </section>
    )
}
