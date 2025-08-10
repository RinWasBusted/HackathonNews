import './assets/index.css'  // Tailwind trước
import './assets/App.css'   // App CSS sau
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'


function App() {

  return (
    <div className='flex justify-center w-[1280px] text-secondary'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
