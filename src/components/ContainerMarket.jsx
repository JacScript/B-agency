import React from 'react'

const ContainerMarket = () => {
  return (
    <div className='max-w-screen-2xl h-screen md:bg-banner-pattern md:bg-cover'>
      <div className=" md:relative px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-full md:bg-gradient-to-br from-green-950 to-tranparent bg-none">
         <div className='mt-20 text-center'>
            <h1 className='text-white text-4xl uppercase font-semibold pt-12'>Select a product to Buy/Sell</h1>
         </div>
        <div className="w-4/5 mx-auto flex justify-around items-center h-48 pt-4 border-b-2 border-brandPrimary">
          <div><button className='btn-primary flex items-center px-12'><img className="mr-2 h-6 w-6 rounded-full" src='/src/assets/corn.jpg' alt='fail'/> Grains</button></div>             
          <div><button className='btn-primary flex items-center px-12'><img className="mr-4 h-6 w-6 rounded-full" src='/src/assets/corn.jpg' alt='fail'/> Grains</button></div>             
          <div><button className='btn-primary flex items-center px-12'><img className="mr-4 h-6 w-6 rounded-full" src='/src/assets/corn.jpg' alt='fail'/> Grains</button></div>                      
          <div><button className='btn-primary flex items-center px-12'><img className="mr-4 h-6 w-6 rounded-full" src='/src/assets/corn.jpg' alt='fail'/> Grains</button></div>                      
          </div>
          <div className='w-4/5 mx-auto px-24 h-96 flex justify-between items-center'>
          <div className="w-40 h-56">
                   <a className="cursor-pointer"><img className="w-40 rounded-full bg-cover h-40" src="/src/assets/corn.jpg" alt="" />
                   <p className="text-center mt-2 md:text-white font-bold uppercase text-lg">Maize</p></a>
               </div>

               <div className="w-40 h-56">
                   <a className="cursor-pointer"><img className="w-40 rounded-full bg-cover h-40" src="/src/assets/corn.jpg" alt="" />
                   <p className="text-center mt-2 md:text-white font-bold uppercase text-lg">Maize</p></a>
               </div>

               <div className="w-40 h-56">
                   <a className="cursor-pointer"><img className="w-40 rounded-full bg-cover h-40" src="/src/assets/corn.jpg" alt="" />
                   <p className="text-center mt-2 md:text-white font-bold uppercase text-lg">Maize</p></a>
               </div>

               <div className="w-40 h-56">
                   <a className="cursor-pointer"><img className="w-40 rounded-full bg-cover h-40" src="/src/assets/corn.jpg" alt="" />
                   <p className="text-center mt-2 md:text-white font-bold uppercase text-lg">Maize</p></a>
               </div>
              

              
          </div>
       </div>
    </div>
  )
}

export default ContainerMarket