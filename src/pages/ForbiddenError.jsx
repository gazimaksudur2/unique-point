import React from "react";
import ErrorPage from "../components/common/ErrorPage";

const ForbiddenError = () => {
	return (
		<ErrorPage
			errorCode="403"
			title="Access Forbidden"
			message="You don't have permission to access this resource. If you believe this is an error, please contact our support team."
			showRetry={false}
			showContact={true}
		/>
	);
};

export default ForbiddenError;
