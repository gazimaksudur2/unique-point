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

// Get featured products (bestsellers and new products)
const getFeaturedProducts = () => {
	return sampleProducts
		.filter((product) => product.isBestseller || product.isNew)
		.slice(0, 4);
};

const Home = () => {
	return (
		<div className="space-y-16">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 text-white">
				<div className="container mx-auto px-4 py-20">
					<div className="max-w-3xl">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Fashion for Every
							<span className="block text-yellow-300">Little Star</span>
						</h1>
						<p className="text-xl md:text-2xl mb-8 text-purple-100">
							Discover trendy, comfortable, and affordable fashion for boys and
							girls across all age groups
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								to="/boys"
								className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
							>
								Shop Boys
								<FiArrowRight className="ml-2 h-5 w-5" />
							</Link>
							<Link
								to="/girls"
								className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
							>
								Shop Girls
								<FiArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</div>
					</div>
				</div>

				{/* Hero Image/Graphics - Placeholder */}
				<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/20 to-transparent hidden lg:block">
					<div className="w-full h-full flex items-center justify-center">
						<div className="text-6xl opacity-20">👗👔</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="text-center space-y-4">
						<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
							<FiTruck className="h-8 w-8 text-purple-600" />
						</div>
						<h3 className="font-semibold text-lg">Free Shipping</h3>
						<p className="text-gray-600">Free delivery on orders above ₹999</p>
					</div>

					<div className="text-center space-y-4">
						<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
							<FiShield className="h-8 w-8 text-green-600" />
						</div>
						<h3 className="font-semibold text-lg">Quality Assured</h3>
						<p className="text-gray-600">
							Premium quality fabrics and materials
						</p>
					</div>

					<div className="text-center space-y-4">
						<div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
							<FiHeadphones className="h-8 w-8 text-yellow-600" />
						</div>
						<h3 className="font-semibold text-lg">WhatsApp Support</h3>
						<p className="text-gray-600">Direct communication via WhatsApp</p>
					</div>

					<div className="text-center space-y-4">
						<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
							<FiStar className="h-8 w-8 text-blue-600" />
						</div>
						<h3 className="font-semibold text-lg">Customer Love</h3>
						<p className="text-gray-600">Rated 4.8/5 by happy parents</p>
					</div>
				</div>
			</section>

			{/* Categories Section */}
			<section className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
						Shop by Category
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Find the perfect outfit for every occasion and age group
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					{/* Category Cards */}
					<Link
						to="/boys/infants"
						className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
					>
						<div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
							<span className="text-4xl">👶</span>
						</div>
						<div className="p-4 text-center">
							<h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
								Infants
							</h3>
							<p className="text-sm text-gray-600">0-2 years</p>
						</div>
					</Link>

					<Link
						to="/boys/kids"
						className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
					>
						<div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
							<span className="text-4xl">🧒</span>
						</div>
						<div className="p-4 text-center">
							<h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
								Kids
							</h3>
							<p className="text-sm text-gray-600">3-8 years</p>
						</div>
					</Link>

					<Link
						to="/boys/teens"
						className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
					>
						<div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
							<span className="text-4xl">🧑</span>
						</div>
						<div className="p-4 text-center">
							<h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
								Teens
							</h3>
							<p className="text-sm text-gray-600">9-16 years</p>
						</div>
					</Link>

					<Link
						to="/boys/adults"
						className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
					>
						<div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
							<span className="text-4xl">👨</span>
						</div>
						<div className="p-4 text-center">
							<h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
								Adults
							</h3>
							<p className="text-sm text-gray-600">17+ years</p>
						</div>
					</Link>
				</div>
			</section>

			{/* Featured Collections */}
			<section className="bg-gray-100 py-16">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
							Featured Collections
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Curated collections for every season and occasion
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-white rounded-xl shadow-md overflow-hidden">
							<div className="h-48 bg-gradient-to-br from-yellow-200 to-orange-300 flex items-center justify-center">
								<span className="text-6xl">🌟</span>
							</div>
							<div className="p-6">
								<h3 className="font-bold text-xl mb-2">Festival Special</h3>
								<p className="text-gray-600 mb-4">
									Traditional and ethnic wear for festive celebrations
								</p>
								<Link
									to="/collections/festival"
									className="text-purple-600 font-semibold hover:text-purple-700 flex items-center"
								>
									Shop Collection
									<FiArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>

						<div className="bg-white rounded-xl shadow-md overflow-hidden">
							<div className="h-48 bg-gradient-to-br from-blue-200 to-cyan-300 flex items-center justify-center">
								<span className="text-6xl">❄️</span>
							</div>
							<div className="p-6">
								<h3 className="font-bold text-xl mb-2">Winter Essentials</h3>
								<p className="text-gray-600 mb-4">
									Cozy and warm clothing for the winter season
								</p>
								<Link
									to="/collections/winter"
									className="text-purple-600 font-semibold hover:text-purple-700 flex items-center"
								>
									Shop Collection
									<FiArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>

						<div className="bg-white rounded-xl shadow-md overflow-hidden">
							<div className="h-48 bg-gradient-to-br from-red-200 to-pink-300 flex items-center justify-center">
								<span className="text-6xl">🎒</span>
							</div>
							<div className="p-6">
								<h3 className="font-bold text-xl mb-2">Back to School</h3>
								<p className="text-gray-600 mb-4">
									Comfortable and stylish outfits for school days
								</p>
								<Link
									to="/collections/school"
									className="text-purple-600 font-semibold hover:text-purple-700 flex items-center"
								>
									Shop Collection
									<FiArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Products */}
			<section className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
						Featured Products
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Hand-picked favorites that our customers love
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
					{getFeaturedProducts().map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>

				<div className="text-center mt-12">
					<Link
						to="/boys"
						className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
					>
						View All Products
						<FiArrowRight className="ml-2 h-5 w-5" />
					</Link>
				</div>
			</section>

			{/* CTA Section */}
			<section className="container mx-auto px-4">
				<div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Ready to Explore?
					</h2>
					<p className="text-xl mb-8 text-purple-100">
						Join thousands of happy families shopping with UniquePoint
					</p>
					<Link
						to="/boys"
						className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
					>
						Start Shopping
						<FiArrowRight className="ml-2 h-5 w-5" />
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Home;
