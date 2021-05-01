import React from "react";
import Dropdown from './Dropdown';


const RouteOptions = ({ metroRoutes, setSelectedRoute, selectedRoute }) => {
	const routesModifiedList = metroRoutes.map(({ route_label, route_id }) => ({elementName: route_label, elementID: route_id, keyID: `${route_label}-${route_id}`}));

	const getRouteData = (elementName, elementID) => {
		setSelectedRoute({elementName, elementID})
	}

	return (
		<Dropdown
			data={routesModifiedList}
			displayName={selectedRoute.elementName}
			onClickCallback={getRouteData}
		/>
	);
};
export default RouteOptions;
