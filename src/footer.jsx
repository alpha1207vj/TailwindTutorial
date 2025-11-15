import React from 'react'
import logo from './assets/download.svg';
import { Dice1, Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const footers = [
    {label1 : "Produit",label2: "Fonctionnalités",label3: "Comment Ça Marche",label4:"FAQ"},
    {label1: "Legal",label2:"Politique de Confidentialité",label3: "Conditions d'Utilisation" },
    {label1: "Connexion"}
];

function Footer() {
  return (
    <footer className='flex flex-col gap-2 px-10 py-10'>
        <div className='flex flex-col gap-6 pb-16 lg:gap-28 md:gap-26 md:flex-row'>
         <div className='flex-col'>
            <div className='flex gap-2'>
                <img src= {logo} alt="Mollet Logo" className='w-8 h-8'/>
                <a href="">
                   <span className='font-semibold text-font_logo text-main_color font-Rubik'>Mollet</span>
                </a>
            </div>
            <span className='inline-block mt-4 break-words w-70 font-Rubik'>
                Votre compagnon de confiance pour la gestion de vos finances mobile money.
            </span>
         </div>
         <div className='flex flex-col gap-4 lg:gap-24 md:flex-row'>
            {footers.map((info)=>
            (
                <div className='flex flex-col'>
                   <div  className='mb-4'>
                     <span className='font-bold font-Rubik'>{info.label1}</span> 
                   </div>
                   <div>
                    <span className='block my-2'>{info.label2}</span>
                    <span className='block my-2'>{info.label3}</span>
                    <span className='block my-2'>{info.label4}</span>
                   </div> 
                </div>
            ))}
         </div>
        </div>
        <div>
            <hr/>
        </div>
        <div className='flex items-end justify-center'>
            <span className='text-center'>
                &copy; 2025 Mollet. Tous droits réservés.
            </span>
        </div>
    </footer>
  );
}

export default Footer