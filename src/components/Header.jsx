import HackathonNewsLogo from '../assets/HackathonNewsLogo.png'
import { useState } from 'react'

export default function Header() {
    const navList = [
        {
            content: 'Blog',
            goto: '',
        },
        {
            content: 'Project',
            goto: '',
        },
        {
            content: 'About',
            goto: '',
        },
        {
            content: 'Newsletter',
            goto: '',
        },
    ];

    const [theme, setTheme] = useState(true);

    return (
        <header className="w-full h-25 flex justify-between items-center px-8">
            <figure className='h-full flex items-center'>
                <img src={HackathonNewsLogo} alt="Logo" className='h-full' />
                <span className='text-[30px] font-[700] translate-x-[-20px] translate-y-2 hidden lg:flex'>ackathon News</span>
            </figure>

            <nav className='flex items-center justify-between gap-5 text-[20px]'>

                {navList.map((item, index) => <button key={index} className='h-10 cursor-pointer duration-200 relative after:absolute after:w-full after:bottom-0 after:h-0.5 after:bg-secondary after:left-0 after:origin-left after:duration-100 after:scale-x-0 hover:after:scale-x-100 px-3'>{item.content}</button>)}

                <div className={`h-10 w-24 rounded-[20px] duration-200 ${theme ? 'bg-secondary border-primary after:bg-primary' : 'bg-primary border-secondary after:bg-secondary after:translate-x-14'} border-1 cursor-pointer after:h-6 after:w-6 after:duration-200 after:rounded-[50%] items-center px-2 hidden lg:flex`} onClick={() => setTheme(t => !t)}></div>
            </nav>
        </header>
    )
}