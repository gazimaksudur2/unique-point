import React from "react";
import clsx from "clsx";

const Input = ({
	label,
	error,
	helperText,
	className = "",
	type = "text",
	size = "md",
	...props
}) => {
	const baseClasses =
		"block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition-colors";

	const sizes = {
		sm: "px-3 py-2 text-sm",
		md: "px-4 py-2 text-sm",
		lg: "px-4 py-3 text-base",
	};

	const classes = clsx(
		baseClasses,
		sizes[size],
		{
			"border-red-500 focus:ring-red-500 focus:border-red-500": error,
		},
		className
	);

	return (
		<div className="space-y-1">
			{label && (
				<label className="block text-sm font-medium text-gray-700">
					{label}
				</label>
			)}
			<input type={type} className={classes} {...props} />
			{error && <p className="text-sm text-red-600">{error}</p>}
			{helperText && !error && (
				<p className="text-sm text-gray-500">{helperText}</p>
			)}
		</div>
	);
};

export default Input;
