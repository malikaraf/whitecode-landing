import AddressCard from '@/components/address-card/address-card';
import React from 'react'

const Addresses = () => {
  return (
    <div>
      <div className="bg-black w-full">
      <div className="mx-auto  max-w-[90%] w-auto overflow-hidden ">
      <p className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] mt-[100px] sm:mt-[150px] md:mt-[180px] lg:mt-[200px] font-montserrat text-white text-center whitespace-nowrap">
  Where to find Us
</p>
  </div>
  <div className="flex justify-center mt-[250px] pb-[450px]">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  
  

    <AddressCard/>  
    <AddressCard/>
    <AddressCard/>

</div>

  </div>
        </div>   
    </div>
  );
};

export default Addresses