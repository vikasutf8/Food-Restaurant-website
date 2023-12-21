import React from 'react'
// import Img2 from '../../assets/biryani.png'
import food1 from '../../assets/biryani2.png'
import food2 from '../../assets/biryani3.png'
import food3 from '../../assets/biryani5.png'
const Service = () => {

const ServiceData =[
    {
        id :1,
        img:food3,
        name:"Biryani",
        description:"a mixed rice dish that was thought to have originated from Iran before settling in modern India"
    },
    {
        id :2,
        img:food1,
        name:"Chicken kari",
        description:"a mixed rice dish that was thought to have originated from Iran before settling in modern India"
    },
    {
        id :3,
        img:food2,
        name:"Fish Rice",
        description:"a mixed rice dish that was thought to have originated from Iran before settling in modern India"
    },
   
]

  return (
    <>
    <div className='py-10 '>
        <div className='container'>
            {/* header sections */}
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Our Services</p>
                <h1 className=' text-3xl font-bold'>Services</h1>
                <p className='text-xs text-gray-400'>
                    {" "}
                    Online food delivery platforms are expanding the choice and convenience for customers to order from a wide variety of restaurants directly from their phone or device
                </p>
            </div>
            {/* Card sections */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                    {
                        ServiceData.map((imgs)=>{
                            return <div key={imgs.id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-slate-800 dark:hover:bg-primary 
                            hover:bg-primary
                            hover:text-white duration-300 p-4 shadow-xl'>
                                <div className='h-[100px]'>
                                    <img src={imgs.img} alt=""
                                    className='max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-500'
                                     />
                                </div>
                                <div className='p-4 text-center'>
                                    <h1 className='text-xl font-bold'>{imgs.name}</h1>
                                    <p className='text-zinc-500 text-sm line-clamp-2 group-hover:text-white duration-200'>{imgs.description}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Service
