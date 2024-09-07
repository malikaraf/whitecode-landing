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
			className="px-2 py-3 w-[20rem] max-md:w-[15rem] max-sm:w-[10rem] gap-2"
		>
			<CardBody className="overflow-hidden p-0 aspect-[16/9]">
				<Image
					shadow="sm"
					radius="lg"
					width="100%"
					alt={title}
					className="object-cover object-top h-full hover:animate-scroll"
					src={`/${img}`}
				/>
			</CardBody>
			<CardFooter className="text-small justify-between items-start flex-col gap-2">
				<span className="font-montserrat text-sm md:text-xl font-[500] text-start h-[3rem] sm:h-[2.5rem]">{title}</span>
				{date && <p className="text-default-500">{date}</p>}
			</CardFooter>
		</Card>
	);
};

export default ItemCard;
