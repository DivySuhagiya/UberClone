import React, { useContext, useState } from "react";
import { NgoAccContext } from "../Context/NgoAccContext";
import { SourceContext } from "../Context/SourceContext";
import { DestinationContext } from "../Context/DestinationContext";

const NgoAccountCard = () => {
	const { source } = useContext(SourceContext);
	const { destination } = useContext(DestinationContext);

	// Dummy user request for NGOs
	const dummyUserRequest = {
		name: "Uber Go",
		pickup: source?.label,
		drop: destination?.label,
	};
	const [rideRequested, setRideRequested] = useState(false);
	return (
		<div>
			{" "}
			<div className="mb-6">
				<h2 className="text-[22px] font-bold mb-4">Your Ride Request</h2>
				<div className="border p-4 rounded-xl shadow-md bg-white w-[430px]">
					<p>
						<strong>Ride Type:</strong> {dummyUserRequest.name}
					</p>
					<p>
						<strong>Pickup:</strong> {dummyUserRequest.pickup}
					</p>
					<p>
						<strong>Drop:</strong> {dummyUserRequest.drop}
					</p>

					{!rideRequested && (
						<button
							className="mt-4 px-4 py-2 bg-black text-white rounded-lg"
							onClick={() => {
								setRideRequested("loading");

								setTimeout(() => {
									setRideRequested("accepted");
									setTimeout(() => {
										setRideRequested("verified");
									}, 5000);
								}, 3000);
							}}
						>
							Request Ride
						</button>
					)}

					{rideRequested === "loading" && (
						<p className="mt-4 text-blue-600 font-semibold">
							⏳ Sending your ride request to a nearby donor...
						</p>
					)}

					{rideRequested === "accepted" && (
						<div className="mt-4">
							<p className="text-green-600 font-semibold mb-2">
								✅ A kind donor has accepted your ride request!
							</p>
							<p>
								<strong>
									Please share the following OTP with the donor to begin the
									ride:
								</strong>
							</p>
							<div className="mt-2 p-2 bg-gray-100 rounded-md text-center text-lg font-bold tracking-widest">
								1234
							</div>
						</div>
					)}

					{rideRequested === "verified" && (
						<div className="mt-4 text-green-700 font-semibold">
							🎉 Your ride has been verified successfully! We appreciate your
							continued service. 💚
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default NgoAccountCard;
