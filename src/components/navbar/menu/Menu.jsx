import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import Options from "./Options";
import { GetMenuItems } from "../../../utils/GetMenuItems";

const Menu = ({ toggleMenu, setToggleMenu, randomImage, downIcon, upIcon }) => {
	const [toggleMoreMenu, setToggleMoreMenu] = useState(false);
	const [menuItems, setMenuItems] = useState([]);

	const maxVisibleItems = 5; // Maximum number of items visible before moving to "More"
	const visibleItems = menuItems.slice(0, maxVisibleItems);
	const hiddenItems = menuItems.slice(maxVisibleItems);

	useEffect(() => {
		// Update the menu items when the component mounts or when the window is resized
		updateMenuItems();
		window.addEventListener("resize", updateMenuItems);
		return () => {
			window.removeEventListener("resize", updateMenuItems);
		};
	}, [toggleMoreMenu, window.innerWidth]);

	const updateMenuItems = useCallback(() => {
		const windowWidth = window.innerWidth;
		setMenuItems(
			GetMenuItems(
				windowWidth,
				setToggleMenu,
				toggleMoreMenu,
				setToggleMoreMenu,
				upIcon,
				downIcon
			)
		);
	}, [toggleMoreMenu, window.innerWidth]);

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu);
		setToggleMoreMenu(false);
	};

	return (
		<>
			<div className="flex items-center justify-center gap-4 relative">
				{/* when the menu is toggled */}
				{toggleMenu && (
					<Options
						randomImage={randomImage}
						setToggleMenu={setToggleMenu}
						visibleItems={visibleItems}
						hiddenItems={hiddenItems}
						toggleMoreMenu={toggleMoreMenu}
					/>
				)}

				{/* when the menu is not toggled */}

				{/* when enough width is available */}
				<div className="hidden md:flex gap-2 items-center justify-center">
					<div className=" hidden lg:flex items-center justify-start gap-4 w-full pr-2">
						<Link to="/" className="hover:scale-110 cursor-pointer">
							<img
								src={`/users/${randomImage}`}
								alt="profile"
								className="w-12 h-12 rounded-full object-cover"
							/>
						</Link>
						<div className="flex flex-col justify-center">
							<Link
								to="/"
								className="text-sm hoverEffectText text-ellipsis whitespace-nowrap overflow-hidden"
							>
								Hello Aseem
							</Link>
							<span className="text-base bold font-semibold">
								Features & Lists
							</span>
						</div>
					</div>

					<div className=" items-center ml-4 gap-4 hidden 2xl:flex">
						<Link
							to="/"
							className="flex flex-col justify-center hoverEffectText"
						>
							<span className="text-sm">Account</span>
							<span className="text-base font-semibold w-max">& Profile</span>
						</Link>
						<Link
							to="/"
							className="flex flex-col justify-center hoverEffectText"
						>
							<span className="text-sm">Your</span>
							<span className="text-base font-semibold">Prime+</span>
						</Link>
					</div>
				</div>

				{/* Profile and menu section */}

				<div
					className="flex items-center justify-center gap-0 border border-gray-300 rounded-full py-2 px-5 cursor-pointer hover:scale-110"
					onClick={handleToggleMenu}
				>
					<span className="hidden lg:block text-base mr-2">More</span>

					<>
						{!toggleMenu ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						)}
					</>

					<div
						className={`bg-gray-700 block lg:hidden rounded-full text-white ml-2`}
					>
						<img
							src={`/users/${randomImage}`}
							alt=""
							className={`h-8 w-8 rounded-full object-cover`}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Menu;
