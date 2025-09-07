import React from "react";
import { Link } from "react-router-dom";
import {
	FiInstagram,
	FiFacebook,
	FiTwitter,
	FiMail,
	FiPhone,
	FiMapPin,
	FiExternalLink,
} from "react-icons/fi";
import { APP_NAME, APP_TAGLINE, DEVELOPER_INFO } from "../../utils/constants";
import logo from "../../assets/logo_jpg.jpg";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-white border-t border-gray-800">
			<div className="container mx-auto px-4 py-8 sm:py-12">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
					{/* Brand Section */}
					<div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
						<Link to="/" className="flex items-center space-x-2 sm:space-x-3">
							<div className="bg-primary text-white w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center">
								<img
									src={logo}
									alt="Logo"
									className="w-full h-full object-cover scale-125"
								/>
							</div>
							<div className="block">
								<span className="font-bold text-lg sm:text-xl lg:text-2xl text-white tracking-tight">
									{APP_NAME}
								</span>
								<p className="text-xs sm:text-sm text-gray-500 font-medium">
									Premium Fashion Store
								</p>
							</div>
						</Link>
						{/* <div className="flex items-center space-x-2">
							<div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-2 rounded-lg shadow-md">
								<span className="font-bold text-xl">UP</span>
							</div>
							<span className="font-bold text-xl">{APP_NAME}</span>
						</div> */}
						<p className="text-gray-300 text-sm sm:text-base">{APP_TAGLINE}</p>
						<p className="text-gray-400 text-xs sm:text-sm">
							Your one-stop destination for trendy fashion for kids and teens
							across all age groups. Shop the latest styles with our unique
							WhatsApp checkout experience.
						</p>

						{/* Social Media Links */}
						<div className="flex space-x-3 sm:space-x-4">
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
								aria-label="Instagram"
							>
								<FiInstagram className="h-5 w-5" />
							</a>
							<a
								href="https://www.facebook.com/uniquepointNG"
								className="text-gray-400 hover:text-white transition-colors"
								aria-label="Facebook"
							>
								<FiFacebook className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
								aria-label="Twitter"
							>
								<FiTwitter className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-3 sm:space-y-4">
						<h3 className="font-semibold text-base sm:text-lg">Quick Links</h3>
						<div className="space-y-1 sm:space-y-2">
							<Link
								to="/products"
								className="block text-gray-400 hover:text-white transition-colors text-sm"
							>
								All Products
							</Link>
							<Link
								to="/#products"
								className="block text-gray-400 hover:text-white transition-colors text-sm"
							>
								Featured Products
							</Link>
							<Link
								to="/#categories"
								className="block text-gray-400 hover:text-white transition-colors text-sm"
							>
								Shop by Age
							</Link>
							<Link
								to="/gallery"
								className="block text-gray-400 hover:text-white transition-colors text-sm"
							>
								Gallery
							</Link>
							<Link
								to="/blog"
								className="block text-gray-400 hover:text-white transition-colors text-sm"
							>
								Blog
							</Link>
							<Link
								to="/products#filters"
								className="block text-gray-400 hover:text-white transition-colors text-sm"
							>
								Product Filters
							</Link>
							<Link
								to="/faq"
								className="block text-gray-400 hover:text-white transition-colors text-sm"
							>
								FAQ
							</Link>
							<Link
								to="/faq#contact"
								className="block text-gray-400 hover:text-white transition-colors text-sm"
							>
								Help & Support
							</Link>
							<Link
								to="/contacts"
								className="block text-gray-400 hover:text-white transition-colors text-sm"
							>
								Contact Us
							</Link>
							<Link
								to="/size-guide"
								className="block text-gray-400 hover:text-white transition-colors text-sm"
							>
								Size Guide
							</Link>
						</div>
					</div>

					{/* Customer Service */}
					<div className="space-y-3 sm:space-y-4">
						<h3 className="font-semibold text-base sm:text-lg">
							Customer Service
						</h3>
						<div className="space-y-1 sm:space-y-2">
							<Link
								to="/contacts"
								className="block text-gray-400 hover:text-white transition-colors text-sm"
							>
								Contact Us
							</Link>
							<Link
								to="/faq"
								className="block text-gray-400 hover:text-white transition-colors text-sm"
							>
								FAQ
							</Link>
							<Link
								to="/size-guide"
								className="block text-gray-400 hover:text-white transition-colors text-sm"
							>
								Size Guide
							</Link>
							<Link
								to="/shipping"
								className="block text-gray-400 hover:text-white transition-colors text-sm"
							>
								Shipping Info
							</Link>
							<Link
								to="/returns"
								className="block text-gray-400 hover:text-white transition-colors text-sm"
							>
								Returns & Exchanges
							</Link>
							<Link
								to="/track-order"
								className="block text-gray-400 hover:text-white transition-colors text-sm"
							>
								Track Your Order
							</Link>
						</div>
					</div>

					{/* Contact Info */}
					<div className="space-y-3 sm:space-y-4">
						<h3 className="font-semibold text-base sm:text-lg">Get in Touch</h3>
						<div className="space-y-2 sm:space-y-3">
							<div className="flex items-center space-x-3">
								<FiPhone className="h-4 w-4 text-gray-400" />
								<span className="text-gray-400 text-sm">+880 187 665 8343</span>
							</div>
							<div className="flex items-center space-x-3">
								<FiMail className="h-4 w-4 text-gray-400" />
								<span className="text-gray-400 text-sm">
									mdrobiulislam0404@gmail.com
								</span>
							</div>
							<div className="flex items-start space-x-3">
								<FiMapPin className="h-4 w-4 text-gray-400 mt-1" />
								<span className="text-gray-400 text-sm">
									Sign Board, Narayanganj,
									<br />
									Bangladesh
								</span>
							</div>
						</div>

						{/* Newsletter Subscription */}
						<div className="space-y-2 sm:space-y-3">
							<h4 className="font-medium text-sm sm:text-base">Stay Updated</h4>
							<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
								<input
									type="email"
									placeholder="Your email"
									className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
								/>
								<button className="bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-800 transition-colors text-sm shadow-md hover:shadow-lg w-full sm:w-auto">
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
					<div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
						<p className="text-gray-400 text-sm">
							© {currentYear} {APP_NAME}. All rights reserved.
						</p>

						<div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
							<Link
								to="/privacy"
								className="text-gray-400 hover:text-white transition-colors text-sm"
							>
								Privacy Policy
							</Link>
							<Link
								to="/terms"
								className="text-gray-400 hover:text-white transition-colors text-sm"
							>
								Terms of Service
							</Link>
							<Link
								to="/cookies"
								className="text-gray-400 hover:text-white transition-colors text-sm"
							>
								Cookie Policy
							</Link>
						</div>
					</div>

					{/* Payment & Security Icons */}
					<div className="mt-6 flex justify-center items-center space-x-4">
						<span className="text-gray-400 text-sm">
							Secure payments via WhatsApp
						</span>
						<div className="flex space-x-2">
							<div className="bg-success-600 text-white px-2 py-1 rounded text-xs font-medium">
								WhatsApp
							</div>
							<div className="bg-gray-700 text-white px-2 py-1 rounded text-xs">
								Secure
							</div>
						</div>
					</div>

					{/* Developer Credit */}
					<div className="mt-8 pt-6 border-t border-gray-700">
						<div className="text-center">
							{/* Developer Info */}
							<div className="space-y-3">
								<div className="text-white">
									<h4 className="font-semibold text-base mb-1">
										{DEVELOPER_INFO.NAME}
									</h4>
									<p className="text-gray-400 text-sm">
										{DEVELOPER_INFO.TAGLINE}
									</p>
								</div>

								{/* Contact Links */}
								<div className="flex items-center justify-center space-x-6">
									<a
										href={`mailto:${DEVELOPER_INFO.EMAIL}`}
										className="flex items-center space-x-1 text-gray-400 hover:text-primary-300 text-sm transition-colors group"
										title="Email Developer"
									>
										<FiMail className="h-4 w-4 group-hover:scale-110 transition-transform" />
										<span>Email</span>
									</a>

									<a
										href={DEVELOPER_INFO.LINKEDIN}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-400 hover:text-primary-300 text-sm transition-colors group"
										title="LinkedIn Profile"
									>
										<svg
											className="h-4 w-4 group-hover:scale-110 transition-transform"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
												clipRule="evenodd"
											/>
										</svg>
										<span>LinkedIn</span>
									</a>

									<a
										href={DEVELOPER_INFO.GITHUB}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-400 hover:text-primary-300 text-sm transition-colors group"
										title="GitHub Profile"
									>
										<svg
											className="h-4 w-4 group-hover:scale-110 transition-transform"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
												clipRule="evenodd"
											/>
										</svg>
										<span>GitHub</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
