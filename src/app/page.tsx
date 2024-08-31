import Header from "@/components/header/header";
import Image from "next/image";

export default function Home() {
	return (
		<main className="relative">
			<Header />
			<section className="xl:padding-l wide:padding-r padding-b">
				<div className="text-2xl w-72 px-4 py-2 mt-10 m-auto">
					<Image
						src="/under-construction.avif"
						alt="Under Construction..."
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: "100%", height: "auto"}}
					/>
				</div>
			</section>
		</main>
	);
}
