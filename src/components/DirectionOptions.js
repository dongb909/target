import React from "react";
import Dropdown from "./Dropdown";

const DirectionOptions = ({
	setSelectedDirection,
	directions,
	selectedDirection,
}) => {
	const routesModifiedList = directions.map(
		({ direction_name, direction_id }) => ({
			elementName: direction_name,
			elementID: direction_id,
			keyID: `${direction_name}-${direction_id}`,
		})
	);

	const getStopsData = (elementName, elementID) => {
		setSelectedDirection({ elementName, elementID });

		// const defaultData = {elementName: "Select"}
		// history.push(`/${routeID}/${directionID}`)
		// if figure out how to map this to axios req when it sees this url
	};

	return (
		<Dropdown
			data={routesModifiedList}
			displayName={selectedDirection.elementName}
			onChangeCallback={getStopsData}
			data-testid="selectDirectionOption"
			dropType="Select Route"
		/>
	);
};
export default DirectionOptions;
