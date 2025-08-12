import Layout from "../layouts/Layout"
import HeroBanner from "../components/home-page/hero-banner/HeroBanner"

export default function Home() {
    return <div className="h-full w-full flex flex-col items-center">
        <Layout>
            <HeroBanner></HeroBanner>
        </Layout>
    </div>
}