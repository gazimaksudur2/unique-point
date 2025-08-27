import React from "react";
import clsx from "clsx";

const Badge = ({
	children,
	variant = "default",
	size = "md",
	className = "",
	...props
}) => {
	const baseClasses = "inline-flex items-center font-medium rounded-full";

	const variants = {
		default: "bg-gray-100 text-gray-800",
		primary: "bg-primary text-white",
		secondary: "bg-secondary text-gray-800",
		success: "bg-primary text-white",
		warning: "bg-coral text-white",
		danger: "bg-coral text-white",
		info: "bg-secondary text-gray-800",
	};

	const sizes = {
		sm: "px-2 py-1 text-xs",
		md: "px-3 py-1 text-sm",
		lg: "px-4 py-2 text-base",
	};

	const classes = clsx(baseClasses, variants[variant], sizes[size], className);

	return (
		<span className={classes} {...props}>
			{children}
		</span>
	);
};

export default Badge;
