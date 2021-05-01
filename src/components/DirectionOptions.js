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
	};

	return (
		<Dropdown
			data={routesModifiedList}
			displayName={selectedDirection.direction_name}
			onClickCallback={getStopsData}
		/>
	);
};
export default DirectionOptions;
