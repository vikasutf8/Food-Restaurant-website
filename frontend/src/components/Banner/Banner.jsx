import React from 'react'
import food1 from '../../assets/biryani5.png'
import {GrSecure} from 'react-icons/gr'
import {IoFastFood} from 'react-icons/io5'
import {GiFoodTruck} from 'react-icons/gi'



const Banner = () => {
  return (
    <>
    <div className='min-h-[550px] bg-gray-100 shadow-md '>
        <div >
            <div className='container '
            data-aos="slide-up"
            data-aos-duration="300"> 
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 '>
                {/* image sections */}
                <div>
                    <img src={food1} alt=""
                    className='max-w-[430px] w-full mx-auto drop-shadow-lg mt-10' />
                </div>
                {/* text-content sections */}
                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                    <h1 className='text-3xl sm:text-4xl font-bold'>Chiken Kari</h1>
                    <p className='text-sm text-gray-500 tracking-wide leading-5'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia autem quis unde dolorem eius consequatur aspernatur? Harum iusto sit, illum sapiente atque quae deserunt reiciendis laudantium ratione cupiditate architecto?
<br /><br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora voluptatibus quidem? Et corrupti animi porro repellendus. Doloremque sint expedita dolor exercitationem. Iste corporis facilis placeat dolorum sequi corrupti vel.
                    </p>
                    <div className='flex gap-6 '>
                        <div>
                            <GrSecure className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-200 dark:bg-violet-400'/>
                        </div>
                        <div>
                            <IoFastFood className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-200 dark:bg-orange-400'/>
                        </div>
                        <div>
                            <GiFoodTruck className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-200 dark:bg-green-400'/>
                        </div>
                    </div>
                    <div>
                        <button className='bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-3xl hover:scale-110 duration-500 font-semibold'>
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner
