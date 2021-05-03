import React, { useState, useEffect } from "react";
import RouteOptions from "./RouteOptions";
import DirectionOptions from "./DirectionOptions";
import StopsList from "./StopsList";
const axios = require("axios");

const MainContent = () => {
	const defaultRouteName = "Select a Route";
	const defaultDirectionName = "Select a Direction";

	const [metroRoutes, setRoutes] = useState([]);
	const [directions, setDirections] = useState([]);
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

	//get routes upon initial render
	useEffect(() => {
		axios
			.get("https://svc.metrotransit.org/nextripv2/routes")
			.then((res) => setRoutes(res.data))
			.catch((err) => `${err.message} CANNOT GET ROUTES`);
	}, []);

	//reset directions and stops upon change in selected route
	useEffect(() => {
		if (!selectedRoute.elementID) return;
		setDirections([]);
		setStops([]);
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

	//get stops upon selected route and direction
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
	}, [selectedDirection]);

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

//useHistory object, it's really just a stack => mapping url to a particular view and state.
//you're pushing a new state and new view. React wraps the history
//maps to dom's history.pushState but we're using history.push as what appears to a url that you want to be on.
//update browswer state when have both router and direction ids, it's up to you.
//so push when have both so really
//what about wild cards.
