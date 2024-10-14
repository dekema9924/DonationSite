import React from 'react'

function Blog() {
    return (
        <>

            <div className='text-center pb-16' >
                <p className='text-xs font-semibold mt-16 mb-5'>Blog</p>
                <h1 className='font-bold text-2xl mb-5'>Our Blog</h1>
                <p className='text-xs mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                <div className='flex  gap-16 justify-center items-center sm:flex-col '>
                    <div className=' w-[400px] sm:w-80 '>
                        <img className='w-[400px] sm:w-96 mb-3' src="https://images.unsplash.com/photo-1536337005238-94b997371b40?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className='flex flex-col items-baseline'>
                            <p className='text-xs capitalize mb-2 '>category</p>
                            <h1 className='font-bold'>Education Sponsorship</h1>
                            <p className='text-xs mt-2 text-start '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id dolorem reprehenderit dolore est dignissimos vel.</p>
                        </div>
                    </div>
                    <div className='  w-[400px] sm:w-80 '>
                        <img className=' w-[400px] sm:w-96  mb-3' src="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className='flex flex-col items-baseline'>
                            <p className='text-xs capitalize mb-2 '>category</p>
                            <h1 className='font-bold'>Education Sponsorship</h1>
                            <p className='text-xs mt-2 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id dolorem reprehenderit dolore est dignissimos vel.</p>
                        </div>
                    </div> 
                    <div className=' w-[400px] sm:w-80'>
                        <img className=' w-[400px] sm:w-96  mb-3' src="https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className='flex flex-col items-baseline'>
                            <p className='text-xs capitalize mb-2 '>category</p>
                            <h1 className='font-bold'>Education Sponsorship</h1>
                            <p className='text-xs mt-2 text-start w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id dolorem reprehenderit dolore est dignissimos vel.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Blog