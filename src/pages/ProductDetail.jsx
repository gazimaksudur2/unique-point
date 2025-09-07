import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
	FiHeart,
	FiShoppingCart,
	FiStar,
	FiArrowLeft,
	FiShare2,
	FiCheck,
	FiTruck,
	FiShield,
	FiRotateCcw,
	FiX,
	FiCreditCard,
	FiClock,
} from "react-icons/fi";
import { useApp } from "../context/AppContext";
import products from "../data/products";
import SEO from "../components/common/SEO";
import ProductCard from "../components/product/ProductCard";

const ProductDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { addToCart, toggleWishlist, isInWishlist, clearCart } = useApp();

	// Find product by ID
	const product = products.find((p) => p.id === parseInt(id));

	// Component state
	const [selectedImage, setSelectedImage] = useState(0);
	const [selectedSize, setSelectedSize] = useState("");
	const [selectedColor, setSelectedColor] = useState("");
	const [quantity, setQuantity] = useState(1);
	const [showSizeGuide, setShowSizeGuide] = useState(false);
	const [showImageZoom, setShowImageZoom] = useState(false);

	// If product not found, redirect to products page
	useEffect(() => {
		if (!product) {
			navigate("/products");
		} else {
			// Set default selections
			if (product.sizes && product.sizes.length > 0) {
				setSelectedSize(product.sizes[0]);
			}
			if (product.colors && product.colors.length > 0) {
				setSelectedColor(product.colors[0]);
			}
		}
	}, [product, navigate]);

	// Early return if product not found
	if (!product) {
		return null;
	}

	const inWishlist = isInWishlist(product.id);
	const discountPercentage = Math.round(
		((product.originalPrice - product.price) / product.originalPrice) * 100
	);

	// Get related products (same category, excluding current product)
	const relatedProducts = products
		.filter((p) => p.category === product.category && p.id !== product.id)
		.slice(0, 4);

	const handleAddToCart = () => {
		const cartItem = {
			id: product.id,
			name: product.name,
			price: product.price,
			originalPrice: product.originalPrice,
			images: product.images,
			brand: product.brand,
			size: selectedSize || "One Size",
			color: selectedColor || "Default",
			quantity: quantity,
		};

		addToCart(cartItem);
	};

	const handleToggleWishlist = () => {
		toggleWishlist({
			id: product.id,
			name: product.name,
			price: product.price,
			originalPrice: product.originalPrice,
			images: product.images,
			brand: product.brand,
			sizes: product.sizes,
			colors: product.colors,
		});
	};

	const handleOrderNow = () => {
		// Clear current cart and add only this product
		clearCart();

		const cartItem = {
			id: product.id,
			name: product.name,
			price: product.price,
			originalPrice: product.originalPrice,
			images: product.images,
			brand: product.brand,
			size: selectedSize || product.sizes?.[0] || "One Size",
			color: selectedColor || product.colors?.[0] || "Default",
			quantity: quantity,
		};

		addToCart(cartItem);
		navigate("/checkout");
	};

	// Structured data for SEO
	const structuredData = {
		"@context": "https://schema.org/",
		"@type": "Product",
		name: product.name,
		image: product.images,
		description: product.description,
		brand: {
			"@type": "Brand",
			name: product.brand,
		},
		offers: {
			"@type": "Offer",
			url: `https://uniquepointbd.com/product/${product.id}`,
			priceCurrency: "BDT",
			price: product.price,
			availability: "https://schema.org/InStock",
		},
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.8",
			reviewCount: "127",
		},
	};

	return (
		<>
			<SEO
				title={`${product.name} - ${product.brand} | UniquePoint`}
				description={`${product.description} Available in multiple sizes and colors. Price: ৳${product.price}. Free shipping over ৳999.`}
				keywords={`${product.name}, ${product.brand}, ${product.category}, ${
					product.ageGroup
				}, ${product.tags?.join(", ")}, kids fashion, premium clothing`}
				ogType="product"
				ogUrl={`https://uniquepointbd.com/product/${product.id}`}
				ogImage={product.images[0]}
				structured={structuredData}
				canonical={`https://uniquepointbd.com/product/${product.id}`}
			/>

			<div className="min-h-screen bg-gray-50">
				{/* Breadcrumb */}
				<div className="bg-white border-b border-gray-200">
					<div className="container mx-auto px-4 py-3 sm:py-4">
						<div className="flex items-center space-x-2 text-sm">
							<Link to="/" className="text-gray-500 hover:text-primary-600">
								Home
							</Link>
							<span className="text-gray-300">/</span>
							<Link
								to="/products"
								className="text-gray-500 hover:text-primary-600"
							>
								Products
							</Link>
							<span className="text-gray-300">/</span>
							<span className="text-gray-900 font-medium truncate">
								{product.name}
							</span>
						</div>
					</div>
				</div>

				{/* Back Button - Mobile */}
				<div className="lg:hidden bg-white border-b border-gray-200">
					<div className="container mx-auto px-4 py-3">
						<button
							onClick={() => navigate(-1)}
							className="flex items-center space-x-2 text-gray-700 hover:text-primary-600"
						>
							<FiArrowLeft className="h-5 w-5" />
							<span>Back</span>
						</button>
					</div>
				</div>

				{/* Main Product Section */}
				<div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
						{/* Product Images */}
						<div className="space-y-4">
							{/* Main Image */}
							<div
								className="relative aspect-square bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md group cursor-pointer"
								onClick={() => setShowImageZoom(true)}
							>
								<img
									src={product.images[selectedImage]}
									alt={product.name}
									className="w-full h-full object-cover transition-transform group-hover:scale-105"
								/>
							</div>

							{/* Thumbnail Images */}
							{product.images.length > 1 && (
								<div className="flex space-x-2 sm:space-x-4">
									{product.images.map((image, index) => (
										<button
											key={index}
											onClick={() => setSelectedImage(index)}
											className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-colors ${
												selectedImage === index
													? "border-primary-600"
													: "border-gray-200 hover:border-gray-300"
											}`}
										>
											<img
												src={image}
												alt={`${product.name} ${index + 1}`}
												className="w-full h-full object-cover"
											/>
										</button>
									))}
								</div>
							)}
						</div>

						{/* Product Information */}
						<div className="space-y-6">
							{/* Product Header */}
							<div className="space-y-2 sm:space-y-4">
								{/* Badges */}
								<div className="flex flex-wrap gap-2">
									{product.isNew && (
										<span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
											NEW
										</span>
									)}
									{product.isBestseller && (
										<span className="bg-secondary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
											BESTSELLER
										</span>
									)}
									{discountPercentage > 0 && (
										<span className="bg-coral text-white text-xs font-bold px-2 py-1 rounded-full">
											{discountPercentage}% OFF
										</span>
									)}
								</div>

								{/* Brand & Title */}
								<div>
									<p className="text-sm text-gray-600 font-medium">
										{product.brand}
									</p>
									<h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
										{product.name}
									</h1>
								</div>

								{/* Rating */}
								<div className="flex items-center space-x-2">
									<div className="flex items-center">
										{[...Array(5)].map((_, i) => (
											<FiStar
												key={i}
												className={`h-4 w-4 ${
													i < Math.floor(product.rating || 4.5)
														? "text-yellow-400 fill-current"
														: "text-gray-300"
												}`}
											/>
										))}
									</div>
									<span className="text-sm text-gray-600">
										({product.reviewCount || 0} reviews)
									</span>
								</div>

								{/* Price */}
								<div className="flex items-center space-x-3">
									<span className="text-2xl sm:text-3xl font-bold text-primary-700">
										৳{product.price}
									</span>
									{product.originalPrice > product.price && (
										<span className="text-lg text-gray-500 line-through">
											৳{product.originalPrice}
										</span>
									)}
								</div>
							</div>

							{/* Product Options */}
							<div className="space-y-4 sm:space-y-6">
								{/* Size Selection */}
								{product.sizes && product.sizes.length > 0 && (
									<div>
										<div className="flex items-center justify-between mb-3">
											<label className="block text-sm font-medium text-gray-900">
												Size: <span className="font-bold">{selectedSize}</span>
											</label>
											<button
												onClick={() => setShowSizeGuide(!showSizeGuide)}
												className="text-sm text-primary-600 hover:text-primary-700 underline"
											>
												Size Guide
											</button>
										</div>
										<div className="flex flex-wrap gap-2">
											{product.sizes.map((size) => (
												<button
													key={size}
													onClick={() => setSelectedSize(size)}
													className={`px-3 py-2 text-sm font-medium rounded-lg border transition-colors ${
														selectedSize === size
															? "border-primary-600 bg-primary-50 text-primary-700"
															: "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
													}`}
												>
													{size}
												</button>
											))}
										</div>
									</div>
								)}

								{/* Color Selection */}
								{product.colors && product.colors.length > 0 && (
									<div>
										<label className="block text-sm font-medium text-gray-900 mb-3">
											Color: <span className="font-bold">{selectedColor}</span>
										</label>
										<div className="flex flex-wrap gap-2">
											{product.colors.map((color) => (
												<button
													key={color}
													onClick={() => setSelectedColor(color)}
													className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
														selectedColor === color
															? "border-primary-600 bg-primary-50 text-primary-700"
															: "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
													}`}
												>
													{color}
												</button>
											))}
										</div>
									</div>
								)}

								{/* Quantity */}
								<div>
									<label className="block text-sm font-medium text-gray-900 mb-3">
										Quantity
									</label>
									<div className="flex items-center space-x-3">
										<button
											onClick={() => setQuantity(Math.max(1, quantity - 1))}
											className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
										>
											-
										</button>
										<span className="w-12 text-center font-medium">
											{quantity}
										</span>
										<button
											onClick={() => setQuantity(quantity + 1)}
											className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
										>
											+
										</button>
									</div>
								</div>
							</div>

							{/* Action Buttons */}
							<div className="space-y-3 sm:space-y-4">
								<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
									<button
										onClick={handleOrderNow}
										disabled={!selectedSize && product.sizes?.length > 0}
										className="flex-1 bg-gradient-to-r from-coral to-red-500 hover:from-red-500 hover:to-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl"
									>
										<FiCreditCard className="h-5 w-5" />
										<span>Order Now</span>
									</button>
									<button
										onClick={handleAddToCart}
										disabled={!selectedSize && product.sizes?.length > 0}
										className="flex-1 bg-primary-700 hover:bg-primary-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors"
									>
										<FiShoppingCart className="h-5 w-5" />
										<span>Add to Cart</span>
									</button>
									<button
										onClick={handleToggleWishlist}
										className={`px-6 py-3 rounded-lg border-2 font-semibold transition-colors flex items-center justify-center space-x-2 ${
											inWishlist
												? "border-coral bg-coral text-white"
												: "border-gray-300 text-gray-700 hover:border-coral hover:text-coral"
										}`}
									>
										<FiHeart
											className={`h-5 w-5 ${inWishlist ? "fill-current" : ""}`}
										/>
										<span className="hidden sm:inline">
											{inWishlist ? "In Wishlist" : "Add to Wishlist"}
										</span>
									</button>
								</div>

								{/* Share Button */}
								<button
									onClick={() => {
										if (navigator.share) {
											navigator.share({
												title: product.name,
												text: product.description,
												url: window.location.href,
											});
										}
									}}
									className="w-full sm:w-auto border border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600 font-medium py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
								>
									<FiShare2 className="h-4 w-4" />
									<span>Share</span>
								</button>
							</div>

							{/* Product Features */}
							<div className="bg-gray-50 rounded-lg p-4 space-y-3">
								{/* Fast Delivery Highlight */}
								<div className="flex items-center space-x-3 bg-green-50 border border-green-200 rounded-lg p-3">
									<FiClock className="h-5 w-5 text-green-600" />
									<span className="text-sm font-semibold text-green-800">
										🚀 Delivery within 1-3 days
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<FiTruck className="h-5 w-5 text-green-600" />
									<span className="text-sm text-gray-700">
										{product.shipping?.deliveryCharges?.dhaka
											? `Delivery: ৳${product.shipping.deliveryCharges.dhaka} (Dhaka), ৳${product.shipping.deliveryCharges.outsideDhaka} (Outside)`
											: "Free delivery on orders above ৳999"}
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<FiRotateCcw className="h-5 w-5 text-blue-600" />
									<span className="text-sm text-gray-700">
										{product.returnPolicy?.returnWindowDays
											? `${product.returnPolicy.returnWindowDays}-day easy returns`
											: "15-day easy returns"}
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<FiShield className="h-5 w-5 text-purple-600" />
									<span className="text-sm text-gray-700">
										{product.warranty?.washGuarantee
											? "Wash guarantee included"
											: "Quality assured"}
									</span>
								</div>
								{product.offer?.launchPromo && (
									<div className="flex items-center space-x-3">
										<FiCheck className="h-5 w-5 text-orange-600" />
										<span className="text-sm text-gray-700 font-medium">
											{product.offer.promoNote}
										</span>
									</div>
								)}
							</div>
						</div>
					</div>

					{/* Product Details Tabs */}
					<div className="mt-12 lg:mt-16">
						<div className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden">
							<div className="p-6 sm:p-8">
								<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
									Product Details
								</h2>

								<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
									{/* Description */}
									<div>
										<h3 className="text-lg font-semibold text-gray-900 mb-3">
											Description
										</h3>
										<p className="text-gray-700 leading-relaxed">
											{product.description}
										</p>

										{/* Highlights */}
										{product.highlights && product.highlights.length > 0 && (
											<div className="mt-6">
												<h4 className="text-md font-semibold text-gray-900 mb-3">
													Key Features
												</h4>
												<ul className="space-y-2">
													{product.highlights.map((highlight, index) => (
														<li
															key={index}
															className="flex items-start space-x-2"
														>
															<FiCheck className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
															<span className="text-gray-700">{highlight}</span>
														</li>
													))}
												</ul>
											</div>
										)}

										{/* Minimal Size Chart */}
										{product.sizes && product.sizes.length > 0 && (
											<div className="mt-6">
												<h4 className="text-md font-semibold text-gray-900 mb-3">
													Size Chart
												</h4>
												<div className="bg-gray-50 rounded-lg p-4">
													{/* Short Size Chart Table */}
													<div className="overflow-x-auto mb-3">
														<table className="w-full text-sm">
															<thead>
																<tr className="border-b border-gray-300">
																	<th className="text-left py-2 font-semibold text-gray-900">
																		Size
																	</th>
																	<th className="text-left py-2 font-semibold text-gray-900">
																		Chest
																	</th>
																	<th className="text-left py-2 font-semibold text-gray-900">
																		Age
																	</th>
																</tr>
															</thead>
															<tbody>
																<tr className="border-b border-gray-200">
																	<td className="py-2 font-medium">XS</td>
																	<td className="py-2">24-26"</td>
																	<td className="py-2">2-3 yrs</td>
																</tr>
																<tr className="border-b border-gray-200">
																	<td className="py-2 font-medium">S</td>
																	<td className="py-2">26-28"</td>
																	<td className="py-2">3-4 yrs</td>
																</tr>
																<tr className="border-b border-gray-200">
																	<td className="py-2 font-medium">M</td>
																	<td className="py-2">28-30"</td>
																	<td className="py-2">4-5 yrs</td>
																</tr>
																<tr className="border-b border-gray-200">
																	<td className="py-2 font-medium">L</td>
																	<td className="py-2">30-32"</td>
																	<td className="py-2">5-6 yrs</td>
																</tr>
																<tr>
																	<td className="py-2 font-medium">XL</td>
																	<td className="py-2">32-34"</td>
																	<td className="py-2">6-7 yrs</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
														{product.sizes.map((size) => (
															<div
																key={size}
																className={`text-center py-2 px-3 rounded-md border text-sm font-medium ${
																	selectedSize === size
																		? "border-primary-600 bg-primary-50 text-primary-700"
																		: "border-gray-200 bg-white text-gray-700"
																}`}
															>
																{size}
															</div>
														))}
													</div>
													<p className="text-xs text-gray-500 mt-3 text-center">
														* Select your size above for accurate fit
													</p>
												</div>
											</div>
										)}
									</div>

									{/* Specifications */}
									<div>
										<h3 className="text-lg font-semibold text-gray-900 mb-3">
											Specifications
										</h3>
										<div className="space-y-2">
											<div className="flex justify-between py-2 border-b border-gray-100">
												<span className="text-gray-600">Brand</span>
												<span className="font-medium">{product.brand}</span>
											</div>
											<div className="flex justify-between py-2 border-b border-gray-100">
												<span className="text-gray-600">Material</span>
												<span className="font-medium">{product.material}</span>
											</div>
											<div className="flex justify-between py-2 border-b border-gray-100">
												<span className="text-gray-600">Category</span>
												<span className="font-medium capitalize">
													{product.category}
												</span>
											</div>
											<div className="flex justify-between py-2 border-b border-gray-100">
												<span className="text-gray-600">Age Group</span>
												<span className="font-medium capitalize">
													{product.ageGroup}
												</span>
											</div>
											<div className="flex justify-between py-2 border-b border-gray-100">
												<span className="text-gray-600">Gender</span>
												<span className="font-medium capitalize">
													{product.gender}
												</span>
											</div>
											<div className="flex justify-between py-2 border-b border-gray-100">
												<span className="text-gray-600">Style</span>
												<span className="font-medium capitalize">
													{product.style}
												</span>
											</div>
											<div className="flex justify-between py-2 border-b border-gray-100">
												<span className="text-gray-600">Fit</span>
												<span className="font-medium capitalize">
													{product.fit}
												</span>
											</div>
											<div className="flex justify-between py-2 border-b border-gray-100">
												<span className="text-gray-600">Season</span>
												<span className="font-medium capitalize">
													{product.season}
												</span>
											</div>
											<div className="flex justify-between py-2 border-b border-gray-100">
												<span className="text-gray-600">Origin</span>
												<span className="font-medium">
													{product.countryOfOrigin}
												</span>
											</div>
											{product.fabricDetails && (
												<div className="pt-2">
													<span className="text-gray-600">Fabric Details:</span>
													<div className="text-sm text-gray-700 mt-1 space-y-1">
														<div>Type: {product.fabricDetails.type}</div>
														<div>GSM: {product.fabricDetails.gsm}</div>
														<div>Stretch: {product.fabricDetails.stretch}</div>
														<div>
															Breathability:{" "}
															{product.fabricDetails.breathability}
														</div>
													</div>
												</div>
											)}
											{product.careInstructions && (
												<div className="pt-2">
													<span className="text-gray-600">
														Care Instructions:
													</span>
													<ul className="text-sm text-gray-700 mt-1 list-disc list-inside space-y-1">
														{product.careInstructions.map(
															(instruction, index) => (
																<li key={index}>{instruction}</li>
															)
														)}
													</ul>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Related Products */}
					{relatedProducts.length > 0 && (
						<div className="mt-12 lg:mt-16">
							<div className="text-center mb-8">
								<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
									You Might Also Like
								</h2>
								<p className="text-gray-600">
									Similar products from the same category
								</p>
							</div>
							<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
								{relatedProducts.map((relatedProduct) => (
									<ProductCard
										key={relatedProduct.id}
										product={relatedProduct}
									/>
								))}
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Size Guide Modal */}
			{showSizeGuide && (
				<div
					className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4"
					onClick={() => setShowSizeGuide(false)}
				>
					<div
						className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-gray-300 shadow-lg shadow-gray-300"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Modal Header */}
						<div className="flex items-center justify-between p-6 border-b border-gray-200">
							<h3 className="text-xl font-bold text-gray-900">Size Guide</h3>
							<button
								onClick={() => setShowSizeGuide(false)}
								className="text-gray-400 hover:text-gray-600 transition-colors"
							>
								<FiX className="h-6 w-6" />
							</button>
						</div>

						{/* Modal Content */}
						<div className="p-6">
							{/* Size Chart Table */}
							<div className="mb-6">
								<h4 className="text-lg font-semibold text-gray-900 mb-4">
									{product.name} - Size Chart
								</h4>

								{/* Generic Size Chart */}
								<div className="overflow-x-auto">
									<table className="w-full border-collapse border border-gray-300">
										<thead>
											<tr className="bg-gray-50">
												<th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
													Size
												</th>
												<th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
													Chest (inches)
												</th>
												<th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
													Length (inches)
												</th>
												<th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
													Age Range
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="border border-gray-300 px-4 py-3 font-medium">
													XS
												</td>
												<td className="border border-gray-300 px-4 py-3">
													24-26
												</td>
												<td className="border border-gray-300 px-4 py-3">
													18-19
												</td>
												<td className="border border-gray-300 px-4 py-3">
													2-3 years
												</td>
											</tr>
											<tr className="bg-gray-50">
												<td className="border border-gray-300 px-4 py-3 font-medium">
													S
												</td>
												<td className="border border-gray-300 px-4 py-3">
													26-28
												</td>
												<td className="border border-gray-300 px-4 py-3">
													19-20
												</td>
												<td className="border border-gray-300 px-4 py-3">
													3-4 years
												</td>
											</tr>
											<tr>
												<td className="border border-gray-300 px-4 py-3 font-medium">
													M
												</td>
												<td className="border border-gray-300 px-4 py-3">
													28-30
												</td>
												<td className="border border-gray-300 px-4 py-3">
													20-21
												</td>
												<td className="border border-gray-300 px-4 py-3">
													4-5 years
												</td>
											</tr>
											<tr className="bg-gray-50">
												<td className="border border-gray-300 px-4 py-3 font-medium">
													L
												</td>
												<td className="border border-gray-300 px-4 py-3">
													30-32
												</td>
												<td className="border border-gray-300 px-4 py-3">
													21-22
												</td>
												<td className="border border-gray-300 px-4 py-3">
													5-6 years
												</td>
											</tr>
											<tr>
												<td className="border border-gray-300 px-4 py-3 font-medium">
													XL
												</td>
												<td className="border border-gray-300 px-4 py-3">
													32-34
												</td>
												<td className="border border-gray-300 px-4 py-3">
													22-23
												</td>
												<td className="border border-gray-300 px-4 py-3">
													6-7 years
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

							{/* Measurement Guide */}
							<div className="mb-6">
								<h4 className="text-lg font-semibold text-gray-900 mb-4">
									How to Measure
								</h4>
								<div className="grid md:grid-cols-2 gap-4">
									<div className="bg-gray-50 rounded-lg p-4">
										<h5 className="font-semibold text-gray-900 mb-2">
											Chest Measurement
										</h5>
										<p className="text-sm text-gray-700">
											Measure around the fullest part of the chest, keeping the
											tape measure horizontal.
										</p>
									</div>
									<div className="bg-gray-50 rounded-lg p-4">
										<h5 className="font-semibold text-gray-900 mb-2">
											Length Measurement
										</h5>
										<p className="text-sm text-gray-700">
											Measure from the highest point of the shoulder to the
											bottom hem.
										</p>
									</div>
								</div>
							</div>

							{/* Size Selection */}
							<div className="mb-6">
								<h4 className="text-lg font-semibold text-gray-900 mb-4">
									Available Sizes
								</h4>
								<div className="flex flex-wrap gap-2">
									{product.sizes?.map((size) => (
										<button
											key={size}
											onClick={() => {
												setSelectedSize(size);
												setShowSizeGuide(false);
											}}
											className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
												selectedSize === size
													? "border-primary-600 bg-primary-50 text-primary-700"
													: "border-gray-300 bg-white text-gray-700 hover:border-primary-300 hover:text-primary-600"
											}`}
										>
											{size}
										</button>
									))}
								</div>
							</div>

							{/* Tips */}
							<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
								<h5 className="font-semibold text-blue-900 mb-2">
									💡 Size Tips
								</h5>
								<ul className="text-sm text-blue-800 space-y-1">
									<li>• If between sizes, we recommend sizing up</li>
									<li>
										• Consider your child's growth rate when selecting size
									</li>
									<li>• All measurements are in inches</li>
									<li>• For any sizing questions, contact our support team</li>
								</ul>
							</div>
						</div>

						{/* Modal Footer */}
						<div className="flex justify-end p-6 border-t border-gray-200">
							<button
								onClick={() => setShowSizeGuide(false)}
								className="px-6 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
							>
								Got it!
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ProductDetail;
