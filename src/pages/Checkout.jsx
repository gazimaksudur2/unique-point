import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	FiArrowLeft,
	FiMapPin,
	FiCreditCard,
	FiUser,
	FiPhone,
	FiMail,
	FiShoppingBag,
	FiCheckCircle,
} from "react-icons/fi";
import { useApp } from "../context/AppContext";
import SEO from "../components/common/SEO";
import { WHATSAPP_NUMBER } from "../utils/constants";
import {
	getDivisions,
	getDistrictsByDivision,
	getUpazilasByDistrict,
	getLocationNames,
} from "../data/bangladeshGeoData";

const Checkout = () => {
	const navigate = useNavigate();
	const { cart, cartTotal, cartItemsCount, clearCart } = useApp();

	// Form state
	const [formData, setFormData] = useState({
		// Customer Information
		firstName: "",
		lastName: "",
		email: "",
		phone: "",

		// Shipping Address
		division: "",
		district: "",
		upazila: "",
		streetAddress: "",

		// Payment Method
		paymentMethod: "",

		// Additional Notes
		orderNotes: "",
	});

	// Geographic data state
	const [divisions] = useState(getDivisions());
	const [districts, setDistricts] = useState([]);
	const [upazilas, setUpazilas] = useState([]);

	// Form validation
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);

	// Redirect if cart is empty
	useEffect(() => {
		if (cart.length === 0) {
			navigate("/cart");
		}
	}, [cart, navigate]);

	// Handle geographic selections
	useEffect(() => {
		if (formData.division) {
			const newDistricts = getDistrictsByDivision(formData.division);
			setDistricts(newDistricts);
			setFormData((prev) => ({
				...prev,
				district: "",
				upazila: "",
			}));
			setUpazilas([]);
		}
	}, [formData.division]);

	useEffect(() => {
		if (formData.district) {
			const newUpazilas = getUpazilasByDistrict(formData.district);
			setUpazilas(newUpazilas);
			setFormData((prev) => ({ ...prev, upazila: "" }));
		}
	}, [formData.district]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		// Clear error when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: "",
			}));
		}
	};

	const validateForm = () => {
		const newErrors = {};

		// Required fields
		if (!formData.firstName.trim())
			newErrors.firstName = "First name is required";
		if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
		if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
		if (!formData.division) newErrors.division = "Division is required";
		if (!formData.district) newErrors.district = "District is required";
		if (!formData.upazila) newErrors.upazila = "Upazila is required";
		if (!formData.paymentMethod)
			newErrors.paymentMethod = "Payment method is required";

		// Email validation
		if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		// Phone validation (Bangladesh format) - supports 01XXXXXXXX, 8801XXXXXXXX, +8801XXXXXXXX
		if (formData.phone) {
			const phoneRegex = /^(?:\+?88)?01[3-9]\d{8}$/;
			const cleanPhone = formData.phone.replace(/\s/g, "");
			if (!phoneRegex.test(cleanPhone)) {
				newErrors.phone =
					"Please enter a valid Bangladesh phone number (01XXXXXXXX, 8801XXXXXXXX, or +8801XXXXXXXX)";
			}
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const generateWhatsAppMessage = () => {
		const locationNames = getLocationNames(
			formData.division,
			formData.district,
			formData.upazila
		);

		let message = "🛍️ *New Order from UniquePoint Website*\n\n";

		// Customer Information
		message += "👤 *Customer Details:*\n";
		message += `Name: ${formData.firstName} ${formData.lastName}\n`;
		message += `Phone: ${formData.phone}\n`;
		if (formData.email) message += `Email: ${formData.email}\n`;
		message += "\n";

		// Shipping Address
		message += "📍 *Shipping Address:*\n";
		if (locationNames) {
			message += `Division: ${locationNames.division}\n`;
			message += `District: ${locationNames.district}\n`;
			message += `Upazila: ${locationNames.upazila}\n`;
		}
		if (formData.streetAddress) {
			message += `Street/House: ${formData.streetAddress}\n`;
		}
		message += "\n";

		// Order Items
		message += "🛒 *Order Items:*\n";
		cart.forEach((item, index) => {
			message += `${index + 1}. *${item.name}*\n`;
			message += `   Brand: ${item.brand}\n`;
			message += `   Price: ₹${item.price}\n`;
			if (item.size) message += `   Size: ${item.size}\n`;
			if (item.color) message += `   Color: ${item.color}\n`;
			message += `   Quantity: ${item.quantity}\n`;
			message += `   Subtotal: ₹${item.price * item.quantity}\n\n`;
		});

		// Payment & Total
		message += "💳 *Payment Information:*\n";
		message += `Payment Method: ${formData.paymentMethod}\n`;
		message += `Subtotal: ₹${cartTotal}\n`;
		const shippingCost = cartTotal >= 999 ? 0 : 99;
		if (shippingCost > 0) message += `Shipping: ₹${shippingCost}\n`;
		message += `*Total Amount: ₹${cartTotal + shippingCost}*\n\n`;

		// Additional Notes
		if (formData.orderNotes) {
			message += "📝 *Additional Notes:*\n";
			message += `${formData.orderNotes}\n\n`;
		}

		message +=
			"Please confirm this order and let me know the estimated delivery time.\n\n";
		message += "Thank you! 😊";

		return encodeURIComponent(message);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);

		try {
			// Generate WhatsApp message
			const message = generateWhatsAppMessage();
			const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

			// Clear cart after successful order
			clearCart();

			// Show success modal
			setShowSuccessModal(true);

			// Open WhatsApp
			window.open(whatsappUrl, "_blank");

			// Redirect to success page after a delay
			setTimeout(() => {
				setShowSuccessModal(false);
				navigate("/order-success");
			}, 3000);
		} catch (error) {
			console.error("Error processing order:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const paymentMethods = [
		{ value: "cash_on_delivery", label: "Cash on Delivery" },
		{ value: "bkash", label: "bKash" },
		{ value: "nagad", label: "Nagad" },
		{ value: "rocket", label: "Rocket" },
		{ value: "upay", label: "Upay" },
		{ value: "bank_transfer", label: "Bank Transfer" },
	];

	if (cart.length === 0) {
		return null; // Will redirect in useEffect
	}

	return (
		<>
			<SEO
				title="Checkout - UniquePoint"
				description="Complete your order with our secure checkout process. Enter your shipping details and payment method."
				keywords="checkout, order, shipping, payment, delivery"
				canonical="https://unique-point.com/checkout"
			/>

			<div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50">
				{/* Header */}
				<div className="bg-gradient-to-r from-white to-primary-50">
					<div className="container mx-auto px-4 py-12">
						<div className="flex items-center gap-4 mb-4">
							<Link
								to="/cart"
								className="text-primary-700 hover:text-primary-800 transition-colors"
							>
								<FiArrowLeft className="h-6 w-6" />
							</Link>
							<h1 className="text-3xl md:text-4xl font-bold text-gray-900">
								Checkout
							</h1>
						</div>
						<p className="text-lg text-gray-600">
							Complete your order ({cartItemsCount} items)
						</p>
					</div>
				</div>

				<div className="container mx-auto px-4 py-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* Checkout Form */}
						<div className="lg:col-span-2">
							<form onSubmit={handleSubmit} className="space-y-8">
								{/* Customer Information */}
								<div className="bg-white rounded-xl shadow-md p-6">
									<div className="flex items-center gap-3 mb-6">
										<FiUser className="h-5 w-5 text-primary-700" />
										<h2 className="text-xl font-bold text-gray-900">
											Customer Information
										</h2>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												First Name *
											</label>
											<input
												type="text"
												name="firstName"
												value={formData.firstName}
												onChange={handleInputChange}
												className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
													errors.firstName
														? "border-red-500"
														: "border-gray-300"
												}`}
												placeholder="Enter your first name"
											/>
											{errors.firstName && (
												<p className="text-red-500 text-sm mt-1">
													{errors.firstName}
												</p>
											)}
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Last Name *
											</label>
											<input
												type="text"
												name="lastName"
												value={formData.lastName}
												onChange={handleInputChange}
												className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
													errors.lastName ? "border-red-500" : "border-gray-300"
												}`}
												placeholder="Enter your last name"
											/>
											{errors.lastName && (
												<p className="text-red-500 text-sm mt-1">
													{errors.lastName}
												</p>
											)}
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Phone Number *
											</label>
											<input
												type="tel"
												name="phone"
												value={formData.phone}
												onChange={handleInputChange}
												className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
													errors.phone ? "border-red-500" : "border-gray-300"
												}`}
												placeholder="01XXXXXXXX or +8801XXXXXXXX"
											/>
											{errors.phone && (
												<p className="text-red-500 text-sm mt-1">
													{errors.phone}
												</p>
											)}
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Email Address
											</label>
											<input
												type="email"
												name="email"
												value={formData.email}
												onChange={handleInputChange}
												className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
													errors.email ? "border-red-500" : "border-gray-300"
												}`}
												placeholder="your@email.com (optional)"
											/>
											{errors.email && (
												<p className="text-red-500 text-sm mt-1">
													{errors.email}
												</p>
											)}
										</div>
									</div>
								</div>

								{/* Shipping Address */}
								<div className="bg-white rounded-xl shadow-md p-6">
									<div className="flex items-center gap-3 mb-6">
										<FiMapPin className="h-5 w-5 text-primary-700" />
										<h2 className="text-xl font-bold text-gray-900">
											Shipping Address
										</h2>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Division *
											</label>
											<select
												name="division"
												value={formData.division}
												onChange={handleInputChange}
												className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
													errors.division ? "border-red-500" : "border-gray-300"
												}`}
											>
												<option value="">Select Division</option>
												{divisions.map((division) => (
													<option key={division.value} value={division.value}>
														{division.label}
													</option>
												))}
											</select>
											{errors.division && (
												<p className="text-red-500 text-sm mt-1">
													{errors.division}
												</p>
											)}
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												District *
											</label>
											<select
												name="district"
												value={formData.district}
												onChange={handleInputChange}
												disabled={!formData.division}
												className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
													errors.district ? "border-red-500" : "border-gray-300"
												} ${!formData.division ? "bg-gray-100" : ""}`}
											>
												<option value="">Select District</option>
												{districts.map((district) => (
													<option key={district.value} value={district.value}>
														{district.label}
													</option>
												))}
											</select>
											{errors.district && (
												<p className="text-red-500 text-sm mt-1">
													{errors.district}
												</p>
											)}
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Upazila *
											</label>
											<select
												name="upazila"
												value={formData.upazila}
												onChange={handleInputChange}
												disabled={!formData.district}
												className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
													errors.upazila ? "border-red-500" : "border-gray-300"
												} ${!formData.district ? "bg-gray-100" : ""}`}
											>
												<option value="">Select Upazila</option>
												{upazilas.map((upazila) => (
													<option key={upazila.value} value={upazila.value}>
														{upazila.label}
													</option>
												))}
											</select>
											{errors.upazila && (
												<p className="text-red-500 text-sm mt-1">
													{errors.upazila}
												</p>
											)}
										</div>
									</div>

									<div className="mt-4">
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Street Address / House No. (Optional for more detailed address)
										</label>
										<input
											type="text"
											name="streetAddress"
											value={formData.streetAddress}
											onChange={handleInputChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
											placeholder="House number, street name, building name, etc."
										/>
									</div>
								</div>

								{/* Payment Method */}
								<div className="bg-white rounded-xl shadow-md p-6">
									<div className="flex items-center gap-3 mb-6">
										<FiCreditCard className="h-5 w-5 text-primary-700" />
										<h2 className="text-xl font-bold text-gray-900">
											Payment Method
										</h2>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										{paymentMethods.map((method) => (
											<label
												key={method.value}
												className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
													formData.paymentMethod === method.value
														? "border-primary-500 bg-primary-50"
														: "border-gray-200 hover:border-gray-300"
												}`}
											>
												<input
													type="radio"
													name="paymentMethod"
													value={method.value}
													checked={formData.paymentMethod === method.value}
													onChange={handleInputChange}
													className="text-primary-600 focus:ring-primary-500"
												/>
												<span className="ml-3 font-medium">{method.label}</span>
											</label>
										))}
									</div>
									{errors.paymentMethod && (
										<p className="text-red-500 text-sm mt-2">
											{errors.paymentMethod}
										</p>
									)}
								</div>

								{/* Order Notes */}
								<div className="bg-white rounded-xl shadow-md p-6">
									<h3 className="text-lg font-semibold text-gray-900 mb-4">
										Order Notes (Optional)
									</h3>
									<textarea
										name="orderNotes"
										value={formData.orderNotes}
										onChange={handleInputChange}
										rows="4"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
										placeholder="Any special instructions for your order..."
									></textarea>
								</div>

								{/* Submit Button */}
								<div className="flex flex-col sm:flex-row gap-4">
									<Link
										to="/cart"
										className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
									>
										<FiArrowLeft className="h-5 w-5" />
										Back to Cart
									</Link>

									<button
										type="submit"
										disabled={isSubmitting}
										className="flex-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
									>
										{isSubmitting ? (
											<>
												<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
												Processing...
											</>
										) : (
											<>
												<span className="text-lg">💬</span>
												Complete Order via WhatsApp
											</>
										)}
									</button>
								</div>
							</form>
						</div>

						{/* Order Summary */}
						<div className="lg:col-span-1">
							<div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
								<h2 className="text-xl font-bold text-gray-900 mb-6">
									Order Summary
								</h2>

								{/* Cart Items */}
								<div className="space-y-4 mb-6">
									{cart.map((item) => (
										<div key={item.cartId} className="flex gap-3">
											<div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
												<img
													src={item.images[0]}
													alt={item.name}
													className="w-full h-full object-cover"
												/>
											</div>
											<div className="flex-1">
												<h3 className="font-medium text-sm">{item.name}</h3>
												<p className="text-xs text-gray-500">
													{item.size && `Size: ${item.size}`}
													{item.size && item.color && " • "}
													{item.color && `Color: ${item.color}`}
												</p>
												<div className="flex justify-between items-center mt-1">
													<span className="text-sm text-gray-600">
														Qty: {item.quantity}
													</span>
													<span className="font-semibold">
														₹{item.price * item.quantity}
													</span>
												</div>
											</div>
										</div>
									))}
								</div>

								{/* Totals */}
								<div className="space-y-2 pt-4 border-t">
									<div className="flex justify-between">
										<span>Subtotal</span>
										<span>₹{cartTotal}</span>
									</div>
									<div className="flex justify-between">
										<span>Shipping</span>
										<span className={cartTotal >= 999 ? "text-green-600" : ""}>
											{cartTotal >= 999 ? "FREE" : "₹99"}
										</span>
									</div>
									{cartTotal < 999 && (
										<div className="text-sm text-yellow-600 bg-yellow-50 p-2 rounded">
											Add ₹{999 - cartTotal} more for FREE shipping!
										</div>
									)}
									<hr />
									<div className="flex justify-between text-lg font-bold">
										<span>Total</span>
										<span className="text-primary-700">
											₹{cartTotal < 999 ? cartTotal + 99 : cartTotal}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Success Modal */}
			{showSuccessModal && (
				<div className="fixed inset-0 z-50 overflow-y-auto">
					<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						{/* Background overlay */}
						<div
							className="fixed inset-0 transition-opacity"
							aria-hidden="true"
						>
							<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
						</div>

						{/* Modal content */}
						<div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
							<div className="sm:flex sm:items-start">
								<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
									<FiCheckCircle className="h-6 w-6 text-green-600" />
								</div>
								<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
									<h3 className="text-lg leading-6 font-medium text-gray-900">
										Order Placed Successfully!
									</h3>
									<div className="mt-2">
										<p className="text-sm text-gray-500">
											Your order has been placed and sent to our WhatsApp. We'll
											contact you shortly to confirm your order details.
										</p>
									</div>
								</div>
							</div>
							<div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
								<div className="flex items-center justify-center">
									<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></div>
									<span className="ml-2 text-sm text-gray-600">
										Redirecting...
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Checkout;
