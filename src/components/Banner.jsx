import React from "react";



const Banner = () => {
  return (
    <div
      className="bg-banner-pattern bg-cover max-w-screen-2xl h-full"
      id="home"
    >
      <div className=" relative px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-full flex bg-gradient-to-br from-green-950 to-tranparent ">
        <div className="w-4/5  h-4/5 absolute inset-0  mx-auto my-auto flex ">

                <div className="  w-2/3 h-full mt-5 mr-6">

                    <h2 className="text-2xl text-white font-semibold mt-12 mb-20 md:w-4/5">
                    A B2B DIGITAL MARKETPLACE WHERE FAIR FOOD TRADE IS MADE EASY, FAST AND TRANSPARENT!
                    </h2>
                    <p className="md:w-11/12 text-5xl text-white font-semibold mb-20 kode-mono">
                    Purchase pure goods from us.
                    </p>
                      <div>
                    <button className="btn-primary">Learn More</button>
                      </div>

                  </div>

          <div className=" w-1/3 h-full mt-5 ">
             <div className=" relative mt-12">
               <h2 className="text-xl font-semibold text-white uppercase text-center mb-12">Selet a product to Buy/Sell</h2>


               <div className="mt-12 w-full  h-60 absolute inset-0  mx-auto my-auto grid grid-cols-3 gap-4">
               <div className="w-20 h-32">
                   <a className="cursor-pointer"><img className="w-20 rounded-full bg-cover h-20" src="/src/assets/corn.jpg" alt="" />
                   <p className="text-center mt-2 text-white font-bold uppercase text-sm">Maize</p></a>
               </div>

               <div className="w-20 h-32">
                   <a className="cursor-pointer"><img className="w-20 rounded-full bg-cover h-20" src="/src/assets/corn.jpg" alt="" />
                   <p className="text-center mt-2 text-white font-bold uppercase text-sm">Maize</p></a>
               </div>

               <div className="w-20 h-32">
                   <a className="cursor-pointer"><img className="w-20 rounded-full bg-cover h-20" src="/src/assets/corn.jpg" alt="" />
                   <p className="text-center mt-2 text-white font-bold uppercase text-sm">Maize</p></a>
               </div>

               <div className="w-20 h-32 col-start-2">
                   <a className="cursor-pointer"><img className="w-20 rounded-full bg-cover h-20" src="/src/assets/corn.jpg" alt="" />
                   <p className="text-center mt-2 text-white font-bold uppercase text-sm">Maize</p></a>
               </div>
               </div>
               <div></div>


             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
