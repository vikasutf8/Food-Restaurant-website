import React from 'react'
import {FaCartShopping} from 'react-icons/fa6'
import DarkMode from './DarkMode'
import foodlogo from '../../assets/food-logo.png'

function Navbar() {
  return (
    <>
    <div className='shadow-md bg-slate-100 dark:bg-gray-900 dark:text-white duration-200'>
        <div className='container py-3 sm:py-0'>
            <div className="flex justify-between items-center">
                <div>
                    <a href="#" className='flex items-center gap-2 text-2xl  font-bold sm:text-3xl '>
                        <img src={foodlogo} alt="food-logo" className='w-10' />Foodie
                    </a>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                        <DarkMode/>
                    </div>
                    <ul className='hidden sm:flex gap-4 text-xl  '>
                        <li>
                            <a href=""
                            className='inline-block py-4 px-3 hover:text-primary hover:scale-110 duration-200 font-semibold'>Home</a>
                        </li>
                        <li>
                            <a href=""
                            className='inline-block py-4 px-3 hover:text-primary hover:scale-110 duration-200 font-semibold'>About</a>
                        </li>
                        <li>
                            <a href=""
                            className='inline-block py-4 px-3 hover:text-primary hover:scale-110 duration-200 font-semibold'>Contact</a>
                        </li>
                    </ul>
                    <button className='flex gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-3xl hover:scale-110 duration-200 '>
                        <span className='sm:text-lg'>Order</span>
                        <FaCartShopping className='text-xl text-white  drop-shadow-sm cursor-pointer'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
