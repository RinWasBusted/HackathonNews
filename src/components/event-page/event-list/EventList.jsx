import Post from '../../home-page/recent-event/Post';
import Example from '../../../assets/Example.jpg'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

export default function RecentEvent() {
    const [searchParams] = useSearchParams();
    const [eventList, setEventList] = useState([]);
    const [searchInput, setSearchInput] = useState(searchParams.get('search') || '');
    const [showSortBar, setShowSortBar] = useState(false);
    const [order, setOrder] = useState(searchParams.get('orderBy') || 'latest')
    const sortOptions = [
        {
            content: 'Latest',
            sort: 'latest'
        },
        {
            content: 'Oldest',
            sort: 'oldest'
        },
        {
            content: 'A-Z',
            sort: 'a-z'
        },
        {
            content: 'Z-A',
            sort: 'z-a'
        },
    ]

    useEffect(() => {
        setPostNum(Math.min(eventList.length, 6))

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

        setSearchInput(searchParams.get('search') || '')
    }, [])


    const [postNum, setPostNum] = useState(0);

    const handleShowMore = () => {
        const newPostNum = Math.min(postNum + 3, eventList.length);
        setPostNum(newPostNum);
    }

    return (
        <section className="w-full py-10 px-8">
            <div className='flex justify-between sm:flex-row flex-col mb-10 gap-5'>
                <h2 className="text-[24px] font-semibold ">Hackathon event posts</h2>

                <div className='flex flex-col gap-2 items-end '>
                    <div className='border-1 h-9 rounded-[5px] flex items-center justify-between overflow-hidden'>
                        <input type="text" value={searchInput} placeholder='Search for event' onChange={(e) => setSearchInput(e.target.value)} className='h-full outline-none px-3 '/>

                        <Link to={`/event?search=${encodeURIComponent(searchInput)}&orderBy=${order}`} type='button' className=" hover:text-primary hover:bg-secondary cursor-pointer duration-100 h-full w-9 flex justify-center items-center">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Link>
                    </div>

                    <button type='button' onClick={() => setShowSortBar(s => (!s))} className='h-9 w-24 px-3 cursor-pointer flex items-center justify-between border-1 rounded-[18px] relative'>
                        {sortOptions.map((item) => (item.sort == order && item.content))}
                        <i class={`fa-solid fa-sort-down duration-200 ${showSortBar ? "rotate-180" : ""}`}></i>

                        <ul className={`absolute ${showSortBar? '' : "hidden"} top-[120%] left-0 w-24 min-h-10 rounded-[5px] border-1 bg-primary flex flex-col `}>
                            {sortOptions.map((item) => (<Link to={`/event?search=${encodeURIComponent(searchInput)}&orderBy=${item.sort}`} onClick={() => setOrder(item.sort)} className='w-full h-9 flex justify-center items-center hover:bg-secondary hover:text-primary'>{item.content}</Link>))}
                        </ul>
                </button>
                </div>
            </div>

            <main className="flex flex-col items-center gap-10 w-full">
                {eventList.slice(0, postNum).map((event) => <Post key={event.id} event={event}></Post>)}

                <div className={`cursor-pointer hover:underline ${eventList.length == postNum && 'hidden'}`} onClick={handleShowMore}>Show more</div>
            </main>
        </section>
    )
}