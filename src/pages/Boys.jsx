import React, { useState, useMemo } from "react";
import { FiFilter, FiGrid, FiList } from "react-icons/fi";
import ProductGrid from "../components/product/ProductGrid";
import { getProductsByCategory } from "../data/sampleProducts";
import { AGE_GROUPS, CLOTHING_TYPES } from "../utils/constants";

const Boys = () => {
	const [filters, setFilters] = useState({
		ageGroup: "",
		clothingType: "",
		priceRange: "",
		sortBy: "newest",
	});
	const [showFilters, setShowFilters] = useState(false);

	// Get all boys products
	const allBoysProducts = getProductsByCategory("boys");

	// Apply filters
	const filteredProducts = useMemo(() => {
		let filtered = [...allBoysProducts];

		// Filter by age group
		if (filters.ageGroup) {
			filtered = filtered.filter(
				(product) => product.ageGroup === filters.ageGroup
			);
		}

		// Filter by clothing type
		if (filters.clothingType) {
			filtered = filtered.filter(
				(product) => product.clothingType === filters.clothingType
			);
		}

		// Filter by price range
		if (filters.priceRange) {
			const [min, max] = filters.priceRange.split("-").map(Number);
			filtered = filtered.filter((product) => {
				if (max) {
					return product.price >= min && product.price <= max;
				} else {
					return product.price >= min;
				}
			});
		}

		// Sort products
		switch (filters.sortBy) {
			case "price-low":
				filtered.sort((a, b) => a.price - b.price);
				break;
			case "price-high":
				filtered.sort((a, b) => b.price - a.price);
				break;
			case "popularity":
				filtered.sort((a, b) => b.rating - a.rating);
				break;
			case "newest":
			default:
				filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
				break;
		}

		return filtered;
	}, [allBoysProducts, filters]);

	const handleFilterChange = (key, value) => {
		setFilters((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	const clearFilters = () => {
		setFilters({
			ageGroup: "",
			clothingType: "",
			priceRange: "",
			sortBy: "newest",
		});
	};

	return (
		<div className="container mx-auto px-4 py-8">
			{/* Header */}
			<div className="mb-8">
				<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
					Boys Fashion
				</h1>
				<p className="text-gray-600">
					Discover trendy and comfortable clothing for boys of all ages
				</p>
			</div>

			{/* Hero Banner */}
			<div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-8 mb-8">
				<div className="max-w-2xl">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						New Arrivals for Boys
					</h2>
					<p className="text-blue-100 mb-6">
						Explore our latest collection of stylish and comfortable outfits for
						boys
					</p>
					<div className="flex flex-wrap gap-4">
						<span className="bg-white/20 px-4 py-2 rounded-full text-sm">
							🎯 Trending Styles
						</span>
						<span className="bg-white/20 px-4 py-2 rounded-full text-sm">
							🏃 Active Wear
						</span>
						<span className="bg-white/20 px-4 py-2 rounded-full text-sm">
							🎓 School Wear
						</span>
					</div>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row gap-8">
				{/* Filters Sidebar */}
				<div className="lg:w-1/4">
					{/* Mobile Filter Toggle */}
					<button
						onClick={() => setShowFilters(!showFilters)}
						className="lg:hidden w-full bg-white border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-between mb-4"
					>
						<span className="flex items-center">
							<FiFilter className="h-4 w-4 mr-2" />
							Filters
						</span>
						<span className="text-sm text-gray-500">
							{Object.values(filters).filter(Boolean).length} active
						</span>
					</button>

					{/* Filter Panel */}
					<div
						className={`bg-white rounded-lg border border-gray-200 p-6 space-y-6 ${
							showFilters ? "block" : "hidden lg:block"
						}`}
					>
						<div className="flex items-center justify-between">
							<h3 className="font-semibold text-gray-900">Filters</h3>
							<button
								onClick={clearFilters}
								className="text-sm text-purple-600 hover:text-purple-700"
							>
								Clear All
							</button>
						</div>

						{/* Age Group Filter */}
						<div>
							<h4 className="font-medium text-gray-900 mb-3">Age Group</h4>
							<div className="space-y-2">
								{Object.entries(AGE_GROUPS).map(([key, value]) => (
									<label key={key} className="flex items-center">
										<input
											type="radio"
											name="ageGroup"
											value={value}
											checked={filters.ageGroup === value}
											onChange={(e) =>
												handleFilterChange("ageGroup", e.target.value)
											}
											className="text-purple-600 focus:ring-purple-500"
										/>
										<span className="ml-2 text-sm text-gray-700 capitalize">
											{key.toLowerCase()}
										</span>
									</label>
								))}
							</div>
						</div>

						{/* Clothing Type Filter */}
						<div>
							<h4 className="font-medium text-gray-900 mb-3">Clothing Type</h4>
							<div className="space-y-2">
								{Object.entries(CLOTHING_TYPES).map(([key, value]) => (
									<label key={key} className="flex items-center">
										<input
											type="radio"
											name="clothingType"
											value={value}
											checked={filters.clothingType === value}
											onChange={(e) =>
												handleFilterChange("clothingType", e.target.value)
											}
											className="text-purple-600 focus:ring-purple-500"
										/>
										<span className="ml-2 text-sm text-gray-700">
											{key.replace(/([A-Z])/g, " $1").trim()}
										</span>
									</label>
								))}
							</div>
						</div>

						{/* Price Range Filter */}
						<div>
							<h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
							<div className="space-y-2">
								{[
									{ label: "Under ₹500", value: "0-500" },
									{ label: "₹500 - ₹1000", value: "500-1000" },
									{ label: "₹1000 - ₹2000", value: "1000-2000" },
									{ label: "Above ₹2000", value: "2000" },
								].map((range) => (
									<label key={range.value} className="flex items-center">
										<input
											type="radio"
											name="priceRange"
											value={range.value}
											checked={filters.priceRange === range.value}
											onChange={(e) =>
												handleFilterChange("priceRange", e.target.value)
											}
											className="text-purple-600 focus:ring-purple-500"
										/>
										<span className="ml-2 text-sm text-gray-700">
											{range.label}
										</span>
									</label>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Products Section */}
				<div className="lg:w-3/4">
					{/* Sort and View Options */}
					<div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
							<div className="flex items-center space-x-4">
								<span className="text-sm text-gray-700">
									{filteredProducts.length} products found
								</span>
							</div>

							<div className="flex items-center space-x-4">
								{/* Sort Dropdown */}
								<select
									value={filters.sortBy}
									onChange={(e) => handleFilterChange("sortBy", e.target.value)}
									className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
								>
									<option value="newest">Newest First</option>
									<option value="popularity">Most Popular</option>
									<option value="price-low">Price: Low to High</option>
									<option value="price-high">Price: High to Low</option>
								</select>

								{/* View Toggle */}
								<div className="hidden sm:flex items-center space-x-1 border border-gray-300 rounded-lg p-1">
									<button className="p-2 rounded text-purple-600 bg-purple-100">
										<FiGrid className="h-4 w-4" />
									</button>
									<button className="p-2 rounded text-gray-400 hover:text-gray-600">
										<FiList className="h-4 w-4" />
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Products Grid */}
					<ProductGrid products={filteredProducts} />
				</div>
			</div>
		</div>
	);
};

export default Boys;
