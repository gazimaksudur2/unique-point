import React from "react";
import { Link } from "react-router-dom";
import {
	FiArrowRight,
	FiStar,
	FiTruck,
	FiShield,
	FiHeadphones,
} from "react-icons/fi";
import ProductCard from "../components/product/ProductCard";
import products from "../data/products";
import SEO from "../components/common/SEO";

// Get featured products (bestsellers and new products)
const getFeaturedProducts = () => {
	return products
		.filter((product) => product.isBestseller || product.isNew)
		.slice(0, 4);
};

const Home = () => {
	// Structured data for homepage
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "UniquePoint - Premium Polo T-Shirts",
		url: "https://uniquepointbd.com",
		description:
			"Premium VENTAGE Color Polo T-Shirts for Men. 100% Organic PK Fabric, 170 GSM. Cash on Delivery, Nationwide Delivery in Bangladesh.",
		potentialAction: {
			"@type": "SearchAction",
			target: "https://uniquepointbd.com/search?q={search_term_string}",
			"query-input": "required name=search_term_string",
		},
		sameAs: [
			"https://facebook.com/uniquepoint",
			"https://instagram.com/uniquepoint",
			"https://twitter.com/uniquepoint",
		],
	};

	return (
		<>
			<SEO
				title="Premium Polo T-Shirts - UniquePoint Bangladesh"
				description="Premium VENTAGE Color Polo T-Shirts for Men. 100% Organic PK Fabric, 170 GSM thickness. Cash on Delivery, Nationwide Delivery. Combo packages and single pieces available."
				keywords="polo t-shirts, mens fashion, premium clothing, VENTAGE, organic fabric, cash on delivery, Bangladesh, combo packages"
				ogType="website"
				ogUrl="https://uniquepointbd.com"
				structured={structuredData}
				canonical="https://uniquepointbd.com"
			/>

			<div className="min-h-screen bg-cream">
				{/* Hero Section */}
				<section id="hero" className="bg-white">
					<div className="container mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
							<div className="space-y-4 sm:space-y-6 md:space-y-8">
								<div className="space-y-3 sm:space-y-4 md:space-y-6">
									<h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight text-gray-900">
										Premium VENTAGE
										<span className="block bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
											Polo T-Shirts
										</span>
									</h1>
									<p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-600">
										Discover premium quality polo t-shirts made with 100%
										Organic PK Fabric. Perfect for men who value comfort, style,
										and durability. Available in combo packages and single
										pieces.
									</p>
								</div>

								<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
									<Link
										to="/products"
										className="bg-coral hover:bg-coral-600 text-white px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg flex items-center justify-center transition-all"
									>
										Shop Products
										<FiArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
									</Link>
									<Link
										to="/gallery"
										className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg flex items-center justify-center transition-all"
									>
										View Gallery
										<FiArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
									</Link>
								</div>

								{/* Key Features */}
								<div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 text-gray-800">
									<div className="text-center p-2 sm:p-3 md:p-4 bg-secondary-50 rounded-lg border border-secondary-300">
										<div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
											100%
										</div>
										<div className="text-xs sm:text-sm text-gray-600 font-semibold">
											Organic PK
										</div>
									</div>
									<div className="text-center p-2 sm:p-3 md:p-4 bg-primary-50 rounded-lg border border-primary-300">
										<div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
											170 GSM
										</div>
										<div className="text-xs sm:text-sm font-semibold">
											Premium Quality
										</div>
									</div>
									<div className="text-center p-2 sm:p-3 md:p-4 bg-coral-50 rounded-lg border border-coral-300">
										<div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
											COD
										</div>
										<div className="text-xs sm:text-sm font-semibold">
											Cash on Delivery
										</div>
									</div>
								</div>
							</div>

							{/* Hero Image/Graphics */}
							<div className="hidden lg:block">
								<div className="relative">
									<div className="bg-white rounded-3xl p-8 shadow-2xl">
										<div className="text-center space-y-6">
											<div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center shadow-lg">
												<div className="text-6xl">👔</div>
											</div>
											<div className="space-y-3">
												<div className="h-2 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full"></div>
												<div className="h-2 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full w-4/5 mx-auto"></div>
												<div className="h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full w-3/5 mx-auto"></div>
											</div>
											<div className="text-gray-800 font-semibold text-lg">
												VENTAGE Collection
											</div>
										</div>
									</div>
									<div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
										NEW
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section
					id="features"
					className="py-6 sm:py-8 md:py-12 lg:py-16 bg-secondary-100"
				>
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
							<div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
								<div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto bg-primary rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center">
									<FiTruck className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
								</div>
								<h3 className="font-semibold text-sm sm:text-base lg:text-lg text-gray-900">
									Nationwide Delivery
								</h3>
								<p className="text-xs sm:text-sm text-gray-600">
									Cash on delivery across Bangladesh
								</p>
							</div>

							<div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
								<div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto bg-secondary-500 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center">
									<FiShield className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
								</div>
								<h3 className="font-semibold text-sm sm:text-base lg:text-lg text-gray-900">
									Premium Quality
								</h3>
								<p className="text-xs sm:text-sm text-gray-600">
									100% Organic PK Fabric, 170 GSM
								</p>
							</div>

							<div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
								<div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto bg-coral rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center">
									<FiHeadphones className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
								</div>
								<h3 className="font-semibold text-sm sm:text-base lg:text-lg text-gray-900">
									WhatsApp Support
								</h3>
								<p className="text-xs sm:text-sm text-gray-600">
									Direct communication via WhatsApp
								</p>
							</div>

							<div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
								<div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto bg-primary-400 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center">
									<FiStar className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
								</div>
								<h3 className="font-semibold text-sm sm:text-base lg:text-lg text-gray-900">
									Wash Guarantee
								</h3>
								<p className="text-xs sm:text-sm text-gray-600">
									Long-lasting color & quality
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Product Highlights Section */}
				<section
					id="highlights"
					className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-secondary-50 to-white"
				>
					<div className="container mx-auto px-4">
						<div className="text-center mb-6 sm:mb-8 md:mb-12">
							<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
								Why Choose VENTAGE Polo T-Shirts?
							</h2>
							<p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
								Premium quality polo t-shirts designed for comfort, style, and
								durability
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
							{/* Combo Package Highlight */}
							<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
								<div className="text-center mb-4">
									<div className="text-4xl mb-3">📦</div>
									<h3 className="text-xl font-bold text-gray-900 mb-2">
										Combo Package
									</h3>
									<p className="text-gray-600">4 PCS Premium Polo T-Shirts</p>
								</div>
								<div className="space-y-2 text-sm text-gray-700">
									<div className="flex justify-between">
										<span>Price:</span>
										<span className="font-semibold">৳1,050</span>
									</div>
									<div className="flex justify-between">
										<span>Original:</span>
										<span className="line-through text-gray-500">৳1,650</span>
									</div>
									<div className="flex justify-between text-green-600 font-semibold">
										<span>Save:</span>
										<span>৳600</span>
									</div>
								</div>
								<Link
									to="/products"
									className="block w-full mt-4 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
								>
									View Combo
								</Link>
							</div>

							{/* Single Piece Highlight */}
							<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
								<div className="text-center mb-4">
									<div className="text-4xl mb-3">👔</div>
									<h3 className="text-xl font-bold text-gray-900 mb-2">
										Single Piece
									</h3>
									<p className="text-gray-600">Individual Polo T-Shirt</p>
								</div>
								<div className="space-y-2 text-sm text-gray-700">
									<div className="flex justify-between">
										<span>Price:</span>
										<span className="font-semibold">৳350</span>
									</div>
									<div className="flex justify-between">
										<span>Original:</span>
										<span className="line-through text-gray-500">৳450</span>
									</div>
									<div className="flex justify-between text-green-600 font-semibold">
										<span>Save:</span>
										<span>৳100</span>
									</div>
								</div>
								<Link
									to="/products"
									className="block w-full mt-4 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
								>
									View Single
								</Link>
							</div>

							{/* Quality Features */}
							<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
								<div className="text-center mb-4">
									<div className="text-4xl mb-3">⭐</div>
									<h3 className="text-xl font-bold text-gray-900 mb-2">
										Premium Features
									</h3>
									<p className="text-gray-600">
										Quality that speaks for itself
									</p>
								</div>
								<div className="space-y-2 text-sm text-gray-700">
									<div className="flex items-center">
										<span className="text-green-600 mr-2">✓</span>
										<span>100% Organic PK Fabric</span>
									</div>
									<div className="flex items-center">
										<span className="text-green-600 mr-2">✓</span>
										<span>170 GSM Premium Quality</span>
									</div>
									<div className="flex items-center">
										<span className="text-green-600 mr-2">✓</span>
										<span>Wash Guarantee</span>
									</div>
									<div className="flex items-center">
										<span className="text-green-600 mr-2">✓</span>
										<span>4 Color Variants</span>
									</div>
								</div>
								<Link
									to="/gallery"
									className="block w-full mt-4 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
								>
									View Gallery
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Featured Products */}
				<section id="products" className="py-16 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Featured Products
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Hand-picked favorites that our customers love
							</p>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{getFeaturedProducts().map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>

						<div className="text-center mt-12">
							<Link
								to="/products"
								className="group bg-primary-700 hover:bg-primary-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center"
							>
								View All Products
								<FiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</Link>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section
					id="cta"
					className="py-16 bg-gradient-to-r from-primary-700 to-primary-800"
				>
					<div className="container mx-auto px-4">
						<div className="text-center text-white">
							<h2 className="text-3xl md:text-4xl font-bold mb-6">
								Ready to Experience Premium Quality?
							</h2>
							<p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
								Join satisfied customers who trust UniquePoint for premium
								VENTAGE polo t-shirts
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
								<Link
									to="/products"
									className="group bg-white text-primary-700 hover:bg-secondary-50 hover:text-secondary-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center border-2 border-white"
								>
									Shop Now
									<FiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
								</Link>

								<div className="flex items-center space-x-6 text-white/90">
									<div className="text-center">
										<div className="text-lg font-bold">⭐ 4.7/5</div>
										<div className="text-sm">Customer Rating</div>
									</div>
									<div className="text-center">
										<div className="text-lg font-bold">📱 WhatsApp</div>
										<div className="text-sm">Easy Checkout</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Home;
