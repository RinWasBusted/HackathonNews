import ScrollToTop from "../utils/ScrollToTop";
import Layout from "../layouts/Layout"
import Example from '../assets/Example.jpg'
import SideBoard from "../components/home-page/side-board/SideBoard";
import Post from "../components/inner-post/post/Post";
import RecentBlog from "../components/home-page/recent-blog/RecentBlog";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function InnerPost() {
    ScrollToTop();

    const [post, setPost] = useState({});

    const { postType, id } = useParams();

    useEffect(() => {
        setPost({
                id: 1,
                banner: "https://appsembler.com/wp-content/uploads/2024/04/10-Tips-for-Hackathon-Success-in-2024.png",
                content: `<h1>this is h1 content</h1><p style="text-align: right;">right align testing</p><p></p>`,
                date: '',
                desc: 'this is the post description',
                progress: 'ongoing',
                tags: [],
                title: '10 tips for hackathon success in 2024',
                type: 'event'
            })
    }, [postType, id])

    return (
        <div className="h-fit w-full flex flex-col items-center bg-primary">
            <Layout>
                <main className="flex max-w-[1280px] w-full flex-wrap">
                    <section className='w-full relative flex flex-col items-center overflow-hidden flex-1 lg:flex-4/6 p-10'>
                        <Post post={post}></Post>
                    </section>

                    <section className="hidden flex-2/6 lg:inline p-10">
                        <SideBoard></SideBoard>
                    </section>

                    <section className="w-full lg:w-2/3">
                        <RecentBlog></RecentBlog>
                    </section>
                </main>
            </Layout>
        </div>
    )
}