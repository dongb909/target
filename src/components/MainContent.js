import React, { useState, useEffect } from "react";
import RouteOptions from "./RouteOptions";
import DirectionOptions from "./DirectionOptions";
import StopsList from "./StopsList";
// import { useHistory } from "react-router-dom";
const axios = require("axios");

const MainContent = () => {
	const defaultRouteName = "Select a Route";
	const defaultDirectionName = "Select a Direction";

	// const history = useHistory()
	// console.log('use history', useHistory)
	// console.log('wghat is history', history);

	const [metroRoutes, setRoutes] = useState([]);
	const [directions, setDirections] = useState([]);
	// const [isInitialRender, setInitialRender] = useState(false);
	// component states
	const [selectedRoute, setSelectedRoute] = useState({
		elementName: defaultRouteName,
		elementID: null,
	});
	const [selectedDirection, setSelectedDirection] = useState({
		elementName: defaultDirectionName,
		elementID: null,
	});

	// route response from selectedRoute + selectedDirection
	const [stops, setStops] = useState([]);

	useEffect(() => {
		axios
			.get("https://svc.metrotransit.org/nextripv2/routes")
			.then((res) => setRoutes(res.data))
			.catch((err) => `${err.message} CANNOT GET ROUTES`);
	}, []);

	useEffect(() => {
		if (!selectedRoute.elementID) return;
		axios
			.get(
				`https://svc.metrotransit.org/nextripv2/directions/${selectedRoute.elementID}`
			)
			.then((response) => {
				// history.push(selectedRoute[1])
				setDirections(response.data);
			})
			.catch((err) => `${err.message} CANNOT GET DIRECTIONS`);
	}, [selectedRoute]);

	useEffect(() => {
		if (!selectedDirection.elementID) return;
		axios
			.get(
				`https://svc.metrotransit.org/nextripv2/stops/${selectedRoute.elementID}/${selectedDirection.elementID}`
			)
			.then((response) => {
				// const historyPathname = history.location.pathname
				setStops(response.data);
			})
			.catch((err) => `${err.message} CANNOT GET STOPS`);
	}, [selectedRoute, selectedDirection]);

	return (
		<div className="mainContent">
			<RouteOptions
				metroRoutes={metroRoutes}
				setSelectedRoute={setSelectedRoute}
				selectedRoute={selectedRoute}
				setDirections={setDirections}
			/>
			{directions.length > 0 && (
				<DirectionOptions
					directions={directions}
					setSelectedDirection={setSelectedDirection}
					selectedDirection={selectedDirection}
				/>
			)}
			{stops.length > 0 && <StopsList stops={stops} />}
		</div>
	);
};

export default MainContent;
