import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";


const AddressCard = () => {
  return (
    <Card>
        
         <div className="bg-gray-200 h-[300px] p-6 rounded-lg shadow-lg w-[300px]">
    <p className="text-black text-xl font-bold font-montserrat">WhiteCode</p>
    <p className="text-black text-lg font-semibold font-montserrat">(GLOBAL HQ)</p>
    <p className="text-black text-lg font-medium mt-2 font-montserrat">WhiteCode</p>
    <p className="text-black text-sm mt-4 font-montserrat">909 Third Avenue</p>
    <p className="text-black text-sm font-montserrat">New York, New York</p>
    <p className="text-black text-sm font-montserrat">10022</p>
    <p className="text-black text-sm font-montserrat">United States</p>
  </div> 
       
    </Card>
  )
}

export default AddressCard;
