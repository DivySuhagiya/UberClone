import React, { useContext } from "react";
import { UserIcon } from "./Icons";
import { DistanceContext } from "../Context/DistanceContext";

const CarListCard = ({ car }) => {
    const { distanceAll } = useContext(DistanceContext);
	return (
		<div className="overflow-hidden">
			<div className="flex gap-4 items-center justify-between">
				<div className="flex items-center">
					<img width={150} height={150} src={car.img} />
					<div>
						<h2 className="font-semibold text-[18px] flex gap-3 items-center">
							{car.name}
							<span className="flex items-center">
								<UserIcon />
                                <span className="text-[12px]">{car.seat}</span>
							</span>
						</h2>
						<p>{car.desc}</p>
					</div>
				</div>
				<h2 className="font-semibold text-[18px]">
					₹{(car.amount * distanceAll).toFixed(2)}
				</h2>
			</div>
		</div>
	);
};

export default CarListCard;
