import { data } from 'react-router-dom';
import Example from '../../../../assets/Example.jpg'
import PostCard from '../PostCard'
import { useState, useEffect } from 'react'
import getPostData from '../../../../services/getPostData';

export default function EventBoard() {
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        try {
            const getData = async () => {
                const data = await getPostData('events');
                setEventList(data);
            };

            getData();
        } catch (e) {
            console.error('Failed to get post data from getPostData function' + e);
        }

    }, [])


    return (
        <section className="flex flex-col w-full">
            {eventList.map((event) => <PostCard key={event.id} post={event}></PostCard>)}
        </section>
    )
}
