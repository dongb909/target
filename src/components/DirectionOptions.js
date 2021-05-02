import React from "react";
import Dropdown from './Dropdown'

// const formatData = directions => {
// 	return directions.map(direction => ({
// 		name: direction.direction_name,
// 		id: direction.direction_id,
// 		data: direction
// 	}))
// }

const DirectionOptions = ({
	setSelectedDirection,
	directions,
	selectedDirection,
}) => {
	const routesModifiedList = directions.map(({direction_name, direction_id}) => ({elementName: direction_name, elementID: direction_id, keyID: `${direction_name}-${direction_id}`}));

	const getStopsData = (elementName, elementID) => {
		setSelectedDirection({elementName, elementID})
		// history.push(`/${routeID}/${directionID}`)
		// if figure out how to map this to axios req when it sees this url
	}

	return (
		<Dropdown
			data={routesModifiedList}
			displayName={selectedDirection.direction_name}
			onClickCallback={getStopsData}
		/>
	)
};
export default DirectionOptions;
