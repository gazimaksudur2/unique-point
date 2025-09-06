import React, { useState } from "react";
import {
	FiPhone,
	FiMail,
	FiMapPin,
	FiClock,
	FiSend,
	FiInstagram,
	FiFacebook,
	FiTwitter,
} from "react-icons/fi";
import SEO from "../components/common/SEO";

const Contacts = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setSubmitStatus("success");
			setIsSubmitting(false);
			setFormData({
				name: "",
				email: "",
				phone: "",
				subject: "",
				message: "",
			});
		}, 2000);
	};

	// Structured data for Contact page
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "ContactPage",
		mainEntity: {
			"@type": "Organization",
			name: "UniquePoint",
			url: "https://uniquepointbd.com",
			contactPoint: [
				{
					"@type": "ContactPoint",
					telephone: "+880-1903219313",
					contactType: "customer service",
					areaServed: "BD",
					availableLanguage: ["English", "Bengali"],
				},
			],
			address: {
				"@type": "PostalAddress",
				streetAddress: "Sign Board",
				addressLocality: "Narayanganj",
				addressRegion: "Dhaka",
				addressCountry: "BD",
			},
		},
	};

	return (
		<>
			<SEO
				title="Contact Us - UniquePoint Customer Support"
				description="Get in touch with UniquePoint customer support. Find our contact information, business hours, and send us a message. We're here to help with your fashion needs."
				keywords="contact us, customer support, help, phone number, email, address, customer service"
				ogType="website"
				ogUrl="https://uniquepointbd.com/contacts"
				structured={structuredData}
				canonical="https://uniquepointbd.com/contacts"
			/>

			<div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50">
				{/* Header */}
				<div className="bg-gradient-to-r from-white to-primary-50">
					<div className="container mx-auto px-4 py-12">
						<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Contact Us
						</h1>
						<p className="text-lg text-gray-600 max-w-2xl">
							We'd love to hear from you. Get in touch with our friendly team
							for any questions, support, or feedback.
						</p>
					</div>
				</div>

				<div className="container mx-auto px-4 py-12">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* Contact Information */}
						<div className="lg:col-span-1 space-y-6">
							{/* Quick Contact */}
							<div className="bg-white rounded-xl shadow-md p-6">
								<h2 className="text-xl font-bold text-gray-900 mb-6">
									Get in Touch
								</h2>
								<div className="space-y-4">
									<div className="flex items-start space-x-4">
										<div className="bg-primary-100 p-3 rounded-lg">
											<FiPhone className="h-5 w-5 text-primary-700" />
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">Phone</h3>
											<p className="text-gray-600">+880 187 665 8343</p>
											<p className="text-sm text-gray-500">Mon-Sat, 9AM-7PM</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="bg-green-100 p-3 rounded-lg">
											<FiMail className="h-5 w-5 text-green-700" />
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">Email</h3>
											<p className="text-gray-600">
												mdrobiulislam0404@gmail.com
											</p>
											<p className="text-sm text-gray-500">
												We'll respond within 24 hours
											</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="bg-blue-100 p-3 rounded-lg">
											<FiMapPin className="h-5 w-5 text-blue-700" />
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">Address</h3>
											<p className="text-gray-600">
												Sign Board, Narayanganj,
												<br />
												Bangladesh
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Business Hours */}
							<div className="bg-white rounded-xl shadow-md p-6">
								<h2 className="text-xl font-bold text-gray-900 mb-6">
									Business Hours
								</h2>
								<div className="space-y-3">
									<div className="flex items-center space-x-3">
										<FiClock className="h-4 w-4 text-gray-500" />
										<div className="flex justify-between w-full">
											<span className="text-gray-600">Monday - Friday</span>
											<span className="font-semibold">9:00 AM - 7:00 PM</span>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<FiClock className="h-4 w-4 text-gray-500" />
										<div className="flex justify-between w-full">
											<span className="text-gray-600">Saturday</span>
											<span className="font-semibold">10:00 AM - 6:00 PM</span>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<FiClock className="h-4 w-4 text-gray-500" />
										<div className="flex justify-between w-full">
											<span className="text-gray-600">Sunday</span>
											<span className="font-semibold text-red-600">Closed</span>
										</div>
									</div>
								</div>
							</div>

							{/* Social Media */}
							<div className="bg-white rounded-xl shadow-md p-6">
								<h2 className="text-xl font-bold text-gray-900 mb-6">
									Follow Us
								</h2>
								<div className="flex space-x-4">
									<a
										href="#"
										className="bg-pink-100 p-3 rounded-lg text-pink-700 hover:bg-pink-200 transition-colors"
										aria-label="Instagram"
									>
										<FiInstagram className="h-5 w-5" />
									</a>
									<a
										href="https://www.facebook.com/uniquepointNG"
										className="bg-blue-100 p-3 rounded-lg text-blue-700 hover:bg-blue-200 transition-colors"
										aria-label="Facebook"
									>
										<FiFacebook className="h-5 w-5" />
									</a>
									<a
										href="#"
										className="bg-sky-100 p-3 rounded-lg text-sky-700 hover:bg-sky-200 transition-colors"
										aria-label="Twitter"
									>
										<FiTwitter className="h-5 w-5" />
									</a>
								</div>
							</div>

							{/* WhatsApp Contact */}
							<div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
								<h2 className="text-xl font-bold mb-4">
									Quick WhatsApp Support
								</h2>
								<p className="mb-4 opacity-90">
									Get instant help with your orders and queries
								</p>
								<a
									href="https://wa.me/+8801876658343"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
								>
									<span className="mr-2">💬</span>
									Chat on WhatsApp
								</a>
							</div>
						</div>

						{/* Contact Form */}
						<div className="lg:col-span-2">
							<div className="bg-white rounded-xl shadow-md p-8">
								<h2 className="text-2xl font-bold text-gray-900 mb-6">
									Send us a Message
								</h2>

								{submitStatus === "success" && (
									<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
										Thank you for your message! We'll get back to you soon.
									</div>
								)}

								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div>
											<label
												htmlFor="name"
												className="block text-sm font-medium text-gray-700 mb-2"
											>
												Full Name *
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleInputChange}
												required
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
												placeholder="Enter your full name"
											/>
										</div>

										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-gray-700 mb-2"
											>
												Email Address *
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleInputChange}
												required
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
												placeholder="Enter your email"
											/>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div>
											<label
												htmlFor="phone"
												className="block text-sm font-medium text-gray-700 mb-2"
											>
												Phone Number
											</label>
											<input
												type="tel"
												id="phone"
												name="phone"
												value={formData.phone}
												onChange={handleInputChange}
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
												placeholder="Enter your phone number"
											/>
										</div>

										<div>
											<label
												htmlFor="subject"
												className="block text-sm font-medium text-gray-700 mb-2"
											>
												Subject *
											</label>
											<select
												id="subject"
												name="subject"
												value={formData.subject}
												onChange={handleInputChange}
												required
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
											>
												<option value="">Select a subject</option>
												<option value="general">General Inquiry</option>
												<option value="order">Order Support</option>
												<option value="return">Returns & Exchanges</option>
												<option value="product">Product Information</option>
												<option value="feedback">Feedback</option>
												<option value="other">Other</option>
											</select>
										</div>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Message *
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleInputChange}
											required
											rows={6}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
											placeholder="Tell us how we can help you..."
										></textarea>
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="w-full bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
									>
										{isSubmitting ? (
											<>
												<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
												Sending...
											</>
										) : (
											<>
												<FiSend className="h-5 w-5 mr-2" />
												Send Message
											</>
										)}
									</button>
								</form>
							</div>
						</div>
					</div>

					{/* Map Section */}
					<div className="mt-12">
						<div className="bg-white rounded-xl shadow-md p-6">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								Our Location
							</h2>
							<div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
								<p className="text-gray-600">
									Interactive Map Coming Soon
									<br />
									<span className="text-sm">
										Sign Board, Narayanganj, Bangladesh
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contacts;
