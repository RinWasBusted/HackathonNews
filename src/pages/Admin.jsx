import SideBar from '../components/admin-page/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

export default function Admin() {
    return (
        <div className="w-full flex justify-center text-black">
            <aside className='relative left-0'>
                <SideBar></SideBar>
            </aside>

            <main className='w-full '>
                <Outlet></Outlet>
            </main>
        </div>
    )
}