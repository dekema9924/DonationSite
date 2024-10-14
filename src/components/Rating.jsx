import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';

function Rating() {
  return (
    <>
        <div className='flex flex-col p-10 sm:p-5 border-t-2'>
            <h1 className='font-bold text-3xl w-96 sm:w-80'>Hear from our volunteers about their experience</h1>
            <p className='text-xs my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className=' flex gap-20  mt-5 w-[1280px] sm:flex-col sm:w-80 '>
                <div className='flex flex-col  w-[608px] sm:w-80 '>
                   <div className='flex'>
                        <StarRateIcon/>
                        <StarRateIcon/>
                        <StarRateIcon/>
                        <StarRateIcon/>
                        <StarRateIcon/>
                   </div>
                   <blockquote className=' w-96 mt-3 sm:text-sm sm:w-80'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, optio tempore. Nostrum, voluptas illum. Saepe labore ipsa eos quidem! Doloremque sed possimus ex fuga provident?"</blockquote>
                   <div className='flex items-center gap-3 mt-5'>
                        <img className='w-10 h-10 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
                        <p className='font-bold text-xs'>UserName</p>
                   </div>
                </div>

                <div className='flex flex-col  w-[608px] sm:w-80'>
                   <div className='flex'>
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                   </div>
                   <blockquote className=' w-96 mt-3  sm:text-sm sm:w-80'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, optio tempore. Nostrum, voluptas illum. Saepe labore ipsa eos quidem! Doloremque sed possimus ex fuga provident?"</blockquote>
                   <div className='flex items-center gap-3 mt-5'>
                        <img className='w-10 h-10 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
                        <p className='font-bold text-xs'>UserName</p>
                   </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Rating