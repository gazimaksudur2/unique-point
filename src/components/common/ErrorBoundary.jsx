import React from "react";
import ErrorPage from "./ErrorPage";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
			errorInfo: null,
		};
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// Log error to console in development
		if (process.env.NODE_ENV === "development") {
			console.error("ErrorBoundary caught an error:", error, errorInfo);
		}

		// Update state with error details
		this.setState({
			error: error,
			errorInfo: errorInfo,
		});

		// Log error to external service in production
		if (process.env.NODE_ENV === "production") {
			// You can integrate with error tracking services like Sentry, LogRocket, etc.
			// Example: Sentry.captureException(error, { extra: errorInfo });
		}
	}

	handleRetry = () => {
		this.setState({
			hasError: false,
			error: null,
			errorInfo: null,
		});
	};

	render() {
		if (this.state.hasError) {
			// Custom error UI
			return (
				<ErrorPage
					errorCode="500"
					title="Application Error"
					message="Something went wrong with the application. Our team has been notified and is working to fix it."
					showRetry={true}
					showContact={true}
				/>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
