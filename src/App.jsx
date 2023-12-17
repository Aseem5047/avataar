import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";

function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	return (
		<>
			{loading ? (
				<div className="h-screen flex items-center justify-center">
					<img
						src="https://cdn.dribbble.com/users/1813781/screenshots/5597337/dribbble-girl-with-clock.gif"
						alt=""
						className="m-auto rounded-xl w-80 h-60"
					/>
				</div>
			) : (
				<div className="flex flex-col items-center w-full h-screen lg:px-[80px]">
					{/* Navbar component for navigation */}
					<Navbar />

					{/* Main content container with padding and margin settings */}
					<div className="py-4 mt-20 w-full h-full">
						{/* routes for the application */}
						<Routes>
							{/* Default route for the home page. */}
							<Route index element={<HomePage />} />
						</Routes>
					</div>
				</div>
			)}
		</>
	);
}

export default App;
