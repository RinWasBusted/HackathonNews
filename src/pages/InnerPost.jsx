import ScrollToTop from "../utils/ScrollToTop";
import Layout from "../layouts/Layout"
import Example from '../assets/Example.jpg'
import SideBoard from "../components/home-page/side-board/SideBoard";
import Post from "../components/inner-post/post/Post";
import RecentBlog from "../components/home-page/recent-blog/RecentBlog";
import { useState, useEffect } from "react";
import getPost from '../services/getPost'
import { useParams } from "react-router-dom";


export default function InnerPost() {
    ScrollToTop();

    const [post, setPost] = useState({});

    const { postType, id } = useParams();

    useEffect(() => {
        try {
            async function fetchPostData() {
                const data = await getPost(postType, id);
                setPost(data);
            };

            if (postType && id) {
                fetchPostData();
            }
        } catch (e) {
            console.error('Failed to fetch post data' + e);
        }
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