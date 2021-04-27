import React from "react";

const DropdownBox = ({
	dataList,
	getData,
	dataType,
	title,
	selectedRoute,
	setSelectedRoute,
}) => {
	const options = dataList.map((data) => (
		<option value={data[0]} key={data[1]}>
			{data[0]}
		</option>
	));

	const [isDisplay, toggleDisplay] = useState(false);

	const toggleHandler = () => toggleDisplay(!isDisplay);

	return (
		<div>
			<Button onClick={toggleHandler}>{selectedRoute[0] || ""}</Button>
			<ul
				className={classNames({
					"display-none": !isDisplay,
				})}
			>
				{dataList.map((data) => (
					<li key={data[0] + "-" + data[1]}>
						<button
							onClick={(e) => {
								e && e.preventDefault();
								toggleHandler();
								setSelectedRoute(data);
							}}
						>
							{data[0]} - {data[1]}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default DropdownBox;
