import './assets/index.css'  // Tailwind trước
import './assets/App.css'   // App CSS sau
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'


function App() {

  return (
    <div className='flex justify-center w-full text-secondary overflow-x-hidden min-h-[100vh]'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
