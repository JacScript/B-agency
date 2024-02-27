import React from "react";

import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';




const Banner = () => {
  return (
    <div
      className="bg-banner-pattern bg-cover max-w-screen-2xl h-full"
      id="home"
    >
      <div className=" relative px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-full flex bg-gradient-to-br from-green-950 to-tranparent">
        <div className="w-4/5  h-4/5 absolute inset-0  mx-auto my-auto flex">

                <div className="w-2/3 h-full mt-10 mr-6">

                    <h2 className="text-2xl text-white font-semibold  mb-20 md:w-4/5">
                    A B2B DIGITAL MARKETPLACE WHERE FAIR FOOD TRADE IS MADE EASY, FAST AND TRANSPARENT!
                    </h2>
                    <p className="md:w-11/12 text-5xl text-white font-semibold mb-20 kode-mono">
                    Purchase pure goods from us.
                    </p>
                      <div className="flex w-3/4">
                    <div><button className="btn-primary mr-12">Learn More</button></div>
                     <div className="flex space-x-6 mx-12 justify-between b align-center"> 
                       
                       <BsFacebook className="h-8 w-8 rounded-full my-auto p-1 cursor-pointer"/>
                       <BsInstagram className="h-8 w-8 rounded-full my-auto p-1 cursor-pointer"/>
                       <BsTwitter className="h-8 w-8 rounded-full my-auto p-1 cursor-pointer"/>
            
                      </div>
                      </div>

                  </div>

          <div className=" w-1/3 mt-10 h-full">
             <div className=" relative flex flex-col w-full h-full">
              <div className="mb-20 ">
               <h2 className="text-xl font-semibold text-white uppercase text-center">Selet a product to Buy/Sell</h2>
               </div>


               <div className="mt-12 full h-64 absolute inset-0 px-4 gap-6 grid grid-cols-3 ">
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


               <div className="h-24 w-full mt-60 flex flex-col ">
                 <p className="text-center my-4 text-white font-semibold text-sm">CAN'T FIND THE PRODUCT YOU ARE LOOKING FOR?</p>
                 <button className="btn-primary self-center ">Talk to us</button>

               </div>

             </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
