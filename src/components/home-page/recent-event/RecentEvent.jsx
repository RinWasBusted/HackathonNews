import Post from "./Post"
import Example from '../../../assets/Example.jpg'
import { useState, useEffect } from "react"
// import getPostsData from "../../../services/getPostsData";

export default function RecentEvent() {
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        setPostNum(Math.min(eventList.length, 3))

    }, [eventList])

    useEffect(() => {
        setEventList([
            {
                id: 1,
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
                id: 1,
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

    const [postNum, setPostNum] = useState(0);

    const handleShowMore = () => {
        const newPostNum = Math.min(postNum + 3, eventList.length);
        setPostNum(newPostNum);
    }

    return (
        <section className="w-full py-10 px-8">
            <h2 className="text-[24px] font-semibold mb-10">Recent event posts</h2>

            <main className="flex flex-col items-center gap-10 w-full">
                {eventList.slice(0, postNum).map((event) => <Post key={event.id} event={event}></Post>)}

                <div className={`cursor-pointer hover:underline ${eventList.length == postNum && 'hidden'}`}  onClick={handleShowMore}>Show more</div>
            </main>
        </section>
    )
}