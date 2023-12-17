import React from "react";
import { Link } from "react-router-dom";

const Search = ({
	toggleSearchMenu,
	handleSearch,
	clearSearchText,
	category,
	toggleSearch,
	searchText,
}) => {
	return (
		// Container for search component (hidden on medium screens and above)
		<div className="hidden md:block">
			{toggleSearch && (
				// Search dropdown with input, clear button, and category tags
				<div className="fixed top-[5.25rem] bg-white shadow-lg border p-4 w-[85%] lg:w-1/2 left-1/2 transform -translate-x-[50%] self-center z-40 flex flex-col gap-4 rounded-xl max-h-[38rem] overflow-y-scroll no-scrollbar">
					{/* Search input with clear and search buttons */}
					<label className="relative flex items-center input px-4 outline-none">
						<input
							type="text"
							name="searchText"
							placeholder={`Hello ${"Aseem Gupta"} Enter Search Query`}
							value={searchText}
							className="outline-none bg-transparent w-full h-full text-black"
							onChange={handleSearch}
						/>
						<div
							className={`${
								searchText.length === 0 && "hidden"
							} absolute right-2 flex items-center justify-center gap-2`}
						>
							{/* Clear search button */}
							<button
								className={` bg-[#03a9f4f0] p-2 rounded-full text-white hover:opacity-75`}
								onClick={clearSearchText}
							>
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
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
							{/* Search button */}
							<button className="bg-[#03a9f4f0]  rounded-full p-3 text-white hover:opacity-75">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="3"
									stroke="currentColor"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
									/>
								</svg>
							</button>
						</div>
					</label>

					{/* Category tags */}
					<div className="flex gap-2 items-center justify-start my-2 mx-4 flex-wrap">
						{category.map((tag, index) => (
							<span
								className={`cursor-pointer  blueGrad py-2 px-4  rounded-xl hover:opacity-80
								}`}
								key={index}
								onClick={() => handleTag(tag)}
							>
								#{tag}
							</span>
						))}
					</div>
				</div>
			)}

			{/* Navigation links */}
			<div className="flex justify-center items-center gap-4 border border-gray-300 rounded-full px-8 py-3">
				<Link to="/" className="navbarText ">
					People
				</Link>
				<span className="text-xl">|</span>
				<Link to="/" className="navbarText ">
					Profile
				</Link>
				<span className="text-xl">|</span>
				<Link to="/" className="navbarText ">
					Connect
				</Link>
				<span className="text-xl">|</span>
				{/* Button to toggle search */}
				<button
					className="bg-[#03a9f4f0] outline-none  rounded-full px-4 py-2 text-white hover:scale-125"
					onClick={toggleSearchMenu}
				>
					{toggleSearch ? (
						// Icon for closing search
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-4 h-4"
						>
							<path
								fillRule="evenodd"
								d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
								clipRule="evenodd"
							/>
						</svg>
					) : (
						// Icon for opening search
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="3"
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
							/>
						</svg>
					)}
				</button>
			</div>
		</div>
	);
};

export default Search;
