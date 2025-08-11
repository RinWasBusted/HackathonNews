import HackathonNewsLogo from '../assets/HackathonNewsLogo.png'
import { useState, useEffect } from 'react'

export default function Header() {
    const navList = [
        {
            content: 'Events',
            goto: '',
        },
        {
            content: 'Blog',
            goto: '',
        },
        {
            content: 'Contact',
            goto: '',
        }
    ];

    const [theme, setTheme] = useState(true);
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleResize = () => setShowNavbar(false);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <>
            <div className={`absolute bg-black/30 w-full h-full left-0 z-5 lg:hidden duration-100 ${showNavbar ? "opacity-100" : 'opacity-0'}`}></div>

            <header className="w-full h-15 sm:h-25 flex justify-between items-center px-8 relative z-10 bg-primary">
                <figure className='h-full flex items-center select-none cursor-pointer'>
                    <img src={HackathonNewsLogo} alt="Logo" className='h-full' />
                    <span className='text-[30px] font-[700] translate-x-[-20px] translate-y-2 hidden lg:flex'>ackathon News</span>
                </figure>

                <div className='h-10 text-[30px] flex justify-center items-center cursor-pointer lg:hidden' onClick={() => setShowNavbar(s => !s)}>
                    <i className={`fa-solid duration-100 ${showNavbar ? 'fa-xmark' : 'fa-bars'}`}></i>
                </div>

                <nav className={`flex lg:flex-row items-center justify-between gap-10 lg:gap-5 text-[20px] lg:relative absolute flex-col max-lg:right-0 max-lg:top-[100%] max-lg:w-[50vw] z-10 bg-primary overflow-hidden max-lg:py-10 duration-200 ${showNavbar ? 'translate-x-0' : 'translate-x-[100%]'} lg:translate-0`}>

                    {navList.map((item, index) => <button key={index} className='h-10 w-full cursor-pointer duration-200 relative after:absolute after:w-full after:bottom-0 after:h-0.5 after:bg-secondary after:left-0 after:origin-left after:duration-100 after:scale-x-0 hover:after:scale-x-100 px-3'>{item.content}</button>)}

                    <div className={`h-10 w-24 shrink-0 rounded-[20px] duration-200 ${theme ? 'bg-black border-white after:bg-white' : 'bg-white border-black after:bg-black after:translate-x-14'} border-1 cursor-pointer after:h-6 after:w-6 after:duration-200 after:rounded-[50%] items-center px-2 flex relative`} onClick={() => setTheme(t => !t)}>
                        <i className={`fa-solid fa-sun text-black absolute left-2.5 translate-y-[0.5px] z-10 duration-100 ${theme ? 'opacity-100' : 'opacity-0'}`}></i>
                        <i className={`fa-solid fa-moon text-white absolute right-3 translate-y-[0.5px] z-10 duration-100 ${theme ? 'opacity-0' : 'opacity-100'}`}></i>
                    </div>
                </nav>
            </header>
        </>

    )
}