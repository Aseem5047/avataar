import React from "react";

const Menu = ({ toggleMenu, setToggleMenu, randomImage }) => {
	return (
		<>
			<div className="flex items-center justify-center gap-4 relative">
				{/* when the menu is toggled */}
				{toggleMenu && (
					<ul
						className="absolute min-w-[15rem] w-full top-16 right-0 flex flex-col text-[15px] text-black font-normal items-center justify-center border border-gray-300 rounded-lg z-40 shadow-md shadow-gray-300 bg-white pt-4 pb-2"
						onMouseLeave={() => setToggleMenu(false)}
					>
						<li className="flex items-center justify-start gap-4 w-full px-4 mb-2 border-b pb-4">
							<div className="hover:scale-110">
								<img
									src={`/users/${randomImage}`}
									alt="profile"
									className="w-12 h-12 rounded-full object-cover"
								/>
							</div>
							<div className="flex flex-col flex-wrap">
								<span className="text-base hoverEffectText text-ellipsis whitespace-nowrap overflow-hidden w-[9rem]">
									Hello Aseem
								</span>
								<span className="text-sm bold">@aseem5047</span>
							</div>
						</li>
						<li onClick={() => setToggleMenu(false)} className="menuItems">
							Authenticate
						</li>

						<li onClick={() => setToggleMenu(false)} className="menuItems">
							Sample Home
						</li>
						<li className="menuItems">Help</li>
						<li className=" menuItems">Log Out</li>
					</ul>
				)}

				{/* when the menu is not toggled */}

				{/* language icon */}

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-5 h-5 hidden md:block"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
					/>
				</svg>

				{/* Profile and menu section */}

				<div className="flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2 px-5">
					<button
						className="hover:scale-125"
						onClick={() => setToggleMenu(!toggleMenu)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-5 mr-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>

					<div className={`bg-gray-700 rounded-full text-white`}>
						<img
							src={`/users/${randomImage}`}
							alt=""
							className={`h-8 w-8 rounded-full object-cover hover:scale-125`}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Menu;
