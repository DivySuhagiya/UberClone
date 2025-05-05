import React, { useContext, useEffect } from "react";
import SearchInputItem from "./SearchInputItem";
import { DestinationContext } from "../Context/DestinationContext";
import { SourceContext } from "../Context/SourceContext";
import { SearchContext } from "../Context/SearchContext";
import { DistanceContext } from "../Context/DistanceContext";

const SearchSection = () => {
	const { source } = useContext(SourceContext);
	const { destination } = useContext(DestinationContext);
	const { setSearch } = useContext(SearchContext);
	const { setDistanceAll } = useContext(DistanceContext);

	const calculateDistance = () => {
		const dist = google.maps.geometry.spherical.computeDistanceBetween(
			{
				lat: source.lat,
				lng: source.lng,
			},
			{
				lat: destination.lat,
				lng: destination.lng,
			}
		);

		console.log(dist * 0.001);
		setDistanceAll(dist * 0.001);
	};

	useEffect(() => {
		if (source || destination) {
			console.log(source, destination);
		}
	}, [source, destination]);

	return (
		<div className="p-2 md:p-6 border-[2px] rounded-xl border-[#f3f3f3]">
			<p className="text-[20px] font-bold">Get a ride</p>
			<SearchInputItem type="pickup" />
			<SearchInputItem type="dropOff" />

			<button
				className="p-3 bg-black w-full mt-5 text-white rounded-lg cursor-pointer"
				onClick={() => {
					calculateDistance();
					setSearch(true);
				}}
			>
				Search
			</button>
		</div>
	);
};

export default SearchSection;
