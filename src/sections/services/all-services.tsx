import { ItemCard } from "@/components";
import { services } from "@/data";
import React from "react";

const AllServices = () => {
	return (
		<div className="px-2 md:px-6 lg:px-12 py-16 md:py-32 w-full flex items-center justify-center">
			<div className="w-[100%] md:w-[70vw] flex justify-center items-center gap-5 lg:gap-10 flex-wrap">
        {
          services.map((service, index) => (
            <ItemCard key={index} title={service.name} img={service.img} />
          ))
        }
			</div>
		</div>
	);
};

export default AllServices;
