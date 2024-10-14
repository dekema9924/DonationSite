import React from 'react'

function LandingPage() {
  return (
    <>
        <div className='flex items-center sm:flex-wrap  bg-slate-300'>
          <div className='flex justify-center flex-col gap-3 p-10 w-[720px] h-[750px] sm:h-[400px] sm:w-full'>
            <h1 className='font-bold text-4xl w-[300px]'>Make a Difference in the Lives of Children in Need</h1>
            <p className=' w-[200px]'>We develope innovative solutions that enable our clients to enhance their competetive advantages.</p>
            <div className='flex gap-2 items-center w-fit'>
              <button className='bg-black cursor-pointer text-white rounded-md w-32 h-10 text-xs'>Donate Now</button>
              <button className=' h-10 w-32 bg-transparent cursor-pointer text-xs border-2 border-black rounded-md'>Learn More</button>
            </div>
          </div>
          <div className='w-[720px] h-[745px] sm:h-[400px]'>
            <img className='object-cover  h-[710px] w-[720px] sm:h-[400px] ' src="https://images.unsplash.com/photo-1529598993581-b025f3f79f9c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="KidPhoto" />
          </div>
        </div>
    </>
  )
}

export default LandingPage