import React from "react";

const NavigationDots = ({
	images,
	currentIndex,
	setCurrentIndex,
	getImageIndex,
	activeDotRef,
}) => {
	return (
		<div className="flex items-center justify-start lg:justify-center gap-4 w-fit max-w-[75%]  overflow-x-scroll no-scrollbar p-4">
			{images.map((_, index) => (
				<button
					key={index}
					ref={index === currentIndex ? activeDotRef : null}
					className={`px-2 py-1 rounded-xl cursor-pointer hover:scale-125 ${
						index === currentIndex ? "bg-[#03a9f4f0] " : "bg-gray-300 "
					}`}
					onClick={() => setCurrentIndex(getImageIndex(index))}
				/>
			))}
		</div>
	);
};

export default NavigationDots;
