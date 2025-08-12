import Layout from "../layouts/Layout"
import HeroBanner from "../components/home-page/hero-banner/HeroBanner"
import RecentEvent from "../components/home-page/recent-event/RecentEvent"

export default function Home() {
    return <div className="h-full w-full flex flex-col items-center bg-primary">
        <Layout>
            <HeroBanner></HeroBanner>

            <RecentEvent></RecentEvent>
        </Layout>
    </div>
}