import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Donate() {
  return (
    <>
        <div className="hero h-[100vh] sm:h-[408px] bg-no-repeat bg-cover bg-center w-[100%]  sm:bg-cover sm:bg-no-repeat">
            <div className='sm:w-96'>
                <h1 className='w-[900px] text-[4em] font-bold sm:text-[1.5em] leading-[0.9em] sm:leading-7 sm:w-96  '>Join us in creating a brighter future for children everywhere.</h1>
                <p className='sm:text-sm sm:w-96 w-[900px] text-[2em] text-center mt-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque non et eum numquam consequuntur doloremque natus laborum ut ipsa adipisci.</p>
                <div className='flex items-center gap-7 justify-center mt-10'>
                    <button className='w-[136px] h-[48px] border-2 border-gray-300 cursor-pointer'>Donate Now</button>
                    <button className='cursor-pointer'>Learn More <ArrowForwardIosIcon/> </button>
                </div>
            </div>


        </div>
    </>
  )
}

export default Donate