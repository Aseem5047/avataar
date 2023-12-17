import axios from "axios";
import React, { useState, useEffect } from "react";
import Records from "../components/pagination/Records";
import Pagination from "../components/pagination/Pagination";

const UserData = () => {
	// To hold the actual data
	const [data, setData] = useState([]);

	// writin logic for the content indexing

	const [currentPage, setCurrentPage] = useState(1);
	const [recordsPerPage] = useState(10);

	// fetching the data in this case fetching the local data
	useEffect(() => {
		axios
			.get("data.json")
			.then((res) => {
				setData(res.data);
			})
			.catch(() => {
				alert("There was an error while retrieving the data");
			});
	}, []);

	// console.log(data);

	const indexOfLastRecord = currentPage * recordsPerPage; // index of last record
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage; // index of first record
	const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord); // number of records on current page
	const nPages = Math.ceil(data.length / recordsPerPage); // number of total pages

	// console.log(currentPage);

	return (
		<>
			{/* Records and Pagination */}
			<div className="flex flex-col justify-start w-full h-full overflow-auto no-scrollbar mx-1">
				<h2 className="text-2xl text-start mb-4 font-semibold bg-blue-500 p-4 w-fit text-white rounded-xl m-auto">
					UserData Records
				</h2>
				<Records data={currentRecords} />
				<Pagination
					nPages={nPages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</>
	);
};

export default UserData;
