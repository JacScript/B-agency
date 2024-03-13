import React from "react";

import { SiInstagram } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from 'react-icons/bs';




const Banner = () => {
  return (
    <div
      className="md:bg-banner-pattern md:bg-cover max-w-screen-2xl h-full bg-none"
      id="home"
    >
      <div className=" md:relative px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-full flex md:bg-gradient-to-br from-green-950 to-tranparent bg-none">
        <div className="lg:w-4/5 md:h-4/5 md:absolute md:inset-0  lg:mx-auto md:my-auto md:flex sm:max-lg:mx-0 sm:max-lg:w-full ">

                <div className="md:w-2/3 md:h-full md:mt-10 mt-20 mr-6 sm:max-lg:mr-0 sm:max-lg:ml-4">

                    <h2 className="text-2xl md:text-white font-semibold md:text-left md:mb-20 md:w-4/5 font-neutralGrey mb-10 text-center">
                    A B2B DIGITAL MARKETPLACE WHERE FAIR FOOD TRADE IS MADE EASY, FAST AND TRANSPARENT!
                    </h2>
                    <p className="md:w-11/12 md:text-5xl md:text-left md:text-white font-semibold md:mb-20 kode-mono font-neutralGrey text-2xl text-center mt:20 mb-12">
                    Purchase pure goods from us.
                    </p>

                      <div className="md:flex md:w-3/4 mb-12">
                    <div className="flex justify-center mb-12 md:mb-0"><button className="btn-primary ">Learn More</button></div>
                     <div className="flex space-x-6 mx-12 justify-between align-center"> 
                       
                       <FaFacebookF className="h-8 p-1 w-8 rounded-full my-auto cursor-pointer bg-white"/>
                       <SiInstagram className="h-8 w-8 rounded-full my-auto p-1 cursor-pointer bg-white"/>
                       <BsTwitter className="h-8 w-8 rounded-full my-auto p-1 cursor-pointer bg-white"/>
            
                      </div>
                      </div>

                  </div>

          <div className=" md:w-1/3 md:mt-10 md:h-full sm:max-lg:mr-4">
             <div className="relative md:flex md:flex-col md:w-full md:h-full ">
              <div className="md:mb-20 sm:max-lg:mb-12">
               <h2 className="text-xl font-semibold md:text-white uppercase text-center font-neutralGrey sm:max-lg:text-sm">Select a product to Buy/Sell</h2>
               </div>


               <div className="mt-12 w-full h-72 absolute inset-0 px-8 gap-12 grid grid-cols-3 font-neutralGrey sm:max-lg:mt-8 sm:max-lg:grid sm:max-2xl:grid-cols-2">
               <div className="w-20 h-32">
                   <a className="cursor-pointer"><img className="w-20 rounded-full bg-cover h-20 object-cover" src="/src/assets/corn.jpg" alt="" />
                   <p className="text-center mt-2 md:text-white font-bold uppercase text-xs">Grains</p></a>
               </div>

               <div className="w-20 h-32">
                   <a className="cursor-pointer"><img className="w-20 rounded-full bg-cover h-20 object-cover" src="/src/assets/nuts.jpg" alt="" />
                   <p className="text-center mt-2 md:text-white font-bold uppercase text-xs">nuts</p></a>
               </div>

               <div className="w-20 h-32">
                   <a className="cursor-pointer"><img className="w-20 rounded-full bg-cover h-20 object-cover" src="/src/assets/green-coffee.jpg" alt="" />
                   <p className="text-center mt-2 md:text-white font-bold uppercase text-xs">green coffee</p></a>
               </div>

               <div className="w-20 h-32 col-start-2">
                   <a className="cursor-pointer"><img className="w-20 rounded-full bg-cover h-20 object-cover" src="/src/assets/olive-oil.jpg" alt="" />
                   <p className="text-center mt-2 md:text-white font-bold uppercase text-xs">olive oil and others</p></a>
               </div>
               </div>


               <div className="md:h-40 h-32 w-full md:mt-60 mt-80 flex flex-col mb-12">
                 <p className="text-center my-4 md:text-white font-neutralGrey font-semibold text-sm mb-12">CAN'T FIND THE PRODUCT YOU ARE LOOKING FOR?</p>
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
