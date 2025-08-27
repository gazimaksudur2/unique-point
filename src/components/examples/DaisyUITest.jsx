import React from "react";

/**
 * Simple test component to verify DaisyUI is working correctly
 */
const DaisyUITest = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="text-center mb-8">
				<h1 className="text-4xl font-bold mb-4">DaisyUI Test Page</h1>
				<p className="text-gray-600">
					Testing if DaisyUI components are rendering correctly
				</p>
			</div>

			{/* Basic Button Test */}
			<div className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Button Test</h2>
				<div className="flex flex-wrap gap-4">
					<button className="btn">Default Button</button>
					<button className="btn btn-primary">Primary Button</button>
					<button className="btn btn-secondary">Secondary Button</button>
					<button className="btn btn-accent">Accent Button</button>
					<button className="btn btn-success">Success Button</button>
					<button className="btn btn-warning">Warning Button</button>
					<button className="btn btn-error">Error Button</button>
					<button className="btn btn-outline">Outline Button</button>
					<button className="btn btn-ghost">Ghost Button</button>
				</div>
			</div>

			{/* Card Test */}
			<div className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Card Test</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="card bg-base-100 shadow-xl">
						<div className="card-body">
							<h2 className="card-title">Card Title</h2>
							<p>
								If you can see this card with proper styling, DaisyUI is
								working!
							</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">Action</button>
							</div>
						</div>
					</div>

					<div className="card bg-white shadow-xl border">
						<div className="card-body">
							<h2 className="card-title">Custom White Card</h2>
							<p>
								This card uses custom white background to ensure visibility.
							</p>
							<div className="card-actions justify-end">
								<button className="btn btn-secondary">Action</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Badge Test */}
			<div className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Badge Test</h2>
				<div className="flex flex-wrap gap-4">
					<div className="badge">Default Badge</div>
					<div className="badge badge-primary">Primary Badge</div>
					<div className="badge badge-secondary">Secondary Badge</div>
					<div className="badge badge-accent">Accent Badge</div>
					<div className="badge badge-outline">Outline Badge</div>
				</div>
			</div>

			{/* Alert Test */}
			<div className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Alert Test</h2>
				<div className="space-y-4">
					<div className="alert">
						<span>Default alert - informative message!</span>
					</div>
					<div className="alert alert-info">
						<span>Info alert - additional information!</span>
					</div>
					<div className="alert alert-success">
						<span>Success alert - operation completed!</span>
					</div>
					<div className="alert alert-warning">
						<span>Warning alert - please be careful!</span>
					</div>
					<div className="alert alert-error">
						<span>Error alert - something went wrong!</span>
					</div>
				</div>
			</div>

			{/* Form Elements Test */}
			<div className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Form Elements Test</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text">What is your name?</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full"
						/>
						<label className="label">
							<span className="label-text-alt">Bottom Left label</span>
							<span className="label-text-alt">Bottom Right label</span>
						</label>
					</div>

					<div className="form-control w-full">
						<label className="label">
							<span className="label-text">Pick the best option</span>
						</label>
						<select className="select select-bordered">
							<option disabled selected>
								Pick one
							</option>
							<option>Option 1</option>
							<option>Option 2</option>
							<option>Option 3</option>
						</select>
					</div>
				</div>
			</div>

			{/* Progress Test */}
			<div className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Progress Test</h2>
				<div className="space-y-4">
					<progress className="progress w-full" value="0" max="100"></progress>
					<progress
						className="progress progress-primary w-full"
						value="25"
						max="100"
					></progress>
					<progress
						className="progress progress-secondary w-full"
						value="50"
						max="100"
					></progress>
					<progress
						className="progress progress-accent w-full"
						value="75"
						max="100"
					></progress>
					<progress
						className="progress progress-success w-full"
						value="100"
						max="100"
					></progress>
				</div>
			</div>

			{/* Status Check */}
			<div className="bg-green-50 border border-green-200 rounded-lg p-6">
				<h3 className="text-lg font-semibold text-green-800 mb-2">
					DaisyUI Status Check
				</h3>
				<div className="text-green-700">
					<p className="mb-2">
						✅ If you can see styled buttons above, DaisyUI buttons are working
					</p>
					<p className="mb-2">
						✅ If you can see styled cards above, DaisyUI cards are working
					</p>
					<p className="mb-2">
						✅ If you can see colored badges above, DaisyUI badges are working
					</p>
					<p className="mb-2">
						✅ If you can see styled alerts above, DaisyUI alerts are working
					</p>
					<p className="mb-2">
						✅ If you can see styled form elements above, DaisyUI forms are
						working
					</p>
					<p>
						✅ If you can see styled progress bars above, DaisyUI progress is
						working
					</p>
				</div>
			</div>

			{/* Custom Colors Test */}
			<div className="mt-8 bg-primary-50 border border-primary-200 rounded-lg p-6">
				<h3 className="text-lg font-semibold text-primary-800 mb-2">
					Your Custom Colors Test
				</h3>
				<div className="space-y-2">
					<div className="flex items-center space-x-4">
						<div className="w-6 h-6 bg-primary rounded"></div>
						<span>Primary Color: #A1C398</span>
					</div>
					<div className="flex items-center space-x-4">
						<div className="w-6 h-6 bg-secondary rounded"></div>
						<span>Secondary Color: #C6EBC5</span>
					</div>
					<div className="flex items-center space-x-4">
						<div className="w-6 h-6 bg-cream rounded border"></div>
						<span>Cream Color: #FEFDED</span>
					</div>
					<div className="flex items-center space-x-4">
						<div className="w-6 h-6 bg-coral rounded"></div>
						<span>Coral Color: #FA7070</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DaisyUITest;
