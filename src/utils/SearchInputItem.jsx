import React, { useContext, useEffect, useState } from "react";
import { DropLocationIcon, PickUpLocationIcon } from "./Icons";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { SourceContext } from "../Context/SourceContext";
import { DestinationContext } from "../Context/DestinationContext";

const SearchInputItem = ({ type }) => {
	const [value, setValue] = useState(null);
	const [placeholder, setPlaceholder] = useState(null);
	const {source, setSource} = useContext(SourceContext);
	const {destination, setDestination} = useContext(DestinationContext);

	useEffect(() => {
		type === "pickup"
			? setPlaceholder("Pickup location")
			: setPlaceholder("Dropoff location");
	}, []);

	const getLatAndLng = (place, type) => {
		const placeId = place?.value.place_id;
		const service = new google.maps.places.PlacesService(
			document.createElement("div")
		);
		service.getDetails({ placeId }, (place, status) => {
			if (status === "OK" && place.geometry && place.geometry.location) {
				console.log(place.geometry.location.lat());
				if(type === "pickup") {
					setSource({
						lat: place.geometry.location.lat(),
						lng: place.geometry.location.lng(),
						name: place.formatted_address,
						label: place.name,
					})
				}else{
					setDestination({
						lat: place.geometry.location.lat(),
						lng: place.geometry.location.lng(),
						name: place.formatted_address,
						label: place.name,
					})
				}
				console.log(source, destination);
			}
		});
		console.log(place, type);
	};

	return (
		<div className="bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4">
			{type === "pickup" ? <PickUpLocationIcon /> : <DropLocationIcon />}
			<GooglePlacesAutocomplete
				apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
				selectProps={{
					value,
					onChange: (place) => {
						getLatAndLng(place, type);
						setValue(place);
					},
					placeholder: placeholder,
					isClearable: true,
					className: "w-full cursor-pointer",
					components: { DropdownIndicator: false },
					styles: {
						control: (provided) => ({
							...provided,
							backgroundColor: "transparent",
							border: "none",
							outline: "none",
						}),
					},
				}}
			/>
		</div>
	);
};

export default SearchInputItem;
