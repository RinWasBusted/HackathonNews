import ScrollToTop from "../utils/ScrollToTop"
import Layout from "../layouts/Layout"
import HeroBanner from "../components/home-page/hero-banner/HeroBanner"
import RecentEvent from "../components/home-page/recent-event/RecentEvent"
import SideBoard from "../components/home-page/side-board/SideBoard"
import RecentBlog from "../components/home-page/recent-blog/RecentBlog"

export default function Home() {
    ScrollToTop();

    return <div className="h-full w-full flex flex-col items-center bg-primary">
        <Layout>
            <HeroBanner></HeroBanner>

            <section className="flex max-w-[1280px] w-full">
                <div className="flex-1 lg:flex-2/3">
                    <RecentEvent></RecentEvent>
                    <RecentBlog></RecentBlog>
                </div>

                <div className="hidden flex-2/6 lg:inline p-10">
                    <SideBoard></SideBoard>
                </div>
            </section>
        </Layout>
    </div>
}