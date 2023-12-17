import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
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
	);
}

export default App;
