import React from "react";
import { Link } from "react-router-dom";
import {
	FiCheckCircle,
	FiMessageCircle,
	FiShoppingBag,
	FiHome,
} from "react-icons/fi";
import SEO from "../components/common/SEO";

const OrderSuccess = () => {
	return (
		<>
			<SEO
				title="Order Placed Successfully - UniquePoint"
				description="Your order has been successfully placed and sent to our WhatsApp. We'll contact you shortly to confirm your order."
				keywords="order success, order confirmation, WhatsApp order"
				canonical="https://unique-point.com/order-success"
			/>

			<div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50 flex items-center justify-center">
				<div className="container mx-auto px-4 py-16">
					<div className="max-w-2xl mx-auto text-center">
						<div className="bg-white rounded-3xl shadow-xl p-12">
							{/* Success Icon */}
							<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<FiCheckCircle className="h-10 w-10 text-green-600" />
							</div>

							{/* Success Message */}
							<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Order Placed Successfully!
							</h1>

							<div className="text-lg text-gray-600 mb-8 space-y-2">
								<p>
									Thank you for your order! Your order details have been sent to
									our WhatsApp.
								</p>
								<p>
									Our team will contact you shortly to confirm your order and
									provide delivery details.
								</p>
							</div>

							{/* WhatsApp Info */}
							<div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
								<div className="flex items-center justify-center gap-3 mb-3">
									<FiMessageCircle className="h-5 w-5 text-green-600" />
									<h3 className="text-lg font-semibold text-green-800">
										Order Sent via WhatsApp
									</h3>
								</div>
								<p className="text-green-700 text-sm">
									Your order has been automatically sent to our WhatsApp number.
									If the WhatsApp window didn't open, please contact us directly
									at{" "}
									<a
										href="https://wa.me/+8801876658343"
										target="_blank"
										rel="noopener noreferrer"
										className="font-medium underline"
									>
										+880 187 665 8343
									</a>
								</p>
							</div>

							{/* What's Next */}
							<div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
								<h3 className="text-lg font-semibold text-primary-800 mb-3">
									What happens next?
								</h3>
								<div className="text-left space-y-2 text-primary-700">
									<div className="flex items-start gap-3">
										<div className="w-6 h-6 bg-primary-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
											<span className="text-xs font-bold">1</span>
										</div>
										<p className="text-sm">
											Our team will review your order details
										</p>
									</div>
									<div className="flex items-start gap-3">
										<div className="w-6 h-6 bg-primary-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
											<span className="text-xs font-bold">2</span>
										</div>
										<p className="text-sm">
											We'll contact you via WhatsApp to confirm
										</p>
									</div>
									<div className="flex items-start gap-3">
										<div className="w-6 h-6 bg-primary-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
											<span className="text-xs font-bold">3</span>
										</div>
										<p className="text-sm">
											Your order will be prepared and shipped
										</p>
									</div>
									<div className="flex items-start gap-3">
										<div className="w-6 h-6 bg-primary-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
											<span className="text-xs font-bold">4</span>
										</div>
										<p className="text-sm">Delivery within 3-7 business days</p>
									</div>
								</div>
							</div>

							{/* Action Buttons */}
							<div className="flex flex-col sm:flex-row gap-4">
								<Link
									to="/"
									className="flex-1 bg-primary-700 hover:bg-primary-800 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
								>
									<FiHome className="h-5 w-5" />
									Continue Shopping
								</Link>

								<a
									href="https://wa.me/+8801876658343"
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
								>
									<span className="text-lg">💬</span>
									Contact Us on WhatsApp
								</a>
							</div>

							{/* Contact Info */}
							<div className="mt-8 pt-6 border-t border-gray-200">
								<p className="text-sm text-gray-500">
									Need help? Contact us at{" "}
									<a
										href="tel:+8801876658343"
										className="text-primary-600 hover:text-primary-700 font-medium"
									>
										+880 187 665 8343
									</a>{" "}
									or email{" "}
									<a
										href="mailto:mdrobiulislam0404@gmail.com"
										className="text-primary-600 hover:text-primary-700 font-medium"
									>
										mdrobiulislam0404@gmail.com
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OrderSuccess;
