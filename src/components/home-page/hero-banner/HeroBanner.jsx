import HackathonNewsBanner from '../../../assets/HackathonNewsBanner.png'
import HackathonNewsLogo from '../../../assets/HackathonNewsLogo.png'


export default function HeroBanner() {
    return (
        <section className='w-full relative flex justify-center items-center overflow-hidden'>
            <figure className='w-full relative flex justify-center blur-[5px]'>
                <img src={HackathonNewsBanner} alt="Hackathon News Banner" className='w-full' />

            </figure>

            <article className='absolute w-full flex justify-center items-center h-full text-stroke text-black font-[800] text-[8vw] underline border-y-1'>
                HACKATHON NEWS
            </article>
        </section>
    )
}