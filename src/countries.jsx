import React from 'react'
import { CircleCheckBig } from 'lucide-react';
import { Clock } from 'lucide-react';

const countries = [
    {label : "🇧🇯 Benin",iconA : <CircleCheckBig size="20px" color='green'/>,iconB : <Clock  size="20px"/>, operatorA: "MTN Benin",operatorB:"Moov Benin",operatorC : "Celtiis Benin"},
   {label : "🇹🇬 Togo",iconA : <CircleCheckBig  size="20px" color='green'/>, operatorA: "Moov Togo",operatorB:"Mixx by Yass"},
    {label : "🇨🇮 Cote d'ivoire",iconA : <CircleCheckBig  size="20px" color='green'/>,iconB : <Clock  size="20px"/>, operatorA: "Wave",operatorB:"Orange Money",operatorC : "Moov CI"},
]

function Countries() {
    
  return (
    
    <section className='flex flex-col gap-20 px-10 py-20'>
        <div>
            <h2 className='m-4 text-4xl font-bold text-center font-Rubik'>Pays disponibles</h2>
            <p className='font-sans text-xl font-normal text-center text-gray-500'>Opérateurs supportés pour chaque pays</p>
        </div>
        <div className='grid gap-4 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr)] lg:grid-cols-3'>
           {
            countries.map((country)=>
            (
                <div className='flex flex-col gap-4 p-6 border-2 rounded-lg border-[navbarBorder] transition duration-300 hover:section_cardshadow hover:border-white '>
                    <span className='text-2xl font-bold font-Rubik'>
                        {country.label}
                    </span>
                    <div className='flex flex-col gap-4'>
                        <div className='flex justify-between'>
                            <span>
                                {country.operatorA}
                            </span>
                            <span>
                                {country.iconA}
                            </span>
                        </div>
                        <div className='flex justify-between'>
                             <span>
                                {country.operatorB}
                            </span>
                            <span>
                                {country.iconA}
                            </span>
                        </div>
                        <div className='flex justify-between'>
                             <span>
                                {country.operatorC}
                            </span>
                            <span>
                                {country.iconB}
                            </span>
                        </div>
                    </div>
                </div>
            ))
           }
        </div>
    </section>
  )
}

export default Countries