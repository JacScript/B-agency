import React from "react";

const Services = () => {
  return (
    <div className="max-w-screen-2xl mx-auto h-screen" id="service">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 uppercase">
          Our solution
        </h2>
        <h3 className="text-center">Agri Marketplace is a digital B2B market solution that brings together Farmers and Industrial Buyers.</h3>       
        </div>
        <div className="flex h-4/5 mb-0 bg-red-500 w-4/5 mx-auto">
             <div className="w-1/2 h-full bg-yellow-500 flex flex-col">
                 <div className="h-1/2 bg-blue-500 w-full"></div>
                 <div className="h-1/2 bg-white w-full">
                 <ul class="list-image-[url(checkmark.png)]">
                      <li>Unlimited access to a global market from anywhere, at anytime.</li>
                      <li>A user-friendly platform that generates market opportunity for farmers and industry buyers.</li>
                      <li>Transparent and reliable market information, deal creation and negotiation</li>
                      <li>Integrated and secure platform payment processes.</li>
                  </ul>
                 </div>
             </div>
             <div className="w-1/2">
                 <div className="h-1/2 bg-white w-full">
                 <p className="align-left mx-10 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus et beatae alias ullam ab, explicabo mollitia provident? Repellat earum, similique eveniet voluptas delectus illum accusantium, provident porro explicabo ad voluptate!</p>
                    <p className="mx-10 font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda optio perferendis repudiandae, nisi id in quae sed debitis temporibus quasi alias blanditiis nesciunt quod error distinctio aliquid cumque nobis omnis.</p>
                     <div className="flex space-x-4 font-semibold ml-10 align-center w-full h-24 py-6">
                        <button className="btn-primary">Explore the Marketplace</button>
                        <button className="btn-primary">Learn More about Us</button>
                     </div>
                 </div>
                  <div className="h-1/2 bg-blue-500 w-full"></div>
             </div>
        </div>
        </div>
  );
};

export default Services;
