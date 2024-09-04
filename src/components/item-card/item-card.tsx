import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";

const ItemCard = ({
	title,
	img,
	date,
}: {
	title: string;
	img: string;
	date?: string;
}) => {
	return (
		<Card
			shadow="sm"
			isPressable
			// onPress={() => console.log("item pressed")}
			className="px-2 py-3 w-[324px] max-sm:w-[162px]"
		>
			<CardBody className="overflow-hidden p-0 h-[182px] max-sm:h-[91px]">
				<Image
					shadow="sm"
					radius="lg"
					width="100%"
					alt={title}
					className="object-cover object-top h-auto hover:animate-scroll"
					src={`/${img}`}
				/>
			</CardBody>
			<CardFooter className="text-small justify-between">
				<span className="font-montserrat text-lg md:text-xl font-[600]">{title}</span>
				{date && <p className="text-default-500">{date}</p>}
			</CardFooter>
		</Card>
	);
};

export default ItemCard;
