import React from 'react'
import Slider from 'react-slick'

const testimonialData = [
    {
      id: 1,
      name: "Samuel",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 1,
      name: "Smith",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
    },
  ];

const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
      };
  return (
    <>
    <div className='bg-gradient-to-b from-slate-200 to-slate-600 py-8' >
        <div className="container">
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Our Testimoinal</p>
                <h1 className=' text-3xl font-bold'>Testimonial</h1>
                <p className='text-xs text-gray-800'>
                    {" "}
                    Online food delivery platforms are expanding the choice and convenience for customers to order from a wide variety of restaurants directly from their phone or device
                </p>
            </div>
            {/* testimional sections */}
            <div className='grid grid-cols-1 max-w-[600px] mx-auto gap-6'>
                <Slider {...settings}>
 {
    testimonialData.map((items)=>{
        return(
            <div
            key={items.id}
            className='my-6 '>
            <div className='flex flex-col items-center justify-center gap-4 text-center shadow-xl mx-4 rounded-xl dark:bg-gray-800 bg-primary/5 relative py-4'>
                <img src={items.img} alt="" className='rounded-full block mx-auto' />
                <h1 className='text-xl font-bold'>{items.name}</h1>
                <p 
                className='text-zinc-900 text-sm dark:text-white'>{items.text}</p>
                <p className='text-black/20 text-9xl font-serif absolute top-0 right-6  '>,,</p>
            </div>
            </div>
        )
    })
 }                   

                </Slider>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonial
