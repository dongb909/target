import React, { useState } from "react";
import Button from "./Button";
import classNames from "classnames";

const DropdownBox = ({ dataList, selectedRoute, setSelectedRoute }) => {
	const options = dataList.map((data) => (
		<option value={data[0]} key={data[1]}>
			{data[0]}
		</option>
	));

	const [isDisplay, toggleDisplay] = useState(false);

	const toggleHandler = () => toggleDisplay(!isDisplay);

	return (
		<div className="inline-block relative">
			<Button
				onClick={toggleHandler}
				className="bg-gray-300 text-gray-700 font-semibold py-2 px-20 rounded inline-flex items-center"
			>
				<span>{selectedRoute[0] || ""}</span>
				<svg
					className="fill-current h-4 w-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
				</svg>
			</Button>
			<ul
				style={{ display: !isDisplay ? "none" : "block" }}
				className="dropdown-menu text-gray-700 pt-1"
			>
				{dataList.map((data) => (
					<li
						key={data[0] + "-" + data[1]}
						className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
					>
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
