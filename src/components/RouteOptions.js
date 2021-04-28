import React from "react";
import DropdownBox from "./DropdownBox";
const axios = require("axios");

const RouteOptions = ({
	metroRoutes,
	setSelectedRoute,
	selectedRoute,
}) => {
	const routeNames = metroRoutes.map(({ route_label, route_id }) => [
		route_label,
		route_id,
	]);

	return (
		<DropdownBox
			dataList={routeNames}
			setSelectedRoute={setSelectedRoute}
			selectedRoute={selectedRoute}
		/>
	);
};

export default RouteOptions;
