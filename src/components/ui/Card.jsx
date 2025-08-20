import React from "react";
import clsx from "clsx";

const Card = ({
	children,
	className = "",
	padding = "md",
	shadow = "md",
	hover = false,
	...props
}) => {
	const baseClasses = "bg-white rounded-lg border border-gray-200";

	const paddings = {
		none: "p-0",
		sm: "p-4",
		md: "p-6",
		lg: "p-8",
	};

	const shadows = {
		none: "shadow-none",
		sm: "shadow-sm",
		md: "shadow-md",
		lg: "shadow-lg",
		xl: "shadow-xl",
	};

	const classes = clsx(
		baseClasses,
		paddings[padding],
		shadows[shadow],
		{
			"hover:shadow-lg transition-shadow duration-200": hover,
		},
		className
	);

	return (
		<div className={classes} {...props}>
			{children}
		</div>
	);
};

export default Card;
