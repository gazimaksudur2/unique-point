// Error handling utilities
export const ErrorTypes = {
	NETWORK_ERROR: "NETWORK_ERROR",
	VALIDATION_ERROR: "VALIDATION_ERROR",
	AUTHENTICATION_ERROR: "AUTHENTICATION_ERROR",
	AUTHORIZATION_ERROR: "AUTHORIZATION_ERROR",
	NOT_FOUND_ERROR: "NOT_FOUND_ERROR",
	SERVER_ERROR: "SERVER_ERROR",
	UNKNOWN_ERROR: "UNKNOWN_ERROR",
};

export const ErrorMessages = {
	[ErrorTypes.NETWORK_ERROR]:
		"Network connection failed. Please check your internet connection and try again.",
	[ErrorTypes.VALIDATION_ERROR]: "Please check your input and try again.",
	[ErrorTypes.AUTHENTICATION_ERROR]: "Please log in to continue.",
	[ErrorTypes.AUTHORIZATION_ERROR]:
		"You do not have permission to perform this action.",
	[ErrorTypes.NOT_FOUND_ERROR]: "The requested resource was not found.",
	[ErrorTypes.SERVER_ERROR]: "Server error occurred. Please try again later.",
	[ErrorTypes.UNKNOWN_ERROR]: "An unexpected error occurred. Please try again.",
};

export const getErrorMessage = (error) => {
	if (typeof error === "string") {
		return error;
	}

	if (error?.response?.status) {
		const status = error.response.status;
		switch (status) {
			case 400:
				return ErrorMessages[ErrorTypes.VALIDATION_ERROR];
			case 401:
				return ErrorMessages[ErrorTypes.AUTHENTICATION_ERROR];
			case 403:
				return ErrorMessages[ErrorTypes.AUTHORIZATION_ERROR];
			case 404:
				return ErrorMessages[ErrorTypes.NOT_FOUND_ERROR];
			case 500:
			case 502:
			case 503:
			case 504:
				return ErrorMessages[ErrorTypes.SERVER_ERROR];
			default:
				return ErrorMessages[ErrorTypes.UNKNOWN_ERROR];
		}
	}

	if (error?.message) {
		return error.message;
	}

	return ErrorMessages[ErrorTypes.UNKNOWN_ERROR];
};

export const logError = (error, context = "") => {
	const errorMessage = getErrorMessage(error);
	const timestamp = new Date().toISOString();

	console.error(`[${timestamp}] Error${context ? ` in ${context}` : ""}:`, {
		message: errorMessage,
		originalError: error,
		stack: error?.stack,
		userAgent: navigator.userAgent,
		url: window.location.href,
	});

	// In production, you might want to send this to an error tracking service
	if (process.env.NODE_ENV === "production") {
		// Example: Sentry.captureException(error, { extra: { context } });
	}
};

export const handleAsyncError = (asyncFn) => {
	return async (...args) => {
		try {
			return await asyncFn(...args);
		} catch (error) {
			logError(error, asyncFn.name);
			throw error;
		}
	};
};

export const createErrorHandler = (
	fallbackMessage = "Something went wrong"
) => {
	return (error, context = "") => {
		logError(error, context);
		return getErrorMessage(error) || fallbackMessage;
	};
};

// Error boundary helper
export const withErrorBoundary = (Component, fallbackComponent = null) => {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = { hasError: false, error: null };
		}

		static getDerivedStateFromError(error) {
			return { hasError: true, error };
		}

		componentDidCatch(error, errorInfo) {
			logError(error, Component.name);
		}

		render() {
			if (this.state.hasError) {
				return (
					fallbackComponent || (
						<div className="p-4 bg-red-50 border border-red-200 rounded-lg">
							<p className="text-red-800">
								Something went wrong. Please refresh the page.
							</p>
						</div>
					)
				);
			}

			return <Component {...this.props} />;
		}
	};
};
