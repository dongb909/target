import React, { useState } from "react";
import Button from "./Button";
import classNames from "classnames";

const DirectionOptions = ({
	setSelectedDirection,
	directions,
	selectedDirection,
}) => {
	const [isDisplay, toggleDisplay] = useState(false);
	const toggleDisplayHandler = () => toggleDisplay(!isDisplay);

	return (
		<div>
			<Button onClick={toggleDisplayHandler}>
				{selectedDirection.direction_name}
			</Button>
			{console.log(isDisplay)}
			<ul style={{ display: !isDisplay ? "none" : "block" }}>
				{directions.map((direction) => (
					<li key={direction.direction_id}>
						<Button
							onClick={() => {
								toggleDisplayHandler();
								setSelectedDirection(direction);
							}}
						>
							{direction.direction_name}
						</Button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default DirectionOptions;
