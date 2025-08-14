import SideBar from '../components/admin-page/SideBar/SideBar'

export default function Admin() {
    return (
        <div className="w-full flex justify-center">
            <aside className='fixed left-0'>
                <SideBar></SideBar>
            </aside>
        </div>
    )
}