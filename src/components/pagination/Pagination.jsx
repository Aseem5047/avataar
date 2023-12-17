import React, { useEffect, useRef, useState } from "react";

// Array(nPages + 1): Creates an array with a length of nPages + 1. This array will have elements from 0 to nPages.

// [...Array(nPages + 1).keys()]: Uses the spread operator (...) to convert the array into a new array containing its keys. The keys of an array are its indices.

// .slice(1): Takes a slice of the array starting from index 1. This removes the first element (0) from the array.

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
	const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

	const activePage = useRef();

	const goToNextPage = () => {
		if (currentPage !== nPages) setCurrentPage(currentPage + 1);
	};
	const goToPrevPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};

	useEffect(() => {
		if (activePage.current) {
			activePage.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "center",
			});
		}
	}, [currentPage]);

	return (
		<>
			<ul className="flex items-center justify-center py-4 mx-2">
				<li className="page-item">
					<button
						onClick={goToPrevPage}
						className={`page-link bg-gray-300 px-3 py-1 rounded-lg mr-4 hover:bg-blue-500 hover:text-white ${
							currentPage === 1 && "hidden"
						}`}
					>
						Previous
					</button>
				</li>
				<li className="w-full max-w-[12rem] md:max-w-fit overflow-x-scroll no-scrollbar flex justify-start items-center gap-2">
					{pageNumbers.map((pgNumber) => (
						<div
							key={pgNumber}
							className={`page-item mx-1 rounded-xl `}
							ref={pgNumber === currentPage ? activePage : null}
						>
							<button
								onClick={() => setCurrentPage(pgNumber)}
								className={`page-link bg-blue-500 hover:opacity-80 text-white px-3 py-1 focus:outline-none rounded-full ${
									currentPage === pgNumber ? "!bg-black/75 " : ""
								}`}
							>
								{pgNumber}
							</button>
						</div>
					))}
				</li>
				<li className="page-item">
					<button
						onClick={goToNextPage}
						className={`page-link bg-gray-300 px-3 py-1 rounded-lg ml-4 hover:bg-blue-500 hover:text-white ${
							currentPage === nPages && "hidden"
						}`}
					>
						Next
					</button>
				</li>
			</ul>
		</>
	);
};

export default Pagination;
