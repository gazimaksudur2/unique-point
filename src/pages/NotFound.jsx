import React from "react";
import { Link } from "react-router-dom";
import {
	FiHome,
	FiArrowLeft,
	FiSearch,
	FiShoppingBag,
	FiMail,
	FiPhone,
} from "react-icons/fi";
import SEO from "../components/common/SEO";

const NotFound = () => {
	return (
		<>
			<SEO
				title="Page Not Found - UniquePoint"
				description="The page you're looking for doesn't exist. Return to UniquePoint homepage or browse our products."
				keywords="404, page not found, error, UniquePoint"
				canonical="https://unique-point.com/404"
			/>

			<div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50 flex items-center justify-center">
				<div className="container mx-auto px-4 py-16">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-16">
							{/* 404 Illustration */}
							<div className="relative mb-8">
								<div className="text-9xl md:text-[12rem] font-bold text-primary-200 opacity-50 select-none">
									404
								</div>
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center">
										<FiSearch className="w-16 h-16 text-primary-400" />
									</div>
								</div>
							</div>

							{/* Error Message */}
							<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
								Oops! Page Not Found
							</h1>
							<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
								The page you're looking for seems to have vanished into the
								digital void. Don't worry, even the best explorers sometimes
								take a wrong turn!
							</p>

							{/* Action Buttons */}
							<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
								<Link
									to="/"
									className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
								>
									<FiHome className="w-5 h-5 mr-2" />
									Go Home
								</Link>
								<button
									onClick={() => window.history.back()}
									className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:text-primary-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
								>
									<FiArrowLeft className="w-5 h-5 mr-2" />
									Go Back
								</button>
							</div>
						</div>

						{/* Helpful Links */}
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
							{/* Products */}
							<Link
								to="/products"
								className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
							>
								<div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
									<FiShoppingBag className="w-6 h-6 text-primary-600" />
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									Browse Products
								</h3>
								<p className="text-gray-600 text-sm">
									Discover our latest collection of fashionable clothing
								</p>
							</Link>

							{/* Gallery */}
							<Link
								to="/gallery"
								className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
							>
								<div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary-200 transition-colors">
									<svg
										className="w-6 h-6 text-secondary-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									View Gallery
								</h3>
								<p className="text-gray-600 text-sm">
									See our products in action with beautiful photos
								</p>
							</Link>

							{/* FAQ */}
							<Link
								to="/faq"
								className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
							>
								<div className="w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-coral-200 transition-colors">
									<svg
										className="w-6 h-6 text-coral-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									Get Help
								</h3>
								<p className="text-gray-600 text-sm">
									Find answers to common questions and get support
								</p>
							</Link>

							{/* Contact */}
							<Link
								to="/contacts"
								className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
							>
								<div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
									<FiMail className="w-6 h-6 text-green-600" />
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									Contact Us
								</h3>
								<p className="text-gray-600 text-sm">
									Get in touch with our customer service team
								</p>
							</Link>
						</div>

						{/* Contact Information */}
						<div className="bg-white rounded-2xl p-8 shadow-lg">
							<div className="text-center">
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Still Need Help?
								</h3>
								<p className="text-gray-600 mb-6">
									If you can't find what you're looking for, our team is here to
									help!
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<a
										href="https://wa.me/+8801876658343"
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
						</div>

						{/* Fun Facts */}
						<div className="mt-12 text-center">
							<div className="inline-block bg-white rounded-xl px-6 py-3 shadow-lg">
								<p className="text-sm text-gray-600">
									<span className="font-semibold text-primary-600">
										Fun Fact:
									</span>{" "}
									The term "404 error" comes from room 404 at CERN, where the
									original web servers were located!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NotFound;
