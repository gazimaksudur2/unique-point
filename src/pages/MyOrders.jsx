import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiTrash2, FiClock, FiArrowLeft } from "react-icons/fi";
import SEO from "../components/common/SEO";

const MyOrders = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const stored = JSON.parse(
			localStorage.getItem("uniquepoint_orders") || "[]"
		);
		setOrders(stored);
	}, []);

	const removeOrder = (id) => {
		const next = orders.filter((o) => o.id !== id);
		setOrders(next);
		localStorage.setItem("uniquepoint_orders", JSON.stringify(next));
	};

	return (
		<>
			<SEO
				title="My Orders - UniquePoint"
				description="View your WhatsApp orders placed from UniquePoint."
			/>
			<div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50">
				<div className="bg-gradient-to-r from-white to-primary-50">
					<div className="container mx-auto px-4 py-12">
						<div className="flex items-center gap-4 mb-4">
							<Link
								to="/"
								className="text-primary-700 hover:text-primary-800 transition-colors"
							>
								<FiArrowLeft className="h-6 w-6" />
							</Link>
							<h1 className="text-3xl md:text-4xl font-bold text-gray-900">
								My Orders
							</h1>
						</div>
						<p className="text-lg text-gray-600">
							Orders placed via WhatsApp from this device
						</p>
					</div>
				</div>

				<div className="container mx-auto px-4 py-8">
					{orders.length === 0 ? (
						<div className="bg-white rounded-xl shadow-md p-8 text-center">
							<p className="text-gray-600">
								No orders yet. Place an order from the checkout page.
							</p>
							<Link
								to="/products"
								className="mt-4 inline-block bg-primary-700 text-white px-6 py-3 rounded-lg hover:bg-primary-800 transition-colors"
							>
								Browse Products
							</Link>
						</div>
					) : (
						<div className="grid grid-cols-1 gap-6">
							{orders.map((order) => (
								<div
									key={order.id}
									className="bg-white rounded-xl shadow-md p-6"
								>
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-2 text-gray-600">
											<FiClock className="h-4 w-4" />
											<span className="text-sm">
												{new Date(order.createdAt).toLocaleString()}
											</span>
										</div>
										<button
											onClick={() => removeOrder(order.id)}
											className="text-red-600 hover:text-red-700 flex items-center gap-1"
										>
											<FiTrash2 className="h-5 w-5" /> Remove
										</button>
									</div>

									<div className="grid sm:grid-cols-3 gap-4">
										<div className="sm:col-span-2">
											<h3 className="font-semibold text-gray-900 mb-2">
												Items
											</h3>
											<div className="space-y-3">
												{order.items.map((item, idx) => (
													<div key={idx} className="flex gap-3">
														<div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
															<img
																src={item.images?.[0]}
																alt={item.name}
																className="w-full h-full object-cover"
															/>
														</div>
														<div className="flex-1">
															<div className="font-medium">{item.name}</div>
															<div className="text-xs text-gray-500">
																{item.size && `Size: ${item.size}`}{" "}
																{item.size && item.color && " • "}{" "}
																{item.color && `Color: ${item.color}`}
															</div>
															<div className="text-sm text-gray-700">
																Qty: {item.quantity} • ৳
																{item.price * item.quantity}
															</div>
														</div>
													</div>
												))}
											</div>
										</div>
										<div className="space-y-2">
											<h3 className="font-semibold text-gray-900 mb-2">
												Summary
											</h3>
											<div className="flex justify-between">
												<span>Subtotal</span>
												<span>৳{order.subtotal}</span>
											</div>
											<div className="flex justify-between">
												<span>Delivery</span>
												<span>৳{order.deliveryCharge}</span>
											</div>
											<div className="flex justify-between font-bold text-primary-700">
												<span>Total</span>
												<span>৳{order.total}</span>
											</div>
											<div className="pt-2 text-sm text-gray-600">
												<div>Payment: {order.paymentMethod}</div>
												<div>
													Zone:{" "}
													{order.deliveryZone === "inside"
														? "Inside Dhaka"
														: "Outside Dhaka"}
												</div>
												<div>Address: {order.addressDetails || "N/A"}</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default MyOrders;
