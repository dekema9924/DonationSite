import React from 'react'

function JoinUs() {
    return (
        <>
            <div className='flex items-center gap-10   sm:flex-wrap  pt-10 bg-red-50'>
                <div className='flex justify-center flex-col gap-3 p-10 w-[720px] sm:w-full h-[750px] sm:h-[400px]'>
                    <h1 className='font-bold text-3xl w-[300px]'>Join us in creating a brighter future fir children everywhere</h1>
                    <p className='w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum amet itaque laborum, ipsa exercitationem obcaecati eaque tenetur soluta sint voluptatum modi, ab aut culpa architecto nostrum, adipisci harum illum facilis.</p>
                    <div className='flex gap-2 items-center w-fit'>
                        <button className='bg-black cursor-pointer text-white rounded-md w-32 h-10 text-xs'>Donate Now</button>
                        <button className=' h-10 w-32 bg-transparent cursor-pointer text-xs border-2 border-black rounded-md'>Learn More</button>
                    </div>
                </div>
                <div className='w-[760px] h-[645px] sm:h-[400px] mr-32 sm:mr-0'>
                    <img className='object-cover  h-[610px] w-[700px] sm:w-full sm:h-[400px] ' src="https://images.unsplash.com/photo-1583238829785-7ba8a888bb72?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="KidPhoto" />
                </div>

            </div>

            <div className='flex flex-col gap-10 items-center p-10'>
                <h1 className='text-2xl font-bold mt-5'>Our Achievements</h1>
                <p className='text-sm text-center w-[600px] sm:w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa minima temporibus maiores placeat nisi repudiandae ullam odio vero incidunt amet, iusto natus dicta ipsum quae.</p>
                <div className='flex gap-10 sm:grid  grid-cols-2 '>
                    <div className='text-center'>
                        <p className='font-bold text-lg text-center w-32 '>+200M</p>
                        <p className='text-xs w-32 text-center'>Humans Impacted</p>
                    </div>
                    <div>
                        <p className='font-bold text-lg text-center w-32'>50K</p>
                        <p className='text-xs w-32 text-center  '>Colaborate</p>
                    </div>
                    <div>
                        <p className='font-bold text-lg text-center w-32'>370K</p>
                        <p className='text-xs w-36 text-center  '>Assisted commnunities</p>
                    </div>
                    <div>
                        <p className='font-bold text-lg text-center w-32'>+100</p>
                        <p className='text-xs w-32 text-center '>Donations</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default JoinUs


