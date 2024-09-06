"use client";
import { motion } from "framer-motion";
import GradientBackground from "@/assets/images/purple-gradient.png";
import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";

const Chat = () => {
	return (
		<div
			className="w-full padding md:px-44 flex flex-col justify-center items-start gap-8 h-[calc(100vh-100px)] chat-background"
			style={{
				background: `url(${GradientBackground.src})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}
		>
			<motion.div
				initial={{ opacity: 0, x: -10 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6 }}
				className="font-jura text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-[600] tracking-wide leading-snug"
			>
				Got a project? Lets <br />
				have a chat.
			</motion.div>
			<motion.div
			initial={{ opacity: 0, x: 10 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6 }}>
				<Button
					radius="full"
					size="lg"
					variant="ghost"
					className="border-1 border-black hover:!bg-transparent hover:scale-105"
					endContent={ICONS.arrow_right}
				>
					<div className=" py-4">
						<span className="text-2xl">Lets have a Chat</span>
					</div>
				</Button>
			</motion.div>
		</div>
	);
};

export default Chat;
