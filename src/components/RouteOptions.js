import React from "react";
import DropdownBox from "./DropdownBox";

const RouteOptions = ({
	metroRoutes,
	getDirections,
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
			dataType="Routes"
			title="route"
			getData={getDirections}
			setSelectedRoute={setSelectedRoute}
			selectedRoute={selectedRoute}
		/>
	);
};

export default RouteOptions;
