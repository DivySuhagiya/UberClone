import React, { useContext, useEffect, useState } from "react";
import {
	DirectionsRenderer,
	GoogleMap,
	MarkerF,
	OverlayView,
	OverlayViewF,
	useJsApiLoader,
} from "@react-google-maps/api";
import { SourceContext } from "../Context/SourceContext";
import { DestinationContext } from "../Context/DestinationContext";
import { PickUpLocationIcon } from "./Icons";

const GoogleMapSection = () => {
	const { source } = useContext(SourceContext);
	const { destination } = useContext(DestinationContext);

	const containerStyle = {
		width: "100%",
		height: window.innerHeight * 0.8,
	};

	const [center, setCenter] = useState({
		lat: -3.745,
		lng: -38.523,
	});
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
	});

	const [map, setMap] = useState(null);
	const [directions, setDirections] = useState([]);

	useEffect(() => {
		if (source?.length != [] && map) {
			setCenter({
				lat: source.lat,
				lng: source.lng,
			});
		}
		if (destination?.length != [] && source?.length != []) {
			directionRoute();
		}
	}, [source]);

	useEffect(() => {
		if (destination?.length != [] && map) {
			setCenter({
				lat: destination?.lat,
				lng: destination?.lng,
			});
		}

		if (destination?.length != [] && source?.length != []) {
			directionRoute();
		}
	}, [destination]);

	const directionRoute = () => {
		const DirectionsService = new window.google.maps.DirectionsService();

		DirectionsService.route(
			{
				origin: { lat: source?.lat, lng: source?.lng },
				destination: { lat: destination?.lat, lng: destination?.lng },
				travelMode: google.maps.TravelMode.DRIVING,
			},
			(result, status) => {
				if (status === google.maps.DirectionsStatus.OK) {
					{
						setDirections(result);
					}
				} else {
					console.error(`error fetching directions ${result}`);
				}
			}
		);
	};

	const onLoad = React.useCallback(function callback(map) {
		// This is just an example of getting and using the map instance!!! don't just blindly copy!
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);

		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={10}
			onLoad={onLoad}
			onUnmount={onUnmount}
			options={{ mapId: "5a786fed7a5cd1ab" }}
		>
			{source?.length != [] ? (
				<MarkerF position={{ lat: source?.lat, lng: source?.lng }}>
					<OverlayViewF
						position={{ lat: source?.lat, lng: source?.lng }}
						mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
					>
						<div className="p-2 bg-white font-bold inline-block">
							<p className="text-black text-[16px]">{source?.label}</p>
						</div>
					</OverlayViewF>
				</MarkerF>
			) : null}
			{destination?.length != [] ? (
				<MarkerF position={{ lat: destination?.lat, lng: destination?.lng }}>
					<OverlayViewF
						position={{ lat: destination?.lat, lng: destination?.lng }}
						mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
					>
						<div className="p-2 bg-white font-bold inline-block">
							<p className="text-black text-[16px]">{destination?.label}</p>
						</div>
					</OverlayViewF>
				</MarkerF>
			) : null}
			{/* Child components, such as markers, info windows, etc. */}
			<></>
			<DirectionsRenderer
				directions={directions}
				options={{
					polylineOptions: {
						strokeColor: "black",
						strokeWeight: 4,
					},
					suppressMarkers: true,
				}}
			/>
		</GoogleMap>
	) : (
		<></>
	);
};

export default GoogleMapSection;
