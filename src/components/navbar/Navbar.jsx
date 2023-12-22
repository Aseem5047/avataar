import React, { useState } from "react";
import Search from "./Search";
import Menu from "./menu/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
	// State variables for menu and search toggles, and search text
	const [toggleMenu, setToggleMenu] = useState(false);
	const [toggleSearch, setToggleSearch] = useState(false);
	const [searchText, setSearchText] = useState("");

	// List of image filenames
	let imageList = ["1.png", "2.png", "3.png", "4.png", "5.png"];

	// Check if a random image is already stored in local storage
	let storedImage = localStorage.getItem("randomImage");

	let randomImage = "";

	// If no image is stored, generate a random index and select an image
	if (!storedImage) {
		let randomIndex = Math.floor(Math.random() * imageList.length);
		randomImage = imageList[randomIndex];
		localStorage.setItem("randomImage", randomImage);
	} else {
		// Use the stored image if available
		randomImage = storedImage;
	}

	// Function to toggle the search menu
	const toggleSearchMenu = () => {
		setToggleSearch(!toggleSearch);
	};

	// Function to handle search input
	const handleSearch = (event) => {
		event.preventDefault();
		setSearchText(event.target.value);
	};

	// Function to clear search text
	const clearSearchText = () => {
		setSearchText("");
	};

	// Array of categories
	const category = [
		"art",
		"technology",
		"charity",
		"music",
		"film",
		"health",
		"fashion",
		"food",
	];

	const downIcon = (
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
				d="m19.5 8.25-7.5 7.5-7.5-7.5"
			/>
		</svg>
	);

	const upIcon = (
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
				d="m4.5 15.75 7.5-7.5 7.5 7.5"
			/>
		</svg>
	);

	// JSX for the Navbar component
	return (
		<>
			{/* Main container for the Navbar */}
			<div className="bg-white z-40 flex justify-between w-full items-center shadow shadow-gray-200 fixed top-0 p-4 lg:px-[80px]">
				<div className="flex items-center gap-4">
					{/* Logo */}
					<Link className="cursor-pointer hover:scale-110">
						<img
							src="/assets/logo.png"
							alt=""
							className="h-auto w-32 lg:w-52 "
						/>
					</Link>
					{/* Navigation links */}
					<div className="hidden 2xl:flex gap-1 items-center justify-center hoverEffectText">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
							/>
						</svg>
						<Link to="/" className="text-base font-semibold">
							Address & Location
						</Link>
					</div>
				</div>
				{/* Search or other content */}
				<Search
					toggleSearchMenu={toggleSearchMenu}
					handleSearch={handleSearch}
					clearSearchText={clearSearchText}
					category={category}
					toggleSearch={toggleSearch}
					setToggleSearch={setToggleSearch}
					searchText={searchText}
					setSearchText={setSearchText}
				/>
				{/* Menu and Profile button */}
				<Menu
					randomImage={randomImage}
					toggleMenu={toggleMenu}
					setToggleMenu={setToggleMenu}
					downIcon={downIcon}
					upIcon={upIcon}
				/>
			</div>
		</>
	);
};

export default Navbar;
