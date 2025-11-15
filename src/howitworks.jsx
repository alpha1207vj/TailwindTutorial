import React from 'react'

const explanations = [
    {label1: "01",label2: "Accédez à Mollet",label3: "Connectez vous et synchroniser automatiquement les SMS et autres notifications Mobile Money"},
    {label1 : "02",label2: "Visualisez vos dépenses mobile money",label3:"Accédez instantanément à vos données financières organisées"},
    {label1: "03",label2: "Retrouvez vos transactions même hors ligne",label3:"Obtenez un accès simple à vos dépenses mobile money sans connexion internet"},
];
function Howitworks() {
  return (
     <section className='flex flex-col gap-20 px-10 py-20 bg-backgroundPage'>
        <div>
            <h2 className='m-4 text-4xl font-bold text-center font-Rubik'>Comment ca marche ?</h2>
        </div>
        <div className='grid gap-4 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr)] lg:grid-cols-3'>
          {explanations.map((explanation)=>
        (
            <div className='flex flex-col gap-2 rounded-lg'>
                <span className='text-6xl font-semibold text-center font-Rubik text-main_color'>
                    {explanation.label1}
                </span>
                <span className='text-xl font-bold text-center font-Rubik'>
                    {explanation.label2}
                </span>
                <span className='text-center text-gray-500 font-Rubik'>
                    {explanation.label3}
                </span>
            </div>
        ))}
        </div>
    </section>
  )
}

export default Howitworks