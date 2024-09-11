"use client";
import { motion } from "framer-motion";

const NewsHero = () => {
	return (
		<div className="h-[45vh] md:h-[55vh] padding-y px-8 md:px-24 lg:px-28 xl:px-36 flex flex-col items-center justify-center gap-10">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="w-[90%] xl:w-[70%] text-center"
			>
				<span className="font-jura font-[600] text-3xl md:text-5xl lg:text-6xl tracking-widest">
					Make your dreams realize
				</span>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -10 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, delay: 0.3 }}
				className="w-[100%] md:w-[50%] lg:w-[45%] text-center"
			>
				<span className="font-montserrat text-base lg:text-xl xl:text-2xl ">
					Check out some of our news
				</span>
			</motion.div>
		</div>
	);
};

export default NewsHero;
