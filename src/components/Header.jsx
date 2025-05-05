import React, { useState } from "react";
import {
	ActivityIcon,
	ArrowIcon,
	CourierIcon,
	RentalIcon,
	ShareIcon,
	TaxiIcon,
} from "../utils/Icons";
import ProfileCard from "../utils/ProfileCard";

const Header = () => {
	const [showProfile, setShowProfile] = useState(false);

	const handleMouseEnter = () => {
		setShowProfile(true);
	};

	const handleMouseLeave = () => {
        setTimeout(() => {
            setShowProfile(false);
        }, 200);
	};

	const headerMenu = [
		{
			id: 1,
			name: "Ride",
			icon: <TaxiIcon />,
		},
		{
			id: 2,
			name: "Courier",
			icon: <CourierIcon />,
		},
		{
			id: 3,
			name: "Rentals",
			icon: <RentalIcon />,
		},
	];
	return (
		<>
			<div className="p-4 pb-3 pl-20 pr-20 border-b-[4px] border-gray-200 flex items-center justify-between">
				<div className="flex gap-24 items-center">
					<img
						src="uber_logo.png"
						className="scale-200 object-cover overflow-clip"
						width={40}
						height={40}
						alt="Uber"
					/>
					<div className="flex gap-6 items-center">
						{headerMenu.map((item) => (
							<div className="flex items-center gap-2 mt-4" key={item.id}>
								{item.icon}
								<h2 className="text-[14px] font-medium">{item.name}</h2>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-row items-center gap-4">
					<div>
						<ShareIcon />
					</div>
					<div className="flex items-center gap-2 cursor-pointer bg-[#f3f3f3] rounded-full hover:bg-[#e6e6e6] py-1.5 px-4">
						<ActivityIcon />
						<span>Activity</span>
					</div>
					<img
						alt="Divy"
						className="w-10 h-10 rounded-full"
						src="https://d1w2poirtb3as9.cloudfront.net/default.jpeg?Expires=1746410955&amp;Signature=TLq~Boq9Fb~u8tmvx-72f4xA3zl3EnWxSX3smdfxSZRCLrxjvHIdzEbEJkGHsq~tupTPLH2YG6t62bsazC4ij9gE8B8tHC22TemnCmKwKL8GivVqvXtAXk2WiSZCJkEqUSI-i3xAxh~PP~jJzjfh7-imy9Ca6dUwbPcJBYkn4r3MtU72Bmw0Tnc~pfK5iIlwddBGxojfFHZKm9X0Qzl~QyhLXKe-xRJLFFQoRsRtCA0cqJjlCWI3Lxb5YltiqV8iqHHp~txhL-nf5URLcHapIvwPjsY0Xcz2rmTtMIJo2RWCiJBMvsUXkerKcCsxGoFS2raPHJ9IB~w0UaywL~urmA__&amp;Key-Pair-Id=K36LFL06Z5BT10"
					/>
					<div
						className="cursor-pointer"
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						<ArrowIcon />
					</div>
				</div>
			</div>
				<ProfileCard showProfile={showProfile} />
		</>
	);
};

export default Header;
