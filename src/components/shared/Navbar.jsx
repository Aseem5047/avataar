import React, { useState } from "react";

import Search from "../shared/Search";
import Menu from "../shared/Menu";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [toggleSearch, setToggleSearch] = useState(false);
	const [searchText, setSearchText] = useState("");

	// List of image filenames
	let imageList = ["1.png", "2.png", "3.png", "4.png", "5.png"];

	// Check if a random image is already stored
	let storedImage = localStorage.getItem("randomImage");

	let randomImage = "";

	// If no image is stored, generate a random index and select an image
	if (!storedImage) {
		randomIndex = Math.floor(Math.random() * imageList.length);
		randomImage = imageList[randomIndex];
		localStorage.setItem("randomImage", randomImage);
	} else {
		// Use the stored image if available
		randomImage = storedImage;
	}

	const toggleSearchMenu = () => {
		setToggleSearch(!toggleSearch);
	};

	const handleSearch = (event) => {
		event.preventDefault();
		setSearchText(event.target.value);
	};

	const clearSearchText = (event) => {
		setSearchText("");
	};

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

	return (
		<>
			<div className="bg-white z-40 flex justify-between w-full items-center shadow shadow-gray-200 fixed top-0 px-4 py-4 lg:px-[80px]">
				{/* Logo */}
				<div className="cursor-pointer">
					<img
						src="/assets/logo.png"
						alt=""
						className="text-primary cursor-pointer hover:scale-110 h-auto w-32 lg:w-52 "
					/>{" "}
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
				/>
			</div>
		</>
	);
};

export default Navbar;
