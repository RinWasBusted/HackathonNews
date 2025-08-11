import HackathonNewsLogo from '../assets/HackathonNewsLogo.png'
import { Link } from 'react-router-dom';

export default function Footer() {
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

    return (
        <>
            <footer className="w-full bg-secondary text-primary flex flex-col lg:flex-row justify-between p-10 gap-10">
                <section className='h-full flex flex-col gap-5 shrink-0 flex-3 border-white/20 max-lg:border-b-1 pb-5'>
                    <figure className='w-20'>
                        <img src={HackathonNewsLogo} alt="Logo" />
                    </figure>

                    <article>
                        Trang web tổng hợp tin tức hackathon tại Việt Nam. Chúng tôi cung cấp thông tin nhanh chóng, chính xác về các sự kiện hackathon trong nước, giúp bạn không bỏ lỡ bất kỳ cơ hội nào để thể hiện tài năng lập trình và kết nối với cộng đồng tech.
                    </article>
                </section>

                <section className='flex flex-col gap-5 shrink-0 flex-1  border-white/20 max-lg:border-b-1 pb-5'>
                    <h3 className='font-[600] text-[20px]'>Page</h3>

                    {navList.map((item, index) => <Link key={index} to={item.goto} className='cursor-pointer hover:underline text-left'>{item.content}</Link>)}
                </section>

                <section className='text-primary font-bold flex flex-col gap-5 shrink-0 flex-1 border-white/20 max-lg:border-b-1 pb-5'>
                    <h3 className='font-[600] text-[20px]'>Finding usefull</h3>

                    <button type='button' className='border-primary border-2 rounded-[5px] px-4 py-2 cursor-pointer w-fit hover:bg-primary duration hover:text-secondary group'>Buy me a coffee <i className="fa-solid fa-mug-hot group-hover:scale-130 group-hover:rotate-12 duration-300"></i> ?</button>
                </section>

                <section className='flex flex-col gap-5 shrink-0 flex-1  border-white/20 max-lg:border-b-1 pb-5'>
                    <h3 className='font-[600] text-[20px]'>Contact us</h3>

                    <p className=' flex items-center gap-1'><i class="fa-solid fa-envelope"></i> thaian0609asd@gmail.com</p>

                    <p className=' flex items-center gap-1'><i class="fa-solid fa-phone"></i> 0819124125</p>

                    <nav className='flex gap-3'>
                        <a href='https://www.facebook.com/pham.hoang.thai.662571/' target='_blank' className='w-6 h-6 rounded-[50%] bg-primary cursor-pointer text-secondary text-center hover:scale-110 duration-100'><i className="fa-brands fa-facebook-f "></i></a>
                        <a href='https://www.linkedin.com/in/th%C3%A1i-ph%E1%BA%A1m-569a73351/' target='_blank' className='w-6 h-6 rounded-[50%] bg-primary cursor-pointer text-secondary text-center hover:scale-110 duration-100'><i class="fa-brands fa-linkedin-in"></i></a>
                    </nav>
                </section>


            </footer>
            <article className='w-full shrink-0 text-center bg-secondary text-primary py-5 px-10'>
                © 2025 HackathonNews. All Rights Reserved.
            </article>
        </>

    )
}