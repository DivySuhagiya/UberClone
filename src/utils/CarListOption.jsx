import React, { useState, useContext } from "react";
import { CarListData } from "./CarList";
import CarListCard from "./CarListCard";
import { NgoAccContext } from "../Context/NgoAccContext";
import { SourceContext } from "../Context/SourceContext";
import { DestinationContext } from "../Context/DestinationContext";
import NgoAccountCard from "./NgoAccountCard";
import DonateRideCard from "./DonateRideCard";

const CarListOption = () => {
	const { isNgoAcc } = useContext(NgoAccContext);
	const [activeIndex, setActiveIndex] = useState(0);
	const [selectedCar, setSelectedCar] = useState(CarListData[0]);
	const [quietRide, setQuietRide] = useState(false);
	const [donateRide, setDonateRide] = useState(false);

	const handleBookRide = () => {
		alert(
			`You selected: ${selectedCar.name}\nQuiet Ride: ${
				quietRide ? "Yes" : "No"
			}\nDonate Ride: ${donateRide ? "Yes" : "No"}`
		);
	};

	return (
		<div className="p-4 overflow-y-auto max-h-[600px] scroll-smooth scroll">
			{isNgoAcc && <NgoAccountCard />}

			<h2 className="text-[22px] font-bold">Choose a ride</h2>

			<div className="w-[430px] mt-4">
				<div className="flex items-center gap-2 mb-2">
					<input
						type="checkbox"
						id="quiet-ride"
						checked={quietRide}
						onChange={(e) => setQuietRide(e.target.checked)}
						className="cursor-pointer"
					/>
					<label htmlFor="quiet-ride" className="text-sm">
						Prefer a Quiet Ride
					</label>
				</div>

				<div className="flex flex-col gap-2 mb-2">
					<div className="flex items-center gap-2">
						<input
							type="checkbox"
							id="donate-ride"
							checked={donateRide}
							onChange={(e) => setDonateRide(e.target.checked)}
							className="cursor-pointer"
						/>
						<label htmlFor="donate-ride" className="text-sm">
							Donate ride to NGO if along the route
						</label>
					</div>

					{donateRide && <DonateRideCard />}
				</div>
			</div>

			{CarListData.map((data, index) => (
				<div
					className={`cursor-pointer px-2 w-[430px] h-[150px] ${
						activeIndex === index
							? "border-[3px] border-[#242424] rounded-2xl"
							: ""
					}`}
					key={index}
					onClick={() => {
						setActiveIndex(index);
						setSelectedCar(data);
					}}
				>
					<CarListCard car={data} />
				</div>
			))}

			<div className="flex justify-between items-center fixed bottom-5 bg-white p-3 shadow-xl w-[30%] rounded-lg">
				<h2>Make Payment For</h2>
				<button
					className="p-3 bg-black rounded-lg text-white text-center w-[60%] cursor-pointer"
					onClick={handleBookRide}
				>
					Request {selectedCar.name}
				</button>
			</div>
		</div>
	);
};

export default CarListOption;
