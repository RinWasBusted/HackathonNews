import Example from '../../../../assets/Example.jpg'
import PostCard from '../PostCard'
import { useState, useEffect } from 'react'
import getPostsData from '../../../../services/getPostsData';

export default function EventBoard() {
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


    return (
        <section className="flex flex-col w-full">
            {eventList.map((event) => <PostCard key={event.id} postType={'events'} post={event}></PostCard>)}
        </section>
    )
}
