import React from "react";

const Services = () => {
    const services = [
        {id: 1, title: "Membership Organisations", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/icons/membership.png"},{id: 2, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/icons/association.png"},{id: 3, title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/icons/groups.png"}
    ]


  return (
    <div className="md:px-14 px-4 py-15 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralGrey">
          We have been with some Forture 500+ clients
        </p>

        {/* company logo */}

        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src="/src/assets/company1.png" alt=""></img>
          <img src="/src/assets/company2.png" alt=""></img>
          <img src="/src/assets/company3.png" alt=""></img>
          <img src="/src/assets/company4.png" alt=""></img>
          <img src="/src/assets/company5.png" alt=""></img>
          <img src="/src/assets/company6.png" alt=""></img>
          <img src="/src/assets/company7.png" alt=""></img>
        </div>
      </div>
      {/* services card */}

      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralGrey">Who is Nextcent suitable for?</p>
      </div>

      {/* cards */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 md:w-11/12 mx-auto gap-12">
        {
           services.map(services => <div key={services.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full ">
               <div>
                  <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-t1-3xl rounded-br-3xl"><img src={services.image} alt="" className="-ml-4"/></div>
                  <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">{services.title}</h4>
                  <p className="text-sn text-neutralGrey">{services.description}</p>
               </div>
            </div>) 
        }
      </div>
    </div>
  );
};

export default Services;
