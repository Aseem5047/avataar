import React from "react";
import { Link } from "react-router-dom";

const Options = ({
	randomImage,
	setToggleMenu,
	visibleItems,
	hiddenItems,
	toggleMoreMenu,
}) => {
	return (
		<>
			<ul
				className="absolute w-[15rem] top-16 right-0 flex flex-col text-[15px] text-black font-normal items-center justify-center border border-gray-300 rounded-lg z-40 shadow-md shadow-gray-300 bg-white pt-4 pb-2"
				onMouseLeave={() => setToggleMenu(false)}
			>
				<li className="flex items-center justify-start gap-4 w-full px-4 mb-2 border-b pb-4">
					<Link to="/" className="hover:scale-110">
						<img
							src={`/users/${randomImage}`}
							alt="profile"
							className="w-12 h-12 rounded-full object-cover"
						/>
					</Link>
					<div className="flex flex-col flex-wrap">
						<Link
							to="/"
							className="text-base hoverEffectText text-ellipsis whitespace-nowrap overflow-hidden w-[9rem]"
						>
							Hello Aseem
						</Link>
						<span className="text-sm bold">@aseem5047</span>
					</div>
				</li>
				{/* Render visible items */}
				{visibleItems.map((item, index) => (
					<Link
						to="/"
						key={index}
						onClick={item.onClick}
						className={`menuItems ${
							item.icon && "flex w-full justify-between items-center"
						}`}
					>
						{item.label}
						{item.icon && item.icon}
					</Link>
				))}

				{/* Render "More" section */}

				{toggleMoreMenu &&
					hiddenItems.map((item, index) => (
						<Link
							to="/"
							key={index}
							onClick={item.onClick}
							className="menuItems"
						>
							{item.label}
						</Link>
					))}
			</ul>
		</>
	);
};

export default Options;
