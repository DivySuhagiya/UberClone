import React, { useContext } from "react";
import SearchSection from "../utils/SearchSection";
import GoogleMapSection from "../utils/GoogleMapSection";
import CarListOption from "../utils/CarListOption";
import { SearchContext } from "../Context/SearchContext";

const Body = () => {
	const { search } = useContext(SearchContext);
	return (
		<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5 h-screen">
			<div>
				<SearchSection />
			</div>
			<div className={`${search ? "block" : "hidden"}`}>
				<CarListOption />
			</div>
			<div className={`${search ? "col-span-1" : "col-span-2"}`}>
				<GoogleMapSection />
			</div>
		</div>
	);
};

export default Body;
