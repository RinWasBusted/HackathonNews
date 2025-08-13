import Layout from "../layouts/Layout"
import HeroBanner from "../components/home-page/hero-banner/HeroBanner"
import RecentEvent from "../components/home-page/recent-event/RecentEvent"
import SideBoard from "../components/home-page/side-board/SideBoard"

export default function Home() {
    return <div className="h-full w-full flex flex-col items-center bg-primary">
        <Layout>
            <HeroBanner></HeroBanner>

            <section className="flex max-w-[1280px] w-full">
                <div className="flex-1 lg:flex-4/6">
                    <RecentEvent></RecentEvent>
                </div>

                <div className="hidden flex-2/6 lg:inline">
                    <SideBoard></SideBoard>
                </div>
            </section>
        </Layout>
    </div>
}