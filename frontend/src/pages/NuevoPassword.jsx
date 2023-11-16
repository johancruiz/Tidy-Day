import React from 'react'

export const NuevoPassword = () => {
  return (
    <>
      <h1 className=" text-sky-600 text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl capitalize">
      reset your <span className="my-4 text-slate-700" >Password</span>
        </h1>
      <form 
          className="my-10 bg-white shadow rounded-lg p-10"
      >
        <div className="my-5">
            <label 
                className="text-lg font-semibold"
                htmlFor="password"
            >New Password</label>
            <input
                id="password"
                type="password"
                placeholder="********"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
        </div>
        <input 
            type="submit"
            value="Save New Password"
            className="w-full mb-5 py-3 bg-sky-700 hover:cursor-pointer hover:bg-sky-800 transition-colors rounded-xl  text-white text-lg font-semibold"
        />
       
        </form>
    </>
    
  )
}
