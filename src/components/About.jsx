import React from 'react';


const About = () => {
  return (
    <div className="max-w-screen-2xl mx-auto lg:h-full mt-24 " id="about">
      <div className='w-full lg:w-4/5 lg:mx-auto lg:h-full lg:flex'>
           <div className='w-full lg:mx-0 lg:w-1/2 lg:h-full'>
            <div className='w-full'>
              <h1 className='kode-mono  mt-12 uppercase text-center lg:text-left text-4xl font-semibold w-4/5 mx-auto'><span className='text-brandPrimary'>How</span> it works</h1>
              <h2 className='text-2xl uppercase font-semibold mt-2 w-4/5 mx-auto text-center lg:text-left'>TAKE A LOOK AT OUR <span className='text-brandPrimary'>PLATFORM DEMO</span></h2>
            </div>
               <div className='ml-12 w-4/5 mt-4 '>
                  <ul className='list-decimal text-xl'>
                    <li className='mb-2'> Sign-up to the platform</li>
                    <li className='mb-2'>Create your offer or bid</li>
                    <li className='mb-2'> Set a quantity & price</li>
                    <li className='mb-2'>Provide us with crop characteristics & details</li>
                    <li className='mb-2'>Decide upon your preferred incoterm</li>
                    <li className='mb-2'>Decide upon logistic and/or crop quality check services</li>
                    <li className='mb-2'>Post your seller offer or buyer bid</li>
                    <li className='mb-2'>Stay updated by email or notification centre</li>
                  </ul>
               </div>
           </div>
           <div className='mx-6 lg:mx-0 h-96 my-auto lg:w-1/2 mt-12 bg-yellow-300'></div>
      </div>
            
     </div>
    
  )
}

export default About