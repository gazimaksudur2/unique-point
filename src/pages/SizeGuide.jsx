import React, { useState } from "react";
import {
	FiUser,
	FiCheckCircle,
	FiAlertCircle,
	FiMaximize2,
} from "react-icons/fi";
import SEO from "../components/common/SEO";

const SizeGuide = () => {
	const [selectedSize, setSelectedSize] = useState("M");

	const sizeData = [
		{
			size: "M",
			length: '27"',
			chest: '38"',
			description: "Perfect for average build",
			recommended: true,
		},
		{
			size: "L",
			length: '28"',
			chest: '40"',
			description: "Ideal for slightly larger frame",
			recommended: false,
		},
		{
			size: "XL",
			length: '29"',
			chest: '42"',
			description: "Great for broader shoulders",
			recommended: false,
		},
		{
			size: "XXL",
			length: '30"',
			chest: '44"',
			description: "Comfortable for larger build",
			recommended: false,
		},
	];

	const measurementTips = [
		{
			icon: <FiMaximize2 className="h-5 w-5" />,
			title: "How to Measure Length",
			description:
				"Measure from the base of the collar to the bottom hem of the shirt.",
		},
		{
			icon: <FiUser className="h-5 w-5" />,
			title: "How to Measure Chest",
			description:
				"Measure around the fullest part of your chest, keeping the tape measure parallel to the ground.",
		},
	];

	const careInstructions = [
		"Machine wash cold with like colors",
		"Do not bleach",
		"Tumble dry low heat",
		"Iron on low to medium heat if needed",
		"Wash dark colors separately",
	];

	// Structured data for Size Guide page
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "Size Guide - VENTAGE Polo T-Shirts",
		description:
			"Complete size guide for VENTAGE polo t-shirts with measurements and fitting tips.",
		mainEntity: {
			"@type": "SizeChart",
			name: "VENTAGE Polo T-Shirt Size Chart",
			hasMeasurement: sizeData.map((size) => ({
				"@type": "QuantitativeValue",
				name: `Size ${size.size}`,
				value: size.length,
				unitText: "inches",
				additionalProperty: {
					"@type": "PropertyValue",
					name: "Chest",
					value: size.chest,
					unitText: "inches",
				},
			})),
		},
	};

	return (
		<>
			<SEO
				title="Size Guide - VENTAGE Polo T-Shirts | UniquePoint"
				description="Complete size guide for VENTAGE polo t-shirts. Find your perfect fit with detailed measurements for M, L, XL, and XXL sizes."
				keywords="size guide, polo t-shirt sizes, measurements, VENTAGE, fitting guide, chest size, length measurements"
				ogType="website"
				ogUrl="https://unique-point.com/size-guide"
				structured={structuredData}
				canonical="https://unique-point.com/size-guide"
			/>

			<div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50">
				{/* Header */}
				<div className="bg-gradient-to-r from-white to-primary-50">
					<div className="container mx-auto px-4 py-12">
						<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Size Guide
						</h1>
						<p className="text-lg text-gray-600 max-w-2xl">
							Find your perfect fit with our comprehensive size guide for
							VENTAGE polo t-shirts. Measurements are provided in inches for
							accurate sizing.
						</p>
					</div>
				</div>

				<div className="container mx-auto px-4 py-12">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* Size Chart */}
						<div className="lg:col-span-2">
							<div className="bg-white rounded-xl shadow-md p-6">
								<h2 className="text-2xl font-bold text-gray-900 mb-6">
									VENTAGE Polo T-Shirt Size Chart
								</h2>

								{/* Size Selection */}
								<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
									{sizeData.map((size) => (
										<button
											key={size.size}
											onClick={() => setSelectedSize(size.size)}
											className={`p-4 rounded-lg border-2 transition-all ${
												selectedSize === size.size
													? "border-primary-500 bg-primary-50 text-primary-700"
													: "border-gray-200 hover:border-primary-300 hover:bg-gray-50"
											}`}
										>
											<div className="text-center">
												<div className="flex items-center justify-center mb-2">
													<span className="text-xl font-bold">{size.size}</span>
													{size.recommended && (
														<FiCheckCircle className="h-4 w-4 text-green-500 ml-1" />
													)}
												</div>
												<p className="text-sm text-gray-600">
													{size.description}
												</p>
											</div>
										</button>
									))}
								</div>

								{/* Selected Size Details */}
								<div className="bg-gray-50 rounded-lg p-6 mb-6">
									<div className="text-center">
										<h3 className="text-xl font-bold text-gray-900 mb-4">
											Size {selectedSize} Details
										</h3>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div className="bg-white rounded-lg p-4 shadow-sm">
												<div className="flex items-center justify-center mb-2">
													<FiMaximize2 className="h-5 w-5 text-primary-600 mr-2" />
													<span className="font-semibold text-gray-900">
														Length
													</span>
												</div>
												<p className="text-2xl font-bold text-primary-600">
													{
														sizeData.find((s) => s.size === selectedSize)
															?.length
													}
												</p>
											</div>
											<div className="bg-white rounded-lg p-4 shadow-sm">
												<div className="flex items-center justify-center mb-2">
													<FiUser className="h-5 w-5 text-primary-600 mr-2" />
													<span className="font-semibold text-gray-900">
														Chest
													</span>
												</div>
												<p className="text-2xl font-bold text-primary-600">
													{sizeData.find((s) => s.size === selectedSize)?.chest}
												</p>
											</div>
										</div>
									</div>
								</div>

								{/* Size Chart Table */}
								<div className="overflow-x-auto">
									<table className="w-full border-collapse">
										<thead>
											<tr className="bg-gray-100">
												<th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
													Size
												</th>
												<th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
													Length
												</th>
												<th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
													Chest
												</th>
												<th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
													Description
												</th>
											</tr>
										</thead>
										<tbody>
											{sizeData.map((size) => (
												<tr
													key={size.size}
													className={
														selectedSize === size.size ? "bg-primary-50" : ""
													}
												>
													<td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
														<div className="flex items-center">
															<span>{size.size}</span>
															{size.recommended && (
																<FiCheckCircle className="h-4 w-4 text-green-500 ml-2" />
															)}
														</div>
													</td>
													<td className="border border-gray-300 px-4 py-3 text-gray-700">
														{size.length}
													</td>
													<td className="border border-gray-300 px-4 py-3 text-gray-700">
														{size.chest}
													</td>
													<td className="border border-gray-300 px-4 py-3 text-gray-700">
														{size.description}
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>

						{/* Sidebar */}
						<div className="space-y-6">
							{/* Measurement Tips */}
							<div className="bg-white rounded-xl shadow-md p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									How to Measure
								</h3>
								<div className="space-y-4">
									{measurementTips.map((tip, index) => (
										<div key={index} className="flex items-start space-x-3">
											<div className="bg-primary-100 p-2 rounded-lg text-primary-600">
												{tip.icon}
											</div>
											<div>
												<h4 className="font-semibold text-gray-900 mb-1">
													{tip.title}
												</h4>
												<p className="text-gray-600 text-sm">
													{tip.description}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Care Instructions */}
							<div className="bg-white rounded-xl shadow-md p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									Care Instructions
								</h3>
								<ul className="space-y-2">
									{careInstructions.map((instruction, index) => (
										<li
											key={index}
											className="flex items-center space-x-2 text-sm text-gray-600"
										>
											<FiCheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
											<span>{instruction}</span>
										</li>
									))}
								</ul>
							</div>

							{/* Size Tips */}
							<div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white">
								<h3 className="text-xl font-bold mb-4">Size Tips</h3>
								<div className="space-y-3 text-sm">
									<div className="flex items-start space-x-2">
										<FiAlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
										<span>
											If you're between sizes, we recommend going with the
											larger size for comfort.
										</span>
									</div>
									<div className="flex items-start space-x-2">
										<FiAlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
										<span>
											Our polo t-shirts are designed with a regular fit for
											optimal comfort.
										</span>
									</div>
									<div className="flex items-start space-x-2">
										<FiAlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
										<span>
											Still unsure? Contact us via WhatsApp for personalized
											sizing advice.
										</span>
									</div>
								</div>
								<div className="mt-4">
									<a
										href="https://wa.me/+8801711105888"
										target="_blank"
										rel="noopener noreferrer"
										className="bg-white text-primary-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
									>
										<span className="mr-2">💬</span>
										Get Size Help
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SizeGuide;
