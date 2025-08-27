import React from "react";
import clsx from "clsx";

const Button = ({
	children,
	variant = "primary",
	size = "md",
	disabled = false,
	loading = false,
	className = "",
	onClick,
	type = "button",
	...props
}) => {
	const baseClasses =
		"inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

	const variants = {
		primary: "bg-primary hover:bg-primary-dark text-white focus:ring-primary",
		secondary:
			"bg-secondary hover:bg-secondary-light text-gray-800 focus:ring-secondary",
		coral: "bg-coral hover:bg-coral-dark text-white focus:ring-coral",
		outline:
			"border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
		soft: "bg-cream hover:bg-secondary-light text-gray-700 focus:ring-primary",
		ghost: "text-gray-700 hover:bg-cream focus:ring-gray-500",
		success: "bg-primary hover:bg-primary-dark text-white focus:ring-primary",
		warning: "bg-coral hover:bg-coral-dark text-white focus:ring-coral",
		danger: "bg-coral hover:bg-coral-dark text-white focus:ring-coral",
	};

	const sizes = {
		sm: "px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm",
		md: "px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base",
		lg: "px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base lg:text-lg",
		xl: "px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg lg:text-xl",
	};

	const classes = clsx(
		baseClasses,
		variants[variant],
		sizes[size],
		{
			"opacity-50 cursor-not-allowed": disabled || loading,
		},
		className
	);

	return (
		<button
			type={type}
			className={classes}
			disabled={disabled || loading}
			onClick={onClick}
			{...props}
		>
			{loading && (
				<svg
					className="animate-spin -ml-1 mr-3 h-5 w-5"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					></circle>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
			)}
			{children}
		</button>
	);
};

export default Button;
