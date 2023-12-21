import React, { useEffect, useState } from 'react'
import darkPng from '../../assets/dark-mode-button.png'
import lightPng from '../../assets/light-mode-button.png'
const DarkMode = () => {
    const [theme ,setTheme] =useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")

    const element =document.documentElement;
    useEffect(()=>{
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        }
        else{
            element.classList.remove("dark");
            localStorage.setItem("theme","light");

        }
    },[theme])

const changeTheme =()=>{
    if(theme ==="light")setTheme("dark");
    else setTheme("light");
}

  return (
    <>
    <div className='relative'>
        <img src={darkPng} alt=""  className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-lg  transition-all duration-100 ${theme !=='dark'? "opacity-0":"opacity-100"}`}
        onClick={changeTheme}/>
        <img src={lightPng} alt="" className='w-12  cursor-pointer drop-shadow-lg transition-all duration-100' 
        onClick={changeTheme}/>
    </div>
    </>
  )
}

export default DarkMode
