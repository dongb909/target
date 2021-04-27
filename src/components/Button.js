import React from "react";

const Button = ({ onClick, children }) => {
	return (
		<button
			onClick={(e) => {
				if (e) e.preventDefault();
				if (onClick) onClick();
			}}
		>
			{children}
		</button>
	);
};

export default Button;
