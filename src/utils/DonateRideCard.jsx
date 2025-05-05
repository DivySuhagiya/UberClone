import React, { useContext, useState } from "react";
import { DestinationContext } from "../Context/DestinationContext";
import { SourceContext } from "../Context/SourceContext";

const DonateRideCard = () => {
	const { source } = useContext(SourceContext);
	const { destination } = useContext(DestinationContext);
	const [ngoAccepted, setNgoAccepted] = useState(false);
	const [ngoOtp, setNgoOtp] = useState("");
	const [otpVerified, setOtpVerified] = useState(false);
	const DUMMY_OTP = "1234";
	return (
		<div>
			<div className="bg-gray-100 p-3 rounded-md shadow-sm mt-2 text-sm">
				<h3 className="font-semibold mb-1">📍 NGO Ride Request</h3>
				<p>
					<strong>NGO:</strong> Aashray Ngo
				</p>
				<p>
					<strong>Pickup:</strong> {source?.label}
				</p>
				<p>
					<strong>Drop:</strong> {destination?.label}
				</p>

				{!ngoAccepted ? (
					<button
						className="mt-2 px-3 py-1 bg-green-600 text-white rounded-md text-xs hover:bg-green-700"
						onClick={() => setNgoAccepted(true)}
					>
						Accept Request
					</button>
				) : !otpVerified ? (
					<div className="mt-3">
						<label className="block mb-1 text-gray-700 font-medium">
							Enter NGO OTP:
						</label>
						<div className="flex gap-2">
							<input
								type="text"
								value={ngoOtp}
								onChange={(e) => setNgoOtp(e.target.value)}
								maxLength={4}
								className="w-[100px] p-2 border border-gray-300 rounded-md text-center"
								placeholder="1234"
							/>
							<button
								className="px-3 py-1 bg-black text-white rounded-md text-xs"
								onClick={() => {
									if (ngoOtp === DUMMY_OTP) {
										setOtpVerified(true);
									} else {
										alert("Invalid OTP. Try 1234");
									}
								}}
							>
								Verify
							</button>
						</div>
					</div>
				) : (
					<div className="mt-3 text-green-600 font-semibold">
						✅ NGO Ride Verified Successfully!
					</div>
				)}
			</div>{" "}
		</div>
	);
};

export default DonateRideCard;
