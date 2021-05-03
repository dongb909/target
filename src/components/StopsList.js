import React from "react";

const StopsList = ({ stops }) => {
	return (
		<div className="container py-10 mx-auto ">
			<div className="lg:w-2/3 w-full mx-auto overflow-auto pt-5 bg-gray-100 max-h-80">
				<table className="table-auto w-full text-left whitespace-no-wrap">
					<thead>
						<tr>
							<th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-yellow-300 rounded-tl rounded-bl ">
								AVAILABLE STOPS
							</th>
						</tr>
					</thead>
					<tbody>
						{stops.map((stop) => (
							<tr>
								<td className="px-4 py-3 border-b-2 border-gray-300">
									{stop.description}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default StopsList;
