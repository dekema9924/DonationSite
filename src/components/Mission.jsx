import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Mission() {
    return (
        <>
            <div className='flex items-center p-10 sm:p-0 h-[580px] sm:h-[750px] sm:flex-wrap justify-center  bg-slate-300  sm:w-full   '>
                <div className='w-[760px] flex items-center h-[645px] sm:h-[400px] mr-32 sm:mr-0'>
                    <iframe className='rounded-3xl'
                        src='https://www.youtube.com/embed/WTdPnJMOr7Y'
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                        width="100%"
                        height="400"
                    />
                </div>

                <div className='flex justify-center flex-col gap-3 p-10 w-[720px] h-[750px] sm:w-full sm:h-[400px]'>
                    <p className='font-bold text-sm'>Feauture two</p>
                    <h1 className='font-bold text-3xl '>Our Mission</h1>
                    <p className=' text-sm  w-[250px]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum amet itaque laborum, ipsa exercitationem obcaecati eaque.</p>
                    <div className='flex cursor-pointer items-center gap-1 '>
                        <p>Learn more </p>
                        <p><ArrowForwardIosIcon /></p>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Mission