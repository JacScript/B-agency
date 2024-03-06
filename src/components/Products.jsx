import React from "react";
import aboutImg from "../assets/about1.png";

const Products = () => {
  return (
    <div className="w-full lg:h-full lg:max-w-screen-2xl" id="product">
         <div className="lg:w-4/5 lg:mx-auto lg:h-full mt-24">
          <div className="mb-4">
            <h1 className="text-center text-neutralDGrey text-6xl kode-mono uppercase font-semibold mb-4 ">get stared</h1>
            <p className="px-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, reprehenderit. Quod, magnam! Dolorem expedita iure quo aspernatur itaque deleniti labore ea veritatis autem vel aut quidem ad numquam, animi magnam nam repellat nihil sequi explicabo quibusdam quod dolor eligendi optio reiciendis. Dolorem corporis tenetur temporibus minima fugit quo sint distinctio.
            </p>
          </div>

          <div className="w-full lg:h-96 lg:flex mb-24 lg:mb-0">
              <div className="lg:w-1/2 h-full px-12 lg:p-12">
                  <div>
                    <h1 className="text-2xl font-semibold text-brandPrimary">Post offer as a seller</h1>
                    <p className="my-4">As a seller, post offers for the agricultural crop you are looking to sell, and gain immediate access to credit-verified buyers. Or simply react to an existing buyer’s bid and start your transaction.</p>
                  </div>
                  <div className="flex justify-between my-12">
                    <button className="btn-primary px-4">Register as a seller</button>
                    <button className="btn-primary px-7">Selling offer video</button>
                  </div>
              </div> 
              <div className="lg:w-1/2 lg:h-96 px-12 lg:p-12">
              <div>
                    <h1 className="text-2xl font-semibold text-brandPrimary">Post bid as a buyer</h1>
                    <p className="my-4">As a seller, post offers for the agricultural crop you are looking to sell, and gain immediate access to credit-verified buyers. Or simply react to an existing buyer’s bid and start your transaction.</p>
                  </div>
                  <div className="flex justify-between my-12">
                    <button className="btn-primary px-4">Register as a buyerr</button>
                    <button className="btn-primary px-7">Buying offer video</button>
                  </div>
              </div>
          </div>
         </div>
    </div>
  );
};

export default Products;
