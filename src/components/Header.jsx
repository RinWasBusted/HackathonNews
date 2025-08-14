import HackathonNewsLogo from '../assets/HackathonNewsLogo.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import SideBoard from './home-page/side-board/SideBoard';

export default function Header() {
    const navList = [
        {
            content: 'Home',
            goto: '/',
        },
        {
            content: 'Events',
            goto: '/event',
        },
        {
            content: 'Blog',
            goto: '/blog',
        },
        {
            content: 'Contact',
            goto: '/contact',
        }
    ];

    const { toggleTheme, isLight } = useTheme();
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleResize = () => setShowNavbar(false);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])


    return (
        <>
            <div className={`fixed bg-black/50 w-full h-full left-0  lg:hidden duration-100 ${showNavbar ? "opacity-100 z-5" : 'opacity-0 z-[-1]'}`} onClick={() => setShowNavbar(false)}></div>

            <header className="max-w-[1280px] w-full h-15 sm:h-25 flex justify-between items-center px-8 relative z-10 bg-primary font-[500]">
                <figure className='h-full flex items-center select-none cursor-pointer'>
                    <img src={HackathonNewsLogo} alt="Logo" className='h-[50%]' />
                    <span className='text-[30px] font-[700] translate-y-2 hidden lg:flex'>ackathon News</span>
                </figure>

                <div className='h-10 text-[30px] flex justify-center items-center cursor-pointer lg:hidden' onClick={() => setShowNavbar(s => !s)}>
                    <i className={`fa-solid duration-100 ${showNavbar ? 'fa-xmark' : 'fa-bars'}`}></i>
                </div>

                <nav className={`flex lg:flex-row items-center justify-between gap-10 lg:gap-5 text-[20px] lg:relative absolute flex-col max-lg:right-0 max-lg:top-[100%] max-lg:w-[80vw] z-10 bg-primary overflow-hidden max-lg:py-10 duration-200 ${showNavbar ? 'translate-x-0' : 'translate-x-[100%]'} lg:translate-0`}>

                    {navList.map((item, index) => <Link key={index} to={item.goto} className='h-10 w-full cursor-pointer duration-200 relative after:absolute after:w-full after:bottom-0 after:h-0.5 after:bg-secondary after:left-0 after:origin-left after:duration-100 after:scale-x-0 hover:after:scale-x-100 px-3'>{item.content}</Link>)}

                    <div className={`h-10 w-24 shrink-0 rounded-[20px] duration-200 ${isLight ? 'bg-black border-white after:bg-white' : 'bg-white border-black after:bg-black after:translate-x-14'} border-1 cursor-pointer after:h-6 after:w-6 after:duration-200 after:rounded-[50%] items-center px-2 flex relative`} onClick={toggleTheme}>
                        <i className={`fa-solid fa-sun text-black absolute left-2.5 translate-y-[0.5px] z-10 duration-100 ${isLight ? 'opacity-100' : 'opacity-0'}`}></i>
                        <i className={`fa-solid fa-moon text-white absolute right-3 translate-y-[0.5px] z-10 duration-100 ${isLight ? 'opacity-0' : 'opacity-100'}`}></i>
                    </div>

                    <section className='lg:hidden w-full p-5'>
                        <SideBoard></SideBoard>
                    </section>
                </nav>
            </header>
        </>

    )
}