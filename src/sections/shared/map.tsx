"use client";
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import WorldMap from "@/assets/maps/world-110m.json";

const Map = () => {
	return (
		<div>
			<ComposableMap>
				<Geographies geography={WorldMap}>
					{({ geographies }: { geographies: any }) =>
						geographies.map((geo: any) => (
							<Geography key={geo.rsmKey} geography={geo} />
						))
					}
				</Geographies>
			</ComposableMap>
		</div>
	);
};

export default Map;
