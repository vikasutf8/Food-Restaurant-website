import React, { useState } from 'react'
import bgImg from '../../assets/vector3.png'
import food1 from '../../assets/biryani2.png'
import food2 from '../../assets/biryani3.png'
import food3 from '../../assets/biryani5.png'

const ImageList =[
    {
        id:1,
        img :food1,
    },
    {
        id:2,
        img :food2,
    },
    {
        id:3,
        img :food3,
    },
]

const bgImage ={
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat :"no-repeat",
    width :"100%",
    height:"100%",
}

const Hero = () => {
    const [imgId,setImgId] =useState(food1);

  return (
    <>
    <div style={bgImage}
    className='min-h-[550px] sm:min-h-[600px] bg-gray-200 dark:bg-gray-900 dark:text-white duration-200 flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* text content <section></section> */}
                <div>
                    <h1>Welcome to the Foodies Zone</h1>
                </div>
                {/* Image section */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero
