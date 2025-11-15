import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import logo from './assets/download.svg';
import { Play } from 'lucide-react';
import "./index.css";


function Navbar() {
  let initialValue = 'Telecharger sur Android';
  const [stateText,setStateText] = useState(()=>
  {
    const query = window.matchMedia("(min-width: 765px)");
    return (query.matches) ? 'Telecharger sur Android' : "Telecharger"
  });
  useEffect(
    ()=>
    {
        /*The react Useeffect is going to set a specific action each time the screen width changes. Everytime the matchMedia
        element which is a css mediaquery object changes because of the screen , the addeventlistener updates the state of 
        the stateText.*/
        const query = window.matchMedia("(min-width: 765px)");
        query.addEventListener("change",()=>
        {
          (query.matches) ? setStateText('Télécharger sur Android') : setStateText("Télécharger");
        })
    },[]
  )

  
  return (
   <header>
    <nav className='flex px-6 py-4 border-b-[0.1px] border-navbarBorder border-opacity-50 bg-backgroundPage fixed top-0 left-0 w-full'>
        <div className='flex flex-row justify-start w-1/2 cursor-pointer'>
            <div className='flex items-center gap-1'>
                <img src= {logo} alt="Mollet Logo" className='w-8 h-8'/>
                <a href="">
                     <span className='font-semibold text-font_logo text-main_color font-Rubik'>Mollet</span>
                </a>
            </div>
        </div>
        <div className='flex justify-end w-1/2 cursor-pointer'>
            <button className='flex items-center gap-2 p-2 font-semibold rounded-lg text-font_button text-textWhite bg-main_color font-Rubik hover:bg-buttonNavbarHover'>
                <Play size= "20px" />
                {stateText}
            </button>
        </div>
    </nav>
   </header>
  )
}

export default Navbar