import React from 'react'
import { MessageSquare } from 'lucide-react';
const reviews = [
    {label1:"Kossi Abalo",label2:"Business Owner",label3: "Mollet m'aide à suivre toutes mes transactions MTN Money. C'est vraiment pratique pour mon business!"},
    {label1: "Afiwa Mensah",label2:"Étudiante",label3:"L'accès hors ligne est un vrai plus. Je peux vérifier mes transactions même sans internet."},
    {label1: "Emmanuel Koffi",label2: "Commerçant",label3: "Les résumés hebdomadaires m'aident à mieux gérer mon argent. Application très utile!"}
]

function User() {
  return (
      <section className='flex flex-col gap-20 px-10 py-20 bg-textWhite'>
        <div className='flex items-center justify-center'>
                  <MessageSquare color='yellow' size="30px"/>
                 <h2 className='m-4 text-4xl font-bold text-center font-Rubik'>
                 Comment ca marche ?
                 </h2>
        </div>
        <div className='grid gap-4 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr)] lg:grid-cols-3'>
          {reviews.map((review)=>
            (
                <div className='flex flex-col p-6 transition duration-300 rounded-lg section_cardshadowB hover:section_cardshadowBhover'>
                  <div className='flex flex-col m-4'>
                    <span className='font-bold font-Rubik'>{review.label1}</span>
                    <span className='text-gray-500'>{review.label2}</span>
                  </div>  
                  <div className='ml-4'>
                     <span className='font-semibold text-gray-500'>{review.label3}</span>
                  </div>
                </div>
            ))}
        </div>
    </section>
  );
}

export default User;