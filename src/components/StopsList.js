import React from "react";

const StopsList = ({ stops }) => {
	return (
		<ul className="stopsList">
			{stops.map((stop) => (
				<li>{stop.description}</li>
			))}
		</ul>
	);
};

export default StopsList;
