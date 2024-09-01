import React from "react";
import Logo from "@/assets/images/Logo_White.png";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="w-full bg-black text-primary px-24 py-12">
			<div className="md:flex md:items-center md:justify-between">
				<div className="flex flex-col items-start justify-start gap-2">
					<div className="flex items-center justify-center">
						<Image
							src={Logo}
							width={0}
							height={0}
							alt="White Code"
							className="w-56"
						/>
					</div>
					<div className="text-accent font-montserrat text-lg">
						We make your dreams realize
					</div>
				</div>

				<div className="flex ">

				</div>
			</div>
		</footer>
	);
};

export default Footer;
