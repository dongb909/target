import React from "react";

const Button = ({ onClick, children, className }) => {
	return (
		<button
			className={className}
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
