import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <>
         <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8  ' >
            <div className='mx-auto max-w-lg'>
              <Outlet/>
            </div>
            
         </div>
    </>
   
  )
}
