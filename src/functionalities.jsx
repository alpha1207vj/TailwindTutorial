import React from 'react'
import { RefreshCcwDot } from 'lucide-react';
import { SwatchBook } from 'lucide-react';
import { Wifi } from 'lucide-react';
import { Search } from 'lucide-react';
import { Bubbles } from 'lucide-react';
import { WalletMinimal } from 'lucide-react';

const functionalities_items = [
   {id : 1,icon :<RefreshCcwDot color='#FF735E'/>,label: "Un résumé hebdomadaire de vos transactions mobile money et sans connexion internet"},
   {id: 2, icon : <SwatchBook color='#FF735E'/>, label: "Un rapport mensuel de vos transactions mobile money avec les frais associés"},
   {id:3,icon: <Search color='#FF735E'/>,label: "Des détails sur chacune de vos transactions (opérateur, entrée ou dépense, destinataire, montant, frais, etc…)"},
   {id:4,icon: <Wifi color='#FF735E'/>,label:"L'ajout manuel de transactions (entrées comme dépenses)"},
   {id:5 ,icon: <Bubbles color='#FF735E'/>,label:"L'accès à vos services mobile money (dépôt, retrait, forfait appel et internet, recharge de compteur électrique, etc…)"},
   {id: 6, icon: <WalletMinimal color='#FF735E'/>,label: "La gestion et le suivi efficace de vos dépenses (Bientôt disponible)" }
]

function Functionalities() {
  return (
    <>
      <section className='flex flex-col gap-20 px-10 py-20 bg-secondaryBackground'>
        <div>
          <h2 className='text-4xl font-bold text-center font-Rubik'>
            Mollet c'est:
          </h2>
        </div>
        <div className='grid gap-6 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] lg:grid-cols-3'>
          {functionalities_items.map((item)=>
          (
            <div key={item.id} className='flex flex-col gap-4 p-6 transition duration-300 rounded-lg bg-white-1000 section_cardshadow hover:section_cardshadowhover'>
            
             <span className='rounded-full bg-[#FFFBE5] p-2 w-10'>
               {item.icon}
             </span>
             <span className='text-xl font-normal font-Rubik'>
               {item.label}
             </span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Functionalities