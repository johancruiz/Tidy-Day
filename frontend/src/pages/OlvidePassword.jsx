import {Link} from 'react-router-dom'

export const OlvidePassword = () => {
  return (
    <>
      <h1 className=" text-sky-600 text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl capitalize">
      Recover your access and do not lose your  <span className="my-4 text-slate-700">projects</span>
        </h1>
      <form 
          className="my-10 bg-white shadow rounded-lg p-10"
      >
        
        
        <div className="my-5">
            <label 
                className="text-lg font-semibold"
                htmlFor="email"
            >Email</label>
            <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
        </div>
        <input 
            type="submit"
            value="Send Instructions"
            className="w-full mb-5 py-3 bg-sky-700 hover:cursor-pointer hover:bg-sky-800 transition-colors rounded-xl  text-white text-lg font-semibold"
        />
       
        </form>
        <nav className="lg:flex lg:justify-between" >
            <Link
                className=" block text-center my-5 text-slate-500 text-sm"
                to="/"
            >
                Already have an account? <span className='text-sky-600' >Log In</span>
            </Link> 
            
            <Link
                className=" block text-center my-5 text-slate-500 text-sm"
                to="/registrar"
            >
                Don't have an account? <span className='text-sky-600' >Sign up</span>
            </Link>  
           
        </nav>   

        
    </>
  )
}
