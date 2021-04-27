import React, {useEffect} from "react";
import DropdownBox from "./DropdownBox";
const axios = require("axios");

const RouteOptions = ({
	metroRoutes,
	setDirections,
	setSelectedRoute,
	selectedRoute,
}) => {
	const routeNames = metroRoutes.map(({ route_label, route_id }) => [
		route_label,
		route_id,
	]);
	useEffect(() => {
		axios
			.get(
				`https://svc.metrotransit.org/nextripv2/directions/${selectedRoute[1]}`
			)
			.then((response) => {
				// history.push(selectedRoute[1])
				setDirections(response.data);
			})
			.catch((err) => `${err.message} CANNOT GET DIRECTIONS`);
	}, [selectedRoute]);
	return (
		<DropdownBox
			dataList={routeNames}
			setSelectedRoute={setSelectedRoute}
			selectedRoute={selectedRoute}
		/>
	);
};

export default RouteOptions;
