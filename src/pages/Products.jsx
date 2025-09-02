import React, { useState, useMemo } from "react";
import { FiFilter, FiGrid, FiList } from "react-icons/fi";
import ProductGrid from "../components/product/ProductGrid";
import { sampleProducts } from "../data/sampleProducts";
import SEO from "../components/common/SEO";
import { AGE_GROUPS, CLOTHING_TYPES } from "../utils/constants";

const Products = () => {
	const [filters, setFilters] = useState({
		category: "",
		ageGroup: "",
		clothingType: "",
		priceRange: "",
		sortBy: "newest",
	});
	const [showFilters, setShowFilters] = useState(false);

	// Get all products
	const allProducts = sampleProducts;

	// Apply filters
	const filteredProducts = useMemo(() => {
		let filtered = [...allProducts];

		// Filter by category
		if (filters.category) {
			filtered = filtered.filter(
				(product) => product.category === filters.category
			);
		}

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
	}, [allProducts, filters]);

	const handleFilterChange = (key, value) => {
		setFilters((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	const clearFilters = () => {
		setFilters({
			category: "",
			ageGroup: "",
			clothingType: "",
			priceRange: "",
			sortBy: "newest",
		});
	};

	// Structured data for Products page
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "All Products - Fashion Collection",
		description:
			"Premium fashion collection featuring clothing and accessories for all ages",
		url: "https://unique-point.com/products",
		mainEntity: {
			"@type": "ItemList",
			numberOfItems: allProducts.length,
			itemListElement: allProducts.slice(0, 5).map((product, index) => ({
				"@type": "Product",
				position: index + 1,
				name: product.name,
				description: product.description || "Premium fashion product",
				brand: {
					"@type": "Brand",
					name: product.brand,
				},
				offers: {
					"@type": "Offer",
					price: product.price,
					priceCurrency: "INR",
					availability: "https://schema.org/InStock",
				},
			})),
		},
	};

	return (
		<>
			<SEO
				title="All Products - Premium Fashion Collection"
				description="Shop our complete collection of premium fashion products. Discover clothing and accessories for all ages with free shipping over ₹999 and easy returns."
				keywords="fashion products, clothing, accessories, premium fashion, kids wear, teens wear, ethnic wear, casual wear"
				ogType="website"
				ogUrl="https://unique-point.com/products"
				structured={structuredData}
				canonical="https://unique-point.com/products"
			/>

			<div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50">
				{/* Header */}
				<div className="bg-gradient-to-r from-white to-primary-50">
					<div className="container mx-auto px-4 py-12">
						<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							All Products
						</h1>
						<p className="text-lg text-gray-600 max-w-2xl">
							Discover our complete collection of premium fashion products for
							all ages. From casual wear to special occasions.
						</p>
					</div>
				</div>

				{/* Hero Banner */}
				<div
					id="banner"
					className="bg-gradient-to-r from-primary-700 to-primary-800 text-white"
				>
					<div className="container mx-auto px-4 py-16">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div className="space-y-6">
								<h2 className="text-3xl md:text-4xl font-bold">
									Complete Fashion Collection
								</h2>
								<p className="text-lg text-white/90">
									Explore our entire range of stylish and comfortable products
									designed for everyone
								</p>
								<div className="grid grid-cols-2 gap-4">
									<div className="bg-primary-700 p-6 rounded-xl text-center border border-primary-500 hover:bg-primary-800 transition-colors">
										<div className="text-3xl mb-3">👶</div>
										<div className="font-semibold text-white">
											Kids Collection
										</div>
									</div>
									<div className="bg-secondary-600 p-6 rounded-xl text-center border border-secondary-500 hover:bg-secondary-700 transition-colors">
										<div className="text-3xl mb-3">👗</div>
										<div className="font-semibold text-white">Teen Fashion</div>
									</div>
								</div>
							</div>
							<div className="hidden lg:block">
								<div className="bg-gradient-to-br from-white via-primary-50 to-secondary-50 rounded-2xl p-12 shadow-2xl border-4 border-primary-200 hover:shadow-3xl transition-all">
									<div className="text-center space-y-4">
										<div className="text-8xl">🛍️</div>
										<div className="text-primary-700 font-bold text-xl">
											ALL PRODUCTS
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container mx-auto px-4 py-8">
					<div className="flex flex-col lg:flex-row gap-8">
						{/* Filters Sidebar */}
						<div id="filters" className="lg:w-1/4">
							{/* Mobile Filter Toggle */}
							<button
								onClick={() => setShowFilters(!showFilters)}
								className="lg:hidden w-full bg-white border border-gray-300 rounded-lg px-6 py-4 flex items-center justify-between mb-6 font-semibold hover:border-primary-300 transition-colors shadow-sm"
							>
								<span className="flex items-center">
									<FiFilter className="h-5 w-5 mr-3 text-primary-700" />
									FILTERS
								</span>
								<span className="bg-primary-700 text-white px-3 py-1 rounded-full text-sm font-bold">
									{Object.values(filters).filter(Boolean).length}
								</span>
							</button>

							{/* Filter Panel */}
							<div
								className={`bg-white rounded-xl border border-gray-200 p-6 space-y-6 shadow-md ${
									showFilters ? "block" : "hidden lg:block"
								}`}
							>
								<div className="flex items-center justify-between">
									<h3 className="font-bold text-lg text-gray-900">Filters</h3>
									<button
										onClick={clearFilters}
										className="text-sm bg-danger-100 text-danger-700 px-3 py-1 rounded-md font-medium hover:bg-danger-200 transition-colors"
									>
										Clear All
									</button>
								</div>

								{/* Category Filter */}
								<div>
									<h4 className="font-bold text-lg text-primary-800 mb-4">
										CATEGORY
									</h4>
									<div className="space-y-2">
										{[
											{ label: "Boys", value: "boys" },
											{ label: "Girls", value: "girls" },
										].map((category) => (
											<label key={category.value} className="flex items-center">
												<input
													type="radio"
													name="category"
													value={category.value}
													checked={filters.category === category.value}
													onChange={(e) =>
														handleFilterChange("category", e.target.value)
													}
													className="text-primary-600 focus:ring-primary-500"
												/>
												<span className="ml-2 text-sm text-gray-700">
													{category.label}
												</span>
											</label>
										))}
									</div>
								</div>

								{/* Age Group Filter */}
								<div>
									<h4 className="font-bold text-lg text-primary-800 mb-4">
										AGE GROUP
									</h4>
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
													className="text-primary-600 focus:ring-primary-500"
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
									<h4 className="font-bold text-lg text-primary-800 mb-4">
										CLOTHING TYPE
									</h4>
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
													className="text-primary-600 focus:ring-primary-500"
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
									<h4 className="font-bold text-lg text-primary-800 mb-4">
										PRICE RANGE
									</h4>
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
													className="text-primary-600 focus:ring-primary-500"
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
							<div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-md">
								<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
									<div className="flex items-center space-x-6">
										<span className="text-lg font-semibold text-gray-900">
											{filteredProducts.length} products found
										</span>
									</div>

									<div className="flex items-center space-x-6">
										{/* Sort Dropdown */}
										<div className="flex items-center space-x-3">
											<label className="font-semibold text-primary-700">
												SORT BY:
											</label>
											<select
												value={filters.sortBy}
												onChange={(e) =>
													handleFilterChange("sortBy", e.target.value)
												}
												className="border-2 border-gray-300 rounded-lg px-4 py-2 font-semibold focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
											>
												<option value="newest">Newest First</option>
												<option value="popularity">Most Popular</option>
												<option value="price-low">Price: Low to High</option>
												<option value="price-high">Price: High to Low</option>
											</select>
										</div>

										{/* View Toggle */}
										<div className="hidden sm:flex items-center space-x-1 border-2 border-gray-300 rounded-lg p-1">
											<button className="p-3 rounded text-white bg-primary-700">
												<FiGrid className="h-5 w-5" />
											</button>
											<button className="p-3 rounded text-gray-500 hover:text-primary-700">
												<FiList className="h-5 w-5" />
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
			</div>
		</>
	);
};

export default Products;
