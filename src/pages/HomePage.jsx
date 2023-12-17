import React from "react";
import UserData from "./UserData";

import Slider from "../components/slider/Slider";
import { bannerImages } from "../constants/SliderData";

const HomePage = () => {
	return (
		<div className="flex flex-col items-center w-full h-full">
			<Slider images={bannerImages} />
			<div className=" w-full h-full flex justify-center items-center">
				<UserData />
			</div>
		</div>
	);
};

export default HomePage;
