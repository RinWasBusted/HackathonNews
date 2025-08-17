import Post from "./Post"
import Example from '../../../assets/Example.jpg'
import { useState, useEffect } from "react"
import getPostsData from "../../../services/getPostsData";

export default function RecentEvent() {
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        try {
            const getData = async () => {
                const data = await getPostsData('events');
                setEventList(data);
            };

            getData();
        } catch (e) {
            console.error('Failed to get post data from getPostData function' + e);
        }
    }, [])

    useEffect(() => {
        setPostNum(Math.min(eventList.length, 3))

    }, [eventList])

    const [postNum, setPostNum] = useState(0);
    console.log(postNum)

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