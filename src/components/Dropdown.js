import React from "react";

const Dropdown = ({
	data,
	onChangeCallback,
	"data-testid": dataTestId,
	dropType,
}) => {
	return (
		<div className="mt-10 mb-10 ">
			<select
				data-testid={dataTestId}
				className="border border-gray-300 rounded-lg text-gray-600 h-10 w-80 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none overflow-auto "
				onChange={(e) => {
					const [elementName, elementID] = e.target.value.split(",");
					onChangeCallback(elementName, elementID);
				}}
			>
				<option>{dropType}</option>
				{data.map((element) => (
					<option
						data-testid={dataTestId + "-option"}
						key={element.keyID}
						value={[element.elementName, element.elementID]}
					>
						{element.elementName}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
