import React from 'react'

const Footer = () => {
    return (
        <div className=' text-white ' id='footer'>

            <div className='p-2 bg-black'>
                <div className='flex-grow border-t border-gray-400  w-3/4 mt-12 mx-auto rounded '></div>
                <div className='mt-4 flex-col items-center text-center flex tracking-widest'>
                    <h1 className='font-futura_light text-2xl'>Neurometix, LLC, Bethesda, MD 20817</h1>
                    <span className='font-futura_light text-1xl'>T; 301-530-7965 </span>
                    <span className='font-futura_light text-1xl'>email: info@neurometix.com</span>
                    <span className='font-futura_light text-1xl'>www.neurometix.com</span>
                    <h1 className='text-gray-500 text-1xl font-futura_light mt-2  tracking-widest'>© 2021-2022 All right reserved</h1>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>

            </div>
        </div>
    )
}

export default Footer