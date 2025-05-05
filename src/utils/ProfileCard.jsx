import React, { useContext, useState } from "react";
import { NgoAccContext } from "../Context/NgoAccContext";

const ProfileCard = ({ showProfile }) => {
	const { isNgoAcc, setIsNgoAcc } = useContext(NgoAccContext);

	const [showProfileCard, setShowProfileCard] = useState(false);
	const handleMouseEnter = () => {
		setShowProfileCard(true);
	};
	const handleMouseLeave = () => {
		setShowProfileCard(false);
	};
	return (
		<>
			{showProfile || showProfileCard ? (
				<div
					className="fixed top-19 right-10 z-20"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<div className="bg-white rounded-xl shadow-md p-8 w-90 space-y-4 ">
						<div className="flex items-center justify-between">
							<div>
								<h2 className="text-2xl p-0 font-bold mt-[-38px]">
									Divy Suhagiya
								</h2>
								<div className="flex items-center mt-1">
									<span className="text-sm bg-gray-200 px-2 py-0.5 rounded-full flex items-center gap-1">
										<span>⭐</span> 5.00
									</span>
								</div>
							</div>
							<div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center  mt-[-38px]">
								<img
									alt="Divy"
									className="w-10 h-10 rounded-full"
									src="https://d1w2poirtb3as9.cloudfront.net/default.jpeg?Expires=1746410955&amp;Signature=TLq~Boq9Fb~u8tmvx-72f4xA3zl3EnWxSX3smdfxSZRCLrxjvHIdzEbEJkGHsq~tupTPLH2YG6t62bsazC4ij9gE8B8tHC22TemnCmKwKL8GivVqvXtAXk2WiSZCJkEqUSI-i3xAxh~PP~jJzjfh7-imy9Ca6dUwbPcJBYkn4r3MtU72Bmw0Tnc~pfK5iIlwddBGxojfFHZKm9X0Qzl~QyhLXKe-xRJLFFQoRsRtCA0cqJjlCWI3Lxb5YltiqV8iqHHp~txhL-nf5URLcHapIvwPjsY0Xcz2rmTtMIJo2RWCiJBMvsUXkerKcCsxGoFS2raPHJ9IB~w0UaywL~urmA__&amp;Key-Pair-Id=K36LFL06Z5BT10"
								/>
							</div>
						</div>

						<div className="grid grid-cols-3 gap-2 text-center">
							<div className="flex flex-col items-center p-2 bg-gray-100 rounded-lg">
								<span className="text-xl">⭕</span>
								<span className="text-sm mt-1">Help</span>
							</div>
							<div className="flex flex-col items-center p-2 bg-gray-100 rounded-lg">
								<span className="text-xl">💳</span>
								<span className="text-sm mt-1">Wallet</span>
							</div>
							<div className="flex flex-col items-center p-2 bg-gray-100 rounded-lg">
								<span className="text-xl">📄</span>
								<span className="text-sm mt-1">Activity</span>
							</div>
						</div>

						<div className="bg-gray-100 rounded-md p-3 flex justify-between items-center">
							<span className="text-sm text-gray-700">Uber Cash</span>
							<span className="font-semibold">₹0.00</span>
						</div>

						<div className="space-y-2">
							<div className="flex items-center gap-2 text-sm cursor-pointer hover:underline">
								<span>👤</span> Manage account
							</div>
							<div className="flex items-center gap-2 text-sm cursor-pointer hover:underline">
								<span>🏷️</span> Promotions
							</div>
							<div
								className="flex items-center gap-2 text-sm cursor-pointer hover:underline"
								onClick={() => {
									setIsNgoAcc(!isNgoAcc);
								}}
							>
								<span> 👥</span> Change to {isNgoAcc ? "User" : "Ngo"} account
							</div>
						</div>

						<button className="w-full bg-gray-100 text-red-600 py-2 rounded-md font-medium hover:bg-gray-200">
							Sign out
						</button>
					</div>
				</div>
			) : null}
		</>
	);
};

export default ProfileCard;
