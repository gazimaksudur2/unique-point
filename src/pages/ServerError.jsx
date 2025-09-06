import React from "react";
import ErrorPage from "../components/common/ErrorPage";

const ServerError = () => {
	return (
		<ErrorPage
			errorCode="500"
			title="Internal Server Error"
			message="We're experiencing some technical difficulties on our end. Our team has been notified and is working to resolve this issue."
			showRetry={true}
			showContact={true}
		/>
	);
};

export default ServerError;
