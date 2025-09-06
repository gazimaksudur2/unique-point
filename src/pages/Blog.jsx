import React, { useState } from "react";
import {
	FiCalendar,
	FiUser,
	FiTag,
	FiArrowRight,
	FiHeart,
	FiShare2,
	FiMessageCircle,
} from "react-icons/fi";
import SEO from "../components/common/SEO";

const Blog = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const categories = [
		"All",
		"New Collections",
		"Offers",
		"Updates",
		"Tips",
		"Behind the Scenes",
	];

	const blogPosts = [
		{
			id: 1,
			title: "Introducing Our Latest VENTAGE Collection",
			excerpt:
				"Discover the premium quality and comfort of our new VENTAGE polo t-shirt collection. Made with 100% Organic PK Fabric and designed for the modern gentleman.",
			content:
				"We're excited to announce the launch of our latest VENTAGE collection! This new line features our signature 100% Organic PK Fabric with 170 GSM thickness, ensuring maximum comfort and durability. Each polo t-shirt is carefully crafted to provide the perfect fit and style for the modern gentleman.",
			category: "New Collections",
			author: "VENTAGE Team",
			date: "2024-01-15",
			readTime: "3 min read",
			tags: ["New Collection", "VENTAGE", "Premium Quality"],
			image:
				"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop",
			featured: true,
		},
		{
			id: 2,
			title: "Special Launch Offer: Save Up to ৳600",
			excerpt:
				"Limited time offer! Get our combo package of 4 VENTAGE polo t-shirts for only ৳1,050. Original price ৳1,650. Don't miss out on this amazing deal!",
			content:
				"We're celebrating our launch with an incredible offer! For the first 100 customers, you can get our combo package of 4 VENTAGE polo t-shirts for just ৳1,050 instead of the regular price of ৳1,650. That's a savings of ৳600! This offer includes our premium quality polo t-shirts in assorted colors from our VENTAGE palette.",
			category: "Offers",
			author: "VENTAGE Team",
			date: "2024-01-12",
			readTime: "2 min read",
			tags: ["Special Offer", "Combo Package", "Launch Deal"],
			image:
				"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
			featured: false,
		},
		{
			id: 3,
			title: "How to Choose the Perfect Polo T-Shirt Size",
			excerpt:
				"Our comprehensive guide to finding the perfect fit for your VENTAGE polo t-shirt. Learn about measurements, sizing tips, and what to consider when choosing your size.",
			content:
				"Choosing the right size for your polo t-shirt is crucial for comfort and style. Our VENTAGE polo t-shirts are designed with a regular fit, providing optimal comfort for everyday wear. Here are some tips to help you find the perfect size: measure your chest at the fullest part, consider your preferred fit (slim or relaxed), and don't hesitate to contact us for personalized sizing advice.",
			category: "Tips",
			author: "VENTAGE Team",
			date: "2024-01-10",
			readTime: "4 min read",
			tags: ["Sizing Guide", "Tips", "Fit"],
			image:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
			featured: false,
		},
		{
			id: 4,
			title: "Behind the Scenes: Our Quality Control Process",
			excerpt:
				"Take a look at our rigorous quality control process that ensures every VENTAGE polo t-shirt meets our high standards before reaching our customers.",
			content:
				"Quality is at the heart of everything we do at VENTAGE. Our quality control process involves multiple stages: fabric inspection, stitching quality checks, color consistency verification, and final product testing. Each polo t-shirt undergoes thorough inspection to ensure it meets our premium standards. We believe that attention to detail makes all the difference in creating products our customers love.",
			category: "Behind the Scenes",
			author: "VENTAGE Team",
			date: "2024-01-08",
			readTime: "5 min read",
			tags: ["Quality Control", "Behind the Scenes", "Process"],
			image:
				"https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
			featured: false,
		},
		{
			id: 5,
			title: "New WhatsApp Ordering System Now Live",
			excerpt:
				"We've upgraded our ordering system! Now you can place orders directly through WhatsApp with our streamlined checkout process. Experience faster and more convenient shopping.",
			content:
				"We're excited to announce that our new WhatsApp ordering system is now live! This system makes it easier than ever to place orders. Simply browse our products, add items to your cart, and complete your order through WhatsApp. Our team is available to assist you with any questions and provide personalized recommendations. The new system also includes automatic delivery charge calculation based on your location.",
			category: "Updates",
			author: "VENTAGE Team",
			date: "2024-01-05",
			readTime: "3 min read",
			tags: ["WhatsApp", "Ordering", "Update"],
			image:
				"https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
			featured: false,
		},
		{
			id: 6,
			title: "Care Tips for Your VENTAGE Polo T-Shirts",
			excerpt:
				"Learn how to properly care for your VENTAGE polo t-shirts to maintain their quality, color, and shape for years to come. Simple tips for long-lasting garments.",
			content:
				"Proper care is essential to maintain the quality and longevity of your VENTAGE polo t-shirts. Here are our recommended care instructions: machine wash cold with like colors, avoid bleach, tumble dry on low heat, and iron on low to medium heat if needed. Following these simple steps will help preserve the fabric's quality and keep your polo t-shirts looking fresh and new.",
			category: "Tips",
			author: "VENTAGE Team",
			date: "2024-01-03",
			readTime: "3 min read",
			tags: ["Care Instructions", "Tips", "Maintenance"],
			image:
				"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
			featured: false,
		},
	];

	const filteredPosts =
		selectedCategory === "All"
			? blogPosts
			: blogPosts.filter((post) => post.category === selectedCategory);

	const featuredPost = blogPosts.find((post) => post.featured);
	const regularPosts = filteredPosts.filter((post) => !post.featured);

	// Structured data for Blog page
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Blog",
		name: "VENTAGE Blog - UniquePoint",
		description:
			"Stay updated with the latest VENTAGE collections, offers, tips, and behind-the-scenes content.",
		url: "https://unique-point.com/blog",
		blogPost: blogPosts.map((post) => ({
			"@type": "BlogPosting",
			headline: post.title,
			description: post.excerpt,
			author: {
				"@type": "Person",
				name: post.author,
			},
			datePublished: post.date,
			image: post.image,
		})),
	};

	return (
		<>
			<SEO
				title="Blog - VENTAGE Updates & Collections | UniquePoint"
				description="Stay updated with the latest VENTAGE collections, special offers, styling tips, and behind-the-scenes content. Discover new arrivals and exclusive deals."
				keywords="VENTAGE blog, polo t-shirt updates, new collections, special offers, styling tips, fashion blog, UniquePoint"
				ogType="blog"
				ogUrl="https://unique-point.com/blog"
				structured={structuredData}
				canonical="https://unique-point.com/blog"
			/>

			<div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50">
				{/* Header */}
				<div className="bg-gradient-to-r from-white to-primary-50">
					<div className="container mx-auto px-4 py-12">
						<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							VENTAGE Blog
						</h1>
						<p className="text-lg text-gray-600 max-w-2xl">
							Stay updated with our latest collections, special offers, styling
							tips, and behind-the-scenes content. Discover what's new in the
							world of VENTAGE polo t-shirts.
						</p>
					</div>
				</div>

				<div className="container mx-auto px-4 py-12">
					{/* Category Filter */}
					<div className="mb-8">
						<div className="flex flex-wrap gap-2">
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => setSelectedCategory(category)}
									className={`px-4 py-2 rounded-full font-medium transition-all ${
										selectedCategory === category
											? "bg-primary-700 text-white shadow-lg"
											: "bg-white text-gray-700 hover:bg-primary-100 hover:text-primary-700 border border-gray-200"
									}`}
								>
									{category}
								</button>
							))}
						</div>
					</div>

					{/* Featured Post */}
					{selectedCategory === "All" && featuredPost && (
						<div className="mb-12">
							<div className="bg-white rounded-xl shadow-lg overflow-hidden">
								<div className="md:flex">
									<div className="md:w-1/2">
										<img
											src={featuredPost.image}
											alt={featuredPost.title}
											className="w-full h-64 md:h-full object-cover"
										/>
									</div>
									<div className="md:w-1/2 p-8">
										<div className="flex items-center space-x-2 mb-3">
											<span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
												Featured
											</span>
											<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
												{featuredPost.category}
											</span>
										</div>
										<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
											{featuredPost.title}
										</h2>
										<p className="text-gray-600 mb-6 text-lg">
											{featuredPost.excerpt}
										</p>
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-4 text-sm text-gray-500">
												<div className="flex items-center space-x-1">
													<FiCalendar className="h-4 w-4" />
													<span>
														{new Date(featuredPost.date).toLocaleDateString()}
													</span>
												</div>
												<div className="flex items-center space-x-1">
													<FiUser className="h-4 w-4" />
													<span>{featuredPost.author}</span>
												</div>
												<span>{featuredPost.readTime}</span>
											</div>
											<button className="bg-primary-700 text-white px-6 py-2 rounded-lg hover:bg-primary-800 transition-colors flex items-center space-x-2">
												<span>Read More</span>
												<FiArrowRight className="h-4 w-4" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Blog Posts Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{regularPosts.map((post) => (
							<article
								key={post.id}
								className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
							>
								<img
									src={post.image}
									alt={post.title}
									className="w-full h-48 object-cover"
								/>
								<div className="p-6">
									<div className="flex items-center space-x-2 mb-3">
										<span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
											{post.category}
										</span>
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
										{post.title}
									</h3>
									<p className="text-gray-600 mb-4 line-clamp-3">
										{post.excerpt}
									</p>
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center space-x-3 text-sm text-gray-500">
											<div className="flex items-center space-x-1">
												<FiCalendar className="h-4 w-4" />
												<span>{new Date(post.date).toLocaleDateString()}</span>
											</div>
											<span>{post.readTime}</span>
										</div>
									</div>
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-2">
											<button className="text-gray-400 hover:text-red-500 transition-colors">
												<FiHeart className="h-4 w-4" />
											</button>
											<button className="text-gray-400 hover:text-blue-500 transition-colors">
												<FiShare2 className="h-4 w-4" />
											</button>
											<button className="text-gray-400 hover:text-green-500 transition-colors">
												<FiMessageCircle className="h-4 w-4" />
											</button>
										</div>
										<button className="text-primary-700 hover:text-primary-800 font-medium flex items-center space-x-1">
											<span>Read More</span>
											<FiArrowRight className="h-4 w-4" />
										</button>
									</div>
								</div>
							</article>
						))}
					</div>

					{/* Newsletter Subscription */}
					<div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center">
						<h2 className="text-2xl font-bold mb-4">
							Stay Updated with VENTAGE
						</h2>
						<p className="text-lg mb-6 opacity-90">
							Get the latest updates on new collections, exclusive offers, and
							styling tips delivered to your inbox.
						</p>
						<div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
							<input
								type="email"
								placeholder="Enter your email address"
								className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
							/>
							<button className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
