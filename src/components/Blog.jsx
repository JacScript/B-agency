import React from 'react'

const Feature = () => {
    const features = [
        {  id: 1,
           title: "Direct transactions between farmers and industry/retail",
           image:"/src/assets/blog1.jpg",
           heading: "transparency"
          },
          {
            id: 2,
            title: "Redistribution of value in food supply chain",
            image:"/src/assets/blog2.jpg",
            heading: "fairtrade"
          },
          {
            id: 3,
            title: "Reduce costs to buyers without losing reliability",
            image:"/src/assets/blog3.jpg",
            heading: "User friendly"
          }
    ]

  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
        <div className='text-center md:w-1/2 mx-auto'>
            <h2 className='text-5xl text-neutralDGrey font-semibold uppercase kode-mono mb-4'> key features</h2>
            <p className='md:w-3/4 mx-auto text-sm text-neutralGrey mb-8'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
        </div>

        {/* all blogs */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-8 items-center justify-between'>
            {
                features.map( feature => <div key={feature.id} className='mx-auto relative mb-12'>
                    <img src={feature.image} alt="" className='hover:scale-95 transition-all duration-300'/>
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                         <h3 className='mb-3 text-neutralGrey font-semibold'>{feature.title}</h3> 
                  
                  <div flex items-center justify-center gap-8>
                    <h1
                      className="font-bold text-brandPrimary uppercase hover:text-neutral-700"
                    >
                      {feature.heading}
                    </h1>
                </div>
                        </div> 
                    </div>
                    )
            }
        </div>
    </div>
  )
          }

export default Feature;