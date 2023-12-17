import React, { useEffect, useState } from "react";
import UserData from "./UserData";

import Slider from "../components/slider/Slider";
import { bannerImages } from "../constants/SliderData";

const HomePage = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	return (
		<div className="flex flex-col items-center w-full h-full">
			<Slider images={bannerImages} loading={loading} />
			<div className=" w-full h-full flex justify-center items-center">
				<UserData />
			</div>
		</div>
	);
};

export default HomePage;
