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
import { sampleProducts } from "../data/sampleProducts";
import SEO from "../components/common/SEO";

// Get featured products (bestsellers and new products)
const getFeaturedProducts = () => {
	return sampleProducts
		.filter((product) => product.isBestseller || product.isNew)
		.slice(0, 4);
};

const Home = () => {
	// Structured data for homepage
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Unique Point - Premium Kids Fashion",
		url: "https://unique-point.com",
		description:
			"Premium kids fashion store offering high-quality clothing for kids and teens with free shipping over ₹999",
		potentialAction: {
			"@type": "SearchAction",
			target: "https://unique-point.com/search?q={search_term_string}",
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
				title="Premium Kids Fashion Store - Quality Clothing for All Ages"
				description="Shop premium kids fashion at Unique Point. High-quality clothing for kids and teens, ages 0-16. Free shipping over ₹999, easy returns, and 24/7 support. New arrivals daily!"
				keywords="kids fashion, children clothing, premium kids wear, teens fashion, online shopping, free shipping, toddler clothes, baby clothes"
				ogType="website"
				ogUrl="https://unique-point.com"
				structured={structuredData}
				canonical="https://unique-point.com"
			/>

			<div className="min-h-screen bg-cream">
				{/* Hero Section */}
				<section id="hero" className="bg-white">
					<div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 xl:py-24">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
							<div className="space-y-6 sm:space-y-8">
								<div className="space-y-4 sm:space-y-6">
									<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
										Fashion that grows
										<span className="block bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
											with your child
										</span>
									</h1>
									<p className="text-lg lg:text-xl leading-relaxed text-gray-600">
										Discover premium quality, comfortable clothing for kids of
										all ages. From newborns to teens - we create outfits that
										inspire confidence and comfort.
									</p>
								</div>

								<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
									<Link
										to="/products"
										className="bg-coral hover:bg-coral-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg flex items-center justify-center"
									>
										Shop Products
										<FiArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
									</Link>
									<Link
										to="/gallery"
										className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg flex items-center justify-center"
									>
										View Gallery
										<FiArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
									</Link>
								</div>

								{/* Key Features */}
								<div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 text-gray-800">
									<div className="text-center p-2 sm:p-4 bg-secondary-50 rounded-lg border border-secondary-300">
										<div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
											1000+
										</div>
										<div className="text-xs sm:text-sm text-gray-600 font-semibold">
											Products
										</div>
									</div>
									<div className="text-center p-2 sm:p-4 bg-primary-50 rounded-lg border border-primary-300">
										<div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
											50K+
										</div>
										<div className="text-xs sm:text-sm font-semibold">
											Happy Families
										</div>
									</div>
									<div className="text-center p-2 sm:p-4 bg-coral-50 rounded-lg border border-coral-300">
										<div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
											4.9
										</div>
										<div className="text-xs sm:text-sm font-semibold">
											Rating
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
												<div className="text-6xl">👕</div>
											</div>
											<div className="space-y-3">
												<div className="h-2 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full"></div>
												<div className="h-2 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full w-4/5 mx-auto"></div>
												<div className="h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full w-3/5 mx-auto"></div>
											</div>
											<div className="text-gray-800 font-semibold text-lg">
												Premium Quality
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
					className="py-8 sm:py-12 lg:py-16 bg-secondary-100"
				>
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
							<div className="text-center space-y-2 sm:space-y-4">
								<div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-primary rounded-xl sm:rounded-2xl flex items-center justify-center">
									<FiTruck className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
								</div>
								<h3 className="font-semibold text-sm sm:text-base lg:text-lg text-gray-900">
									Free Shipping
								</h3>
								<p className="text-xs sm:text-sm text-gray-600">
									Free delivery on orders above ₹999
								</p>
							</div>

							<div className="text-center space-y-2 sm:space-y-4">
								<div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-secondary-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
									<FiShield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
								</div>
								<h3 className="font-semibold text-sm sm:text-base lg:text-lg text-gray-900">
									Quality Assured
								</h3>
								<p className="text-xs sm:text-sm text-gray-600">
									Premium quality fabrics and materials
								</p>
							</div>

							<div className="text-center space-y-2 sm:space-y-4">
								<div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-coral rounded-xl sm:rounded-2xl flex items-center justify-center">
									<FiHeadphones className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
								</div>
								<h3 className="font-semibold text-sm sm:text-base lg:text-lg text-gray-900">
									24/7 Support
								</h3>
								<p className="text-xs sm:text-sm text-gray-600">
									Direct communication via WhatsApp
								</p>
							</div>

							<div className="text-center space-y-2 sm:space-y-4">
								<div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-primary-400 rounded-xl sm:rounded-2xl flex items-center justify-center">
									<FiStar className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
								</div>
								<h3 className="font-semibold text-sm sm:text-base lg:text-lg text-gray-900">
									Customer Love
								</h3>
								<p className="text-xs sm:text-sm text-gray-600">
									Rated 4.9/5 by happy parents
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Categories Section */}
				<section
					id="categories"
					className="py-16 bg-gradient-to-b from-secondary-50 to-white"
				>
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Shop by Age Group
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Find the perfect outfit for every occasion and age group
							</p>
						</div>

						<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
							{/* Category Cards */}
							<Link
								to="/products?ageGroup=infants"
								className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
							>
								<div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
									<span className="text-6xl group-hover:scale-110 transition-transform">
										👶
									</span>
								</div>
								<div className="p-6 text-center">
									<h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">
										Infants
									</h3>
									<p className="text-sm text-gray-500 font-medium">0-2 years</p>
								</div>
							</Link>

							<Link
								to="/products?ageGroup=kids"
								className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
							>
								<div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
									<span className="text-6xl group-hover:scale-110 transition-transform">
										🧒
									</span>
								</div>
								<div className="p-6 text-center">
									<h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">
										Kids
									</h3>
									<p className="text-sm text-gray-500 font-medium">3-8 years</p>
								</div>
							</Link>

							<Link
								to="/products?ageGroup=teens"
								className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
							>
								<div className="aspect-square bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
									<span className="text-6xl group-hover:scale-110 transition-transform">
										🧑
									</span>
								</div>
								<div className="p-6 text-center">
									<h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">
										Teens
									</h3>
									<p className="text-sm text-gray-500 font-medium">
										9-16 years
									</p>
								</div>
							</Link>

							<Link
								to="/products?ageGroup=adults"
								className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
							>
								<div className="aspect-square bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
									<span className="text-6xl group-hover:scale-110 transition-transform">
										👨
									</span>
								</div>
								<div className="p-6 text-center">
									<h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">
										Adults
									</h3>
									<p className="text-sm text-gray-500 font-medium">17+ years</p>
								</div>
							</Link>
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
								Ready to Start Shopping?
							</h2>
							<p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
								Join thousands of happy families who trust UniquePoint for
								quality fashion
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
								<Link
									to="/products"
									className="group bg-white text-primary-700 hover:bg-secondary-50 hover:text-secondary-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center border-2 border-white"
								>
									Start Shopping
									<FiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
								</Link>

								<div className="flex items-center space-x-6 text-white/90">
									<div className="text-center">
										<div className="text-lg font-bold">⭐ 4.9/5</div>
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
