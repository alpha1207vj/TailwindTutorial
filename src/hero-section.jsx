import React from 'react';
import playstore from './assets/play-store-badge-CSnFBUFT.png';
import appScreen from "./assets/mollet-app-screenshott-kGWzVjZZ.png"

function Herosection() {
  return (
    <section className='flex flex-col gap-4 px-10 py-4 bg-backgroundPage lg:flex-row '>
        <div className='flex flex-col gap-4'>
            <div className='pt-10 md:pt-[4rem]'>
              <h1 className='font-Rubik text-[50px] font-medium text-[#111827]'>
                <span className='text-main_color'>Mollet</span>
                , retrouvez vos dépenses mobiles money  
                <span className='gradient_textA'> sans </span><span className='gradient_textB'>tracas</span>
              </h1>
            </div>
            <div>
              <p className='text-xl font-normal text-gray-500'>
                • Trackez vos transactions mobile money en temps réel sans connexion internet.
              </p>
              <p className='text-xl font-normal text-gray-500'>
                • Gérez vos finances mobile money et en dehors.
              </p>
            </div>
            <div>
              <img src={playstore} alt="Download on Play Store" className='w-[280px] cursor-pointer' />
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <img src={appScreen} alt="App Screenshot" className=' w-[350px] transition-all duration-500 md:w-[400px]  lg:w-[1300px]'/>
        </div>
    </section>
  )
}

export default Herosection