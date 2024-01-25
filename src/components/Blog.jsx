import React from 'react'

const Blog = () => {
    const blogs = [
        {id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image:"/src/assets/blog1.jpg"},{id: 2, title: "Creating Streamlined Safeguarding Processes with OneRen", image:"/src/assets/blog2.jpg"},{id: 3, title: "Creating Streamlined Safeguarding Processes with OneRen", image:"/src/assets/blog3.jpg"}
    ]

  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
        <div className='text-center md:w-1/2 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'> Caring is the new marketing</h2>
            <p className='md:w-3/4 mx-auto text-sm text-neutralGrey mb-8'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
        </div>

        {/* all blogs */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
            {
                blogs.map( blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                    <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300'/>
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                         <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3> 
                  
                  <div flex items-center justify-center gap-8>
                    <a
                      href="/"
                      className="font-bold text-brandPrimary hover:text-neutral-700"
                    >
                      Readmore
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        viewBox="0 0 6 4"
                        fill="none"
                        className="inline-block ml-2"
                      >
                        <path
                          d="M4.02324 3.24222L5.12263 2.14283C5.25301 2.01245 5.25301 1.80106 5.12263 1.67068L4.02324 0.571289M5.02484 1.90676L0.350708 1.90676"
                          stroke="#4CAF4F"
                        />
                      </svg>
                    </a>
                </div>
                        </div> 
                    </div>
                    )
            }
        </div>
    </div>
  )
}

export default Blog