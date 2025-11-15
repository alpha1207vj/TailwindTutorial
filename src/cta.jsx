import React from 'react'
import playstore from './assets/play-store-badge-CSnFBUFT.png';
function Cta() {
  return (
    <section className='flex flex-col gap-20 px-10 py-20 m-0 gradient_background'>
        <div>
            <h2 className='m-4 text-4xl font-bold text-center font-Rubik'>Prêt à simplifier vos finances mobile money ?</h2>
            <p className='font-sans text-xl font-normal text-center text-gray-500'>Rejoins plus de 150 utilisateurs qui gèrent déjà mieux leur argent avec Mollet.</p>
        </div>
        <div className='flex items-center justify-center'>
            <img src={playstore} alt="Download the app Mollet" className='w-[280px] cursor-pointer'/>
        </div>
    </section>
  )
}

export default Cta