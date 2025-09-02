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
				"You can browse our products and add items to your cart. We use WhatsApp for checkout - simply click the WhatsApp button to complete your order with our team.",
		},
		{
			id: 2,
			category: "Ordering",
			question: "Can I modify or cancel my order?",
			answer:
				"Yes, you can modify or cancel your order before it's processed. Contact us immediately through WhatsApp or our customer service number.",
		},
		{
			id: 3,
			category: "Shipping",
			question: "What are your shipping charges?",
			answer:
				"We offer free shipping on orders above ₹999. For orders below ₹999, shipping charges of ₹99 apply across India.",
		},
		{
			id: 4,
			category: "Shipping",
			question: "How long does delivery take?",
			answer:
				"Delivery typically takes 3-7 business days depending on your location. Metro cities usually receive orders within 3-4 days.",
		},
		{
			id: 5,
			category: "Shipping",
			question: "Do you ship internationally?",
			answer:
				"Currently, we only ship within India. We are working on expanding our services internationally in the near future.",
		},
		{
			id: 6,
			category: "Returns",
			question: "What is your return policy?",
			answer:
				"We offer a 15-day return policy from the date of delivery. Items must be unworn, unwashed, and with original tags intact.",
		},
		{
			id: 7,
			category: "Returns",
			question: "How do I return an item?",
			answer:
				"Contact our customer service team through WhatsApp or phone. We'll arrange for pickup and provide you with a return authorization.",
		},
		{
			id: 8,
			category: "Returns",
			question: "When will I get my refund?",
			answer:
				"Refunds are processed within 7-10 business days after we receive and inspect the returned item.",
		},
		{
			id: 9,
			category: "Products",
			question: "How do I choose the right size?",
			answer:
				"Please refer to our size guide available on each product page. If you're unsure, our customer service team can help you choose the right size.",
		},
		{
			id: 10,
			category: "Products",
			question: "Are your products suitable for sensitive skin?",
			answer:
				"Yes, we use premium quality, skin-friendly fabrics. Most of our kids' products are made from organic cotton and hypoallergenic materials.",
		},
		{
			id: 11,
			category: "Products",
			question: "Do you offer customization?",
			answer:
				"We offer limited customization for bulk orders. Please contact our team to discuss your requirements.",
		},
		{
			id: 12,
			category: "Payment",
			question: "What payment methods do you accept?",
			answer:
				"We accept all major payment methods through WhatsApp Pay, UPI, credit/debit cards, and net banking.",
		},
		{
			id: 13,
			category: "Payment",
			question: "Is it safe to pay through WhatsApp?",
			answer:
				"Yes, our WhatsApp checkout process is completely secure. We use encrypted payment gateways and never store your payment information.",
		},
		{
			id: 14,
			category: "Care",
			question: "How should I care for my products?",
			answer:
				"Care instructions are provided on each product page and on the product labels. Generally, we recommend gentle machine wash for most items.",
		},
		{
			id: 15,
			category: "Care",
			question: "Can I iron the clothes?",
			answer:
				"Yes, most of our products can be ironed on low to medium heat. Check the care label for specific instructions.",
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
				title="Frequently Asked Questions - UniquePoint"
				description="Find answers to common questions about ordering, shipping, returns, and our products. Get help with sizing, care instructions, and payment methods."
				keywords="FAQ, frequently asked questions, help, support, shipping, returns, sizing guide, customer service"
				ogType="website"
				ogUrl="https://unique-point.com/faq"
				structured={structuredData}
				canonical="https://unique-point.com/faq"
			/>

			<div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50">
				{/* Header */}
				<div className="bg-gradient-to-r from-white to-primary-50">
					<div className="container mx-auto px-4 py-12">
						<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Frequently Asked Questions
						</h1>
						<p className="text-lg text-gray-600 max-w-2xl">
							Find answers to common questions about our products, shipping,
							returns, and more. Can't find what you're looking for? Contact our
							support team.
						</p>
					</div>
				</div>

				<div className="container mx-auto px-4 py-12">
					{/* Search and Filter Section */}
					<div className="bg-white rounded-xl shadow-md p-6 mb-8">
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
					<div className="bg-gradient-to-r from-primary-700 to-primary-800 rounded-xl p-8 text-white mt-12">
						<div className="text-center">
							<h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
							<p className="text-lg mb-6 opacity-90">
								Our customer support team is here to help you
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<a
									href="https://wa.me/+919876543210"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
								>
									<span className="mr-2">💬</span>
									WhatsApp Support
								</a>
								<a
									href="tel:+919876543210"
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
