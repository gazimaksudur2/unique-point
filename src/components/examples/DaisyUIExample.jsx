import React from "react";

/**
 * Example component demonstrating DaisyUI components alongside custom design
 * This shows how DaisyUI and custom styles work together without conflicts
 */
const DaisyUIExample = () => {
	return (
		<div className="container mx-auto px-4 py-8 space-y-8">
			<div className="text-center mb-8">
				<h2 className="text-3xl font-bold text-gray-900 mb-4">
					DaisyUI + Custom Design Integration
				</h2>
				<p className="text-gray-600">
					This demonstrates how DaisyUI components work alongside your custom
					design system
				</p>
			</div>

			{/* Button Comparison */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="bg-white p-6 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold mb-4 text-gray-900">
						Your Custom Buttons
					</h3>
					<div className="space-y-3">
						<button className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
							Custom Primary Button
						</button>
						<button className="bg-secondary hover:bg-secondary-600 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors">
							Custom Secondary Button
						</button>
						<button className="bg-coral hover:bg-coral-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
							Custom Coral Button
						</button>
					</div>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold mb-4 text-gray-900">
						DaisyUI Buttons
					</h3>
					<div className="space-y-3">
						<button className="btn btn-primary">DaisyUI Primary</button>
						<button className="btn btn-secondary">DaisyUI Secondary</button>
						<button className="btn btn-accent">DaisyUI Accent</button>
						<button className="btn btn-outline">DaisyUI Outline</button>
					</div>
				</div>
			</div>

			{/* Card Comparison */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
					<h3 className="text-xl font-semibold mb-4 text-primary-700">
						Your Custom Card
					</h3>
					<p className="text-gray-600 mb-4">
						This card uses your custom color palette and design system. The
						primary color border and text maintain your brand consistency.
					</p>
					<div className="flex space-x-2">
						<span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
							Custom Badge
						</span>
						<span className="bg-coral-100 text-coral-800 px-3 py-1 rounded-full text-sm font-medium">
							Coral Badge
						</span>
					</div>
				</div>

				<div className="card bg-base-100 shadow-xl">
					<div className="card-body">
						<h3 className="card-title text-xl">DaisyUI Card</h3>
						<p className="text-base-content/70">
							This is a DaisyUI card component with default styling. It works
							alongside your custom components without conflicts.
						</p>
						<div className="card-actions justify-end">
							<div className="badge badge-outline">DaisyUI Badge</div>
							<div className="badge badge-secondary">Secondary</div>
						</div>
					</div>
				</div>
			</div>

			{/* Form Elements */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="bg-white p-6 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold mb-4 text-gray-900">
						Custom Form Elements
					</h3>
					<div className="space-y-4">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Custom Input
							</label>
							<input
								type="text"
								placeholder="Your custom input styling"
								className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Custom Select
							</label>
							<select className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors">
								<option>Option 1</option>
								<option>Option 2</option>
							</select>
						</div>
					</div>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold mb-4 text-gray-900">
						DaisyUI Form Elements
					</h3>
					<div className="space-y-4">
						<div className="form-control">
							<label className="label">
								<span className="label-text">DaisyUI Input</span>
							</label>
							<input
								type="text"
								placeholder="DaisyUI input styling"
								className="input input-bordered w-full"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">DaisyUI Select</span>
							</label>
							<select className="select select-bordered w-full">
								<option disabled selected>
									Pick one
								</option>
								<option>Option 1</option>
								<option>Option 2</option>
							</select>
						</div>
					</div>
				</div>
			</div>

			{/* Advanced DaisyUI Components */}
			<div className="bg-white p-6 rounded-lg shadow-md">
				<h3 className="text-xl font-semibold mb-4 text-gray-900">
					Advanced DaisyUI Components
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Modal Example */}
					<div>
						<h4 className="font-medium mb-2">Modal</h4>
						<label htmlFor="my-modal" className="btn btn-primary btn-sm">
							Open Modal
						</label>
						<input type="checkbox" id="my-modal" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								<h3 className="font-bold text-lg">Hello!</h3>
								<p className="py-4">
									This is a DaisyUI modal working with your design.
								</p>
								<div className="modal-action">
									<label htmlFor="my-modal" className="btn">
										Close
									</label>
								</div>
							</div>
						</div>
					</div>

					{/* Alert Example */}
					<div>
						<h4 className="font-medium mb-2">Alert</h4>
						<div className="alert alert-info shadow-lg">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="stroke-current flex-shrink-0 w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
								<span>DaisyUI Alert!</span>
							</div>
						</div>
					</div>

					{/* Progress Example */}
					<div>
						<h4 className="font-medium mb-2">Progress</h4>
						<progress
							className="progress progress-primary w-full"
							value="70"
							max="100"
						></progress>
						<progress
							className="progress progress-secondary w-full mt-2"
							value="40"
							max="100"
						></progress>
					</div>
				</div>
			</div>

			{/* Color Preservation Notice */}
			<div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg">
				<h3 className="text-lg font-semibold text-primary-800 mb-2">
					✅ Your Custom Design Preserved
				</h3>
				<p className="text-primary-700">
					Notice how your custom color palette (Primary: #A1C398, Secondary:
					#C6EBC5, Cream: #FEFDED, Coral: #FA7070) takes precedence over
					DaisyUI's default colors. Your existing components remain unchanged
					while gaining access to DaisyUI's additional components like modals,
					alerts, and advanced form elements.
				</p>
			</div>
		</div>
	);
};

export default DaisyUIExample;
