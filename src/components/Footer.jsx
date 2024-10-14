import React from 'react'

function Footer() {
  return (
    <>
        <div className='flex flex-col gap-10 h-[374px] justify-center '>
            <p className='font-bold w-fit mx-auto'>LOGO</p>
            <ul className='flex font-bold mx-auto gap-5 text-sm'>
              <li>About</li>
              <li>Project</li>
              <li>Contact</li>
              <li>Mission</li>
            </ul>
            <hr className='border-2 border-gray-400 w-11/12 mx-auto border-b-0' />
            <div className='flex items-center justify-between sm:flex-col gap-5 '>
                <p className='text-xs ml-16 sm:ml-0 '>All rights Reserved Ddsgnr.Figma design by <a href="https://www.figma.com/@Zulaikhahammed">@Zulaikhahammed </a></p>
                <ul className='flex underline sm:text-xs  gap-5 text-sm cursor-pointer mr-16 sm:mr-0'>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Cookie Settings</li>
                  <li>Coded by @DanielEkema</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Footer