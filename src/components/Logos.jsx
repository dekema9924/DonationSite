import React from 'react'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.png'


function Logos() {
  return (
    <>
        <div className='flex gap-[43px] p-10  flex-col overflow-hidden'>
            <p className='text-center text-semibold'>Our volunteers all over the world</p>
            <div className='animate flex gap-5'>
                <img src={logo} alt="" />
                <img src={logo2} alt="" />
                <img src={logo} alt="" />
                <img src={logo2} alt="" />
                <img src={logo} alt="" />
                <img src={logo2} alt="" />
                <img src={logo} alt="" />
                <img src={logo2} alt="" />
                <img src={logo} alt="" />    
                <img src={logo} alt="" />
                <img src={logo2} alt="" />
                <img src={logo} alt="" />          
            </div>
        </div>
    </>
  )
}

export default Logos