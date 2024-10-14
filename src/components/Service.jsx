import React from 'react'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HealingIcon from '@mui/icons-material/Healing';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Service() {
  return (
    <>
        <div className='flex flex-col gap-5 pb-10  '>
            <h1 className='font-bold text-4xl mt-[100px] w-[400px] text-center m-auto sm:w-80'>We've helped over 200 vulnerable communities</h1>
            <p className='text-sm text-center mb-[60px]  '>Lorem ipsum dolor sit amet consectetur!</p>
            <div className='flex gap-10 h-350px] items-center justify-center sm:flex-col'>
                <div className='flex flex-col shadow-2xl items-center gap-3 w-[296px] h-[350px] justify-center '>
                    <AutoStoriesIcon/>
                    <p className='font-semibold text-lg '>Education</p>
                    <p className='text-sm p-2 text-center font-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, suscipit vel iusto non debitis accusamus consequatur deserunt delectus omnis fugiat ad nihil quod adipisci soluta.</p>
                    <button className='h-12 w-40 border-2 border-gray-400 cursor-pointer text-sm '>Donate now <ArrowForwardIosIcon className='p-1'/></button>

                </div>
                <div className='shadow-2xl flex flex-col items-center gap-3 w-[296px] h-[350px] justify-center'>
                    <HealingIcon/>
                    <p className='font-semibold text-lg '>Health</p>
                    <p className='text-sm p-2 text-center font-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, suscipit vel iusto non debitis accusamus consequatur deserunt delectus omnis fugiat ad nihil quod adipisci soluta.</p>
                    <button className='h-12 w-40 border-2 border-gray-400 cursor-pointer text-sm '>Donate now <ArrowForwardIosIcon className='p-1'/></button>

                </div>
                <div className='shadow-2xl flex flex-col items-center gap-3 w-[296px] h-[350px] justify-center'>
                    <NightShelterIcon/>
                    <p className='font-semibold text-lg '>Shelter</p>
                    <p className='text-sm p-2 text-center font-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, suscipit vel iusto non debitis accusamus consequatur deserunt delectus omnis fugiat ad nihil quod adipisci soluta.</p>
                    <button className='h-12 w-40 border-2 border-gray-400 cursor-pointer text-sm '>Donate now <ArrowForwardIosIcon className='p-1'/></button>
                </div>
                <div className='shadow-2xl flex flex-col items-center gap-3 w-[296px] h-[350px] justify-center'>
                    <LocalDiningIcon/>
                    <p className='font-semibold text-lg '>Food Relief Funding</p>
                    <p className='text-sm p-2 text-center font-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, suscipit vel iusto non debitis accusamus consequatur deserunt delectus omnis fugiat ad nihil quod adipisci soluta.</p>
                    <button className='h-12 w-40 border-2 border-gray-400 cursor-pointer text-sm '>Donate now <ArrowForwardIosIcon className='p-1'/></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Service