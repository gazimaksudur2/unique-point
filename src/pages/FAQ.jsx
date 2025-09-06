import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiSearch } from "react-icons/fi";
import SEO from "../components/common/SEO";

const FAQ = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [openAccordion, setOpenAccordion] = useState(null);

	const faqData = [
		{
			id: 1,
			category: "Ordering",
			question: "How do I place an order?",
			answer:
				"Browse our VENTAGE polo t-shirts, add items to your cart, and proceed to checkout. Fill in your shipping details and payment method. The system will generate a WhatsApp message with your order details. Send this message to our WhatsApp number (+8801711105888) to complete your order.",
		},
		{
			id: 2,
			category: "Ordering",
			question: "Can I modify or cancel my order?",
			answer:
				"Yes, you can modify or cancel your order before it's processed. Contact us immediately through WhatsApp (+8801711105888) with your order details. Changes are only possible before we start processing your order.",
		},
		{
			id: 3,
			category: "Shipping",
			question: "What are your delivery charges?",
			answer:
				"Delivery charges are calculated based on your location: Dhaka district - ৳60, Outside Dhaka - ৳120. These charges are automatically calculated when you select your district during checkout.",
		},
		{
			id: 4,
			category: "Shipping",
			question: "How long does delivery take?",
			answer:
				"Delivery times vary by location: Dhaka - 1-3 business days, Outside Dhaka - 2-5 business days. We deliver nationwide across Bangladesh using reliable courier services.",
		},
		{
			id: 5,
			category: "Shipping",
			question: "Do you ship outside Bangladesh?",
			answer:
				"Currently, we only deliver within Bangladesh. We are focused on providing excellent service to our local customers first.",
		},
		{
			id: 6,
			category: "Returns",
			question: "What is your return policy?",
			answer:
				"We offer a 7-day return policy from the date of delivery. Products must be unused, unwashed, and in original packaging with all tags intact. You will need to pay the delivery charges for returns.",
		},
		{
			id: 7,
			category: "Returns",
			question: "How do I return an item?",
			answer:
				"Contact us through WhatsApp (+8801876658343) within 7 days of delivery. Provide your order details and reason for return. We'll arrange pickup and process your return. Return shipping charges apply.",
		},
		{
			id: 8,
			category: "Returns",
			question: "When will I get my refund?",
			answer:
				"Refunds are processed within 3-5 business days after we receive and inspect the returned item. The refund will be credited to your original payment method.",
		},
		{
			id: 9,
			category: "Products",
			question: "What sizes are available?",
			answer:
				"Our VENTAGE polo t-shirts are available in sizes M, L, XL, and XXL. Each product page includes a detailed size guide with measurements in inches. If you're unsure, contact us for size recommendations.",
		},
		{
			id: 10,
			category: "Products",
			question: "What fabric are your polo t-shirts made of?",
			answer:
				"Our polo t-shirts are made from 100% Organic PK Fabric with 170 GSM thickness. This premium fabric offers excellent comfort, breathability, and durability with long-lasting color.",
		},
		{
			id: 11,
			category: "Products",
			question: "What colors are available?",
			answer:
				"For single pieces, we offer 4 beautiful VENTAGE color variants: Olive, Light Blue, Navy Blue, and Red. Combo packages include assorted colors from our VENTAGE palette.",
		},
		{
			id: 12,
			category: "Products",
			question: "What's the difference between combo and single pieces?",
			answer:
				"Combo Package: 4 PCS polo t-shirts for ৳1,050 (original price ৳1,650) - Save ৳600. Single Piece: Individual polo t-shirt for ৳350 (original price ৳450) - Save ৳100. Both offer the same premium quality.",
		},
		{
			id: 13,
			category: "Payment",
			question: "What payment methods do you accept?",
			answer:
				"We accept Cash on Delivery (COD) only. No advance payment required - pay when you receive your order. This ensures a secure and convenient shopping experience.",
		},
		{
			id: 14,
			category: "Payment",
			question: "Is Cash on Delivery safe?",
			answer:
				"Yes, Cash on Delivery is completely safe. You only pay after receiving and inspecting your order. No advance payment means no risk of losing money if you're not satisfied with the product.",
		},
		{
			id: 15,
			category: "Care",
			question: "How should I care for my polo t-shirts?",
			answer:
				"Machine wash cold, do not bleach, tumble dry low, cool iron if needed, and wash dark colors separately. Follow the care instructions on the product label for best results.",
		},
		{
			id: 16,
			category: "Care",
			question: "Do you offer wash guarantee?",
			answer:
				"Yes, our VENTAGE polo t-shirts come with a wash guarantee. The colors are long-lasting and won't fade easily with proper care. We stand behind the quality of our products.",
		},
		{
			id: 17,
			category: "Quality",
			question: "What makes your polo t-shirts special?",
			answer:
				"Our VENTAGE polo t-shirts feature 100% Organic PK Fabric, 170 GSM premium quality, wash guarantee, long-lasting colors, and are designed for comfort and style. We focus on quality over quantity.",
		},
		{
			id: 18,
			category: "Quality",
			question: "Are your products suitable for sensitive skin?",
			answer:
				"Yes, our 100% Organic PK Fabric is gentle on the skin and suitable for sensitive skin. The fabric is breathable and hypoallergenic, making it comfortable for all-day wear.",
		},
		{
			id: 19,
			category: "Business",
			question: "Do you offer wholesale prices?",
			answer:
				"Yes, we offer special wholesale prices for bulk orders. Contact us through WhatsApp (+8801711105888) to discuss wholesale pricing and minimum order quantities.",
		},
		{
			id: 20,
			category: "Business",
			question: "What is your launch promotion?",
			answer:
				"We're offering special launch prices: Combo Package (4 PCS) for only ৳1,050 (was ৳1,650) and Single Piece for ৳350 (was ৳450). This promotion is available for the first 100 customers.",
		},
	];

	const categories = [
		"All",
		"Ordering",
		"Shipping",
		"Returns",
		"Products",
		"Payment",
		"Care",
		"Quality",
		"Business",
	];

	const [selectedCategory, setSelectedCategory] = useState("All");

	// Filter FAQs based on search term and category
	const filteredFAQs = faqData.filter((faq) => {
		const matchesSearch =
			faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
			faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory =
			selectedCategory === "All" || faq.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	const toggleAccordion = (id) => {
		setOpenAccordion(openAccordion === id ? null : id);
	};

	// Structured data for FAQ page
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqData.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};

	return (
		<>
			<SEO
				title="FAQ - VENTAGE Polo T-Shirts | UniquePoint Bangladesh"
				description="Find answers to common questions about our VENTAGE polo t-shirts, ordering process, delivery charges, return policy, and Cash on Delivery. Get help with sizing, care instructions, and more."
				keywords="FAQ, VENTAGE polo t-shirts, delivery charges, return policy, cash on delivery, sizing guide, care instructions, Bangladesh, UniquePoint"
				ogType="website"
				ogUrl="https://uniquepointbd.com/faq"
				structured={structuredData}
				canonical="https://uniquepointbd.com/faq"
			/>

			<div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50">
				{/* Header */}
				<div className="bg-gradient-to-r from-white to-primary-50">
					<div className="container mx-auto px-4 py-12">
						<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Frequently Asked Questions
						</h1>
						<p className="text-lg text-gray-600 max-w-2xl">
							Find answers to common questions about our VENTAGE polo t-shirts,
							ordering process, delivery charges, and more. Can't find what
							you're looking for? Contact our support team via WhatsApp.
						</p>
					</div>
				</div>

				<div className="container mx-auto px-4 py-12">
					{/* Search and Filter Section */}
					<div id="search" className="bg-white rounded-xl shadow-md p-6 mb-8">
						{/* Search Bar */}
						<div className="relative mb-6">
							<FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
							<input
								type="text"
								placeholder="Search FAQs..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
							/>
						</div>

						{/* Category Filter */}
						<div className="flex flex-wrap gap-2">
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => setSelectedCategory(category)}
									className={`px-4 py-2 rounded-full font-medium transition-all ${
										selectedCategory === category
											? "bg-primary-700 text-white shadow-lg"
											: "bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700"
									}`}
								>
									{category}
								</button>
							))}
						</div>
					</div>

					{/* FAQ List */}
					<div className="space-y-4">
						{filteredFAQs.map((faq) => (
							<div
								key={faq.id}
								className="bg-white rounded-xl shadow-md overflow-hidden"
							>
								<button
									onClick={() => toggleAccordion(faq.id)}
									className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
								>
									<div>
										<span className="inline-block bg-primary-100 text-primary-700 text-xs font-medium px-2 py-1 rounded-full mb-2">
											{faq.category}
										</span>
										<h3 className="font-semibold text-gray-900 text-lg">
											{faq.question}
										</h3>
									</div>
									{openAccordion === faq.id ? (
										<FiChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
									) : (
										<FiChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
									)}
								</button>
								{openAccordion === faq.id && (
									<div className="px-6 pb-4">
										<p className="text-gray-600 leading-relaxed">
											{faq.answer}
										</p>
									</div>
								)}
							</div>
						))}
					</div>

					{filteredFAQs.length === 0 && (
						<div className="text-center py-12">
							<p className="text-gray-500 text-lg">
								No FAQs found matching your search criteria.
							</p>
							<button
								onClick={() => {
									setSearchTerm("");
									setSelectedCategory("All");
								}}
								className="mt-4 bg-primary-700 text-white px-6 py-2 rounded-lg hover:bg-primary-800 transition-colors"
							>
								Clear Filters
							</button>
						</div>
					)}

					{/* Contact Section */}
					<div
						id="contact"
						className="bg-gradient-to-r from-primary-700 to-primary-800 rounded-xl p-8 text-white mt-12"
					>
						<div className="text-center">
							<h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
							<p className="text-lg mb-6 opacity-90">
								Our customer support team is here to help you
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<a
									href="https://wa.me/+8801876658343"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
								>
									<span className="mr-2">💬</span>
									WhatsApp Support
								</a>
								<a
									href="tel:+8801876658343"
									className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
								>
									<span className="mr-2">📞</span>
									Call Us
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FAQ;
