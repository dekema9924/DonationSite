
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

function Header() {
    const [isArrowDown, setArrowDown] = useState(true)
    const [isArrowDownMobile, setArrowDownMobile] = useState(true)
    const [isMenu, setMenu] = useState(true)


    const HandleArrowDown = () => {
        setArrowDown(prev => !prev)
    }
    const HandleArrowDownMobile = () => {
        setArrowDownMobile(prev => !prev)
    }
    const HandleMenu = () => {
        setMenu(prev => !prev)
    }


    return (
        <>
            <div className=' border-2 flex justify-between items-center h-14 shadow-md '>
                <h1 className='ml-10 font-bold'>LOGO</h1>

                <div className='mr-10 sm:hidden'>
                    <ul className='flex items-center gap-5 '>
                        <li>Home</li>
                        <li>About</li>
                        <li>Mission</li>
                        <div className=' flex flex-col items-center  overflow-hidden '>
                            <div className='flex items-center'>
                                <li>Project</li>
                                <KeyboardArrowDownIcon className='cursor-pointer' onClick={HandleArrowDown} style={{rotate: !isArrowDown? "200deg": ""}} />
                            </div>
                            <div className=' shadow-lg absolute w-20 text-center  transition-all duration-[.8s] h-0 top-12 overflow-hidden z-50 bg-white rounded-md' style={{ height: !isArrowDown ? "130px" : "0px", paddingTop: !isArrowDown ? "30px" : "0px" }}>
                                <li>Link</li>
                                <li>Link</li>
                                <li>Link</li>
                            </div>
                        </div>
                        <li>Blog</li>
                        <li>Contact</li>
                        <button className='bg-black text-white text-xs h-7 w-24 rounded-md cursor-pointer'>Donate Now</button>
                    </ul>
                </div>
                <div className='flex-col gap-1 items-center cursor-pointer mr-10 hidden sm:flex' onClick={HandleMenu}>
                    <div className={isMenu ? "w-6 border-2 border-black border-t-0 transition-all duration-300" : "border-2 w-8 border-black border-t-0 rotate-[45deg] translate-y-2 transition-all duration-300 "}></div>
                    <div className={isMenu ? "w-6 border-2 border-black border-t-0 transition-all duration-300" : "border-2 border-black border-t-0 w-7 rotate-[130deg] transition-all duration-300  "}></div>
                    <div className={isMenu ? "w-6 border-2 border-black border-t-0 transition-all duration-300" : "transition-all duration-300"}></div>
                </div>
            </div>
            <div className=' shadow-lg overflow-hidden transition-all duration-[.9s] hidden sm:flex ' style={{ height: isMenu ? "0" : "400px", padding: isMenu ? "0" : "20px" }} >
                <ul className='flex flex-col pb-5  items-center gap-5  '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Mission</li>
                    <div className=' flex flex-col items-center  overflow-hidden  '>
                        <div className='flex items-center'>
                            <li>Project</li>
                            <KeyboardArrowDownIcon className='cursor-pointer' onClick={HandleArrowDownMobile} style={{rotate: !isArrowDownMobile? "200deg": ""}} />
                        </div>
                        <div className=' shadow-lg sm:flex sm:flex-col bg-white absolute w-40 text-center rounded-md overflow-hidden  transition-all delay-100 text-black top-[240px] h-0 lg:hidden' style={{ height: isArrowDownMobile ? "0" : "90px", display: !isMenu ? "flex" : "none" }}>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </div>
                    </div>
                    <li>Blog</li>
                    <li>Contact</li>
                    <button className='bg-black text-white text-xs h-7 w-24 rounded-md cursor-pointer'>Donate Now</button>
                </ul>
            </div>
        </>
    )
}

export default Header