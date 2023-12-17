import React from "react";

const Records = ({ data }) => {
	if (data.length === 0) {
		return (
			<p className="text-2xl text-center my-5 font-semibold bg-blue-500 p-4 w-fit text-white rounded-xl m-auto">
				No records to display
			</p>
		);
	}
	return (
		<table className="min-w-full border border-gray-300 rounded-xl">
			<thead className="bg-blue-500 text-white">
				<tr>
					<th className="border p-3">ID</th>
					<th className="border p-3">First Name</th>
					<th className="border p-3">Last Name</th>
					<th className="border p-3">City</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<tr
						key={item.id}
						className={`border text-center ${
							index % 2 === 0 ? "bg-gray-100" : "bg-white"
						} hover:bg-gray-200 transition-all`}
					>
						<td className="border p-3">{item.id}</td>
						<td className="border p-3">{item.first_name}</td>
						<td className="border p-3">{item.last_name}</td>
						<td className="border p-3">{item.city}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Records;
