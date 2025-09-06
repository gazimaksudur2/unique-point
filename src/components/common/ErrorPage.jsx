import React from "react";
import { Link } from "react-router-dom";
import {
	FiHome,
	FiRefreshCw,
	FiAlertTriangle,
	FiMail,
	FiPhone,
} from "react-icons/fi";
import SEO from "./SEO";

const ErrorPage = ({
	errorCode = "500",
	title = "Something Went Wrong",
	message = "We're experiencing some technical difficulties. Please try again later.",
	showRetry = true,
	showContact = true,
}) => {
	const getErrorIcon = () => {
		switch (errorCode) {
			case "404":
				return <FiAlertTriangle className="w-16 h-16 text-primary-400" />;
			case "500":
				return <FiAlertTriangle className="w-16 h-16 text-red-400" />;
			case "403":
				return <FiAlertTriangle className="w-16 h-16 text-yellow-400" />;
			default:
				return <FiAlertTriangle className="w-16 h-16 text-gray-400" />;
		}
	};

	const getErrorColor = () => {
		switch (errorCode) {
			case "404":
				return "primary";
			case "500":
				return "red";
			case "403":
				return "yellow";
			default:
				return "gray";
		}
	};

	const errorColor = getErrorColor();

	return (
		<>
			<SEO
				title={`${errorCode} Error - UniquePoint`}
				description={`${title}. ${message}`}
				keywords={`${errorCode}, error, UniquePoint, technical issue`}
				canonical={`https://unique-point.com/${errorCode}`}
			/>

			<div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50 flex items-center justify-center">
				<div className="container mx-auto px-4 py-16">
					<div className="max-w-3xl mx-auto text-center">
						<div className="bg-white rounded-3xl shadow-xl p-12">
							{/* Error Icon */}
							<div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
								{getErrorIcon()}
							</div>

							{/* Error Code */}
							<div className={`text-6xl font-bold text-${errorColor}-500 mb-4`}>
								{errorCode}
							</div>

							{/* Error Title */}
							<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								{title}
							</h1>

							{/* Error Message */}
							<p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
								{message}
							</p>

							{/* Action Buttons */}
							<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
								<Link
									to="/"
									className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
								>
									<FiHome className="w-5 h-5 mr-2" />
									Go Home
								</Link>

								{showRetry && (
									<button
										onClick={() => window.location.reload()}
										className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:text-primary-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
									>
										<FiRefreshCw className="w-5 h-5 mr-2" />
										Try Again
									</button>
								)}
							</div>

							{/* Contact Information */}
							{showContact && (
								<div className="bg-gray-50 rounded-xl p-6">
									<h3 className="text-lg font-semibold text-gray-900 mb-4">
										Need Immediate Help?
									</h3>
									<p className="text-gray-600 mb-4">
										Our support team is available to assist you
									</p>
									<div className="flex flex-col sm:flex-row gap-3 justify-center">
										<a
											href="https://wa.me/+8801903219313"
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors duration-200"
										>
											<FiPhone className="w-5 h-5 mr-2" />
											WhatsApp Support
										</a>
										<a
											href="mailto:mdrobiulislam0404@gmail.com"
											className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors duration-200"
										>
											<FiMail className="w-5 h-5 mr-2" />
											Email Support
										</a>
									</div>
								</div>
							)}
						</div>

						{/* Additional Help */}
						<div className="mt-8 grid md:grid-cols-3 gap-4">
							<Link
								to="/products"
								className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
							>
								<h4 className="font-semibold text-gray-900 mb-2">
									Browse Products
								</h4>
								<p className="text-sm text-gray-600">Explore our collection</p>
							</Link>
							<Link
								to="/faq"
								className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
							>
								<h4 className="font-semibold text-gray-900 mb-2">FAQ</h4>
								<p className="text-sm text-gray-600">
									Find answers to questions
								</p>
							</Link>
							<Link
								to="/contacts"
								className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
							>
								<h4 className="font-semibold text-gray-900 mb-2">Contact Us</h4>
								<p className="text-sm text-gray-600">Get in touch with us</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ErrorPage;
