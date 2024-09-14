import {
	Chat,
	Discover,
	Hero,
	Locations,
	Map,
	Mission,
	Project,
	Services,
	Values,
	Vision,
} from "@/sections";
import Image from "next/image";

export default function Home() {
	return (
		<main className="relative">
			<Hero />
			<Mission />
			<Project />
			<Services />
			<Locations />
			<Discover />
			<Vision />
			<Values />
			<Chat />
		</main>
	);
}
