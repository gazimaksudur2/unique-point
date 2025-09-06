import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	FiMinus,
	FiPlus,
	FiTrash2,
	FiShoppingBag,
	FiHeart,
	FiArrowLeft,
} from "react-icons/fi";
import { useApp } from "../context/AppContext";
import SEO from "../components/common/SEO";

const Cart = () => {
	const navigate = useNavigate();
	const {
		cart,
		cartTotal,
		cartItemsCount,
		updateCartQuantity,
		removeFromCart,
		clearCart,
		addToWishlist,
		removeFromWishlist,
		wishlist,
	} = useApp();

	const handleQuantityChange = (cartId, newQuantity) => {
		if (newQuantity <= 0) {
			removeFromCart(cartId);
		} else {
			updateCartQuantity(cartId, newQuantity);
		}
	};

	const handleMoveToWishlist = (item) => {
		addToWishlist({
			id: item.id,
			name: item.name,
			price: item.price,
			originalPrice: item.originalPrice,
			images: item.images,
			brand: item.brand,
		});
		removeFromCart(item.cartId);
	};

	const isInWishlist = (productId) => {
		return wishlist.some((item) => item.id === productId);
	};

	const handleProceedToCheckout = () => {
		navigate("/checkout");
	};

	if (cart.length === 0) {
		return (
			<>
				<SEO
					title="Shopping Cart - UniquePoint"
					description="Review and manage items in your shopping cart before checkout via WhatsApp."
					keywords="shopping cart, checkout, online shopping, WhatsApp checkout"
					canonical="https://unique-point.com/cart"
				/>

				<div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50">
					<div className="container mx-auto px-4 py-16">
						<div className="max-w-2xl mx-auto text-center">
							<div className="bg-white rounded-3xl shadow-lg p-12">
								<div className="text-8xl mb-6">🛒</div>
								<h1 className="text-3xl font-bold text-gray-900 mb-4">
									Your Cart is Empty
								</h1>
								<p className="text-lg text-gray-600 mb-8">
									Looks like you haven't added any items to your cart yet.
									Discover our amazing collection!
								</p>
								<Link
									to="/products"
									className="bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-800 transition-colors inline-flex items-center"
								>
									<FiShoppingBag className="mr-2 h-5 w-5" />
									Start Shopping
								</Link>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<SEO
				title={`Shopping Cart (${cartItemsCount} items) - UniquePoint`}
				description="Review and manage items in your shopping cart before checkout via WhatsApp."
				keywords="shopping cart, checkout, online shopping, WhatsApp checkout"
				canonical="https://unique-point.com/cart"
			/>

			<div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50">
				{/* Header */}
				<div className="bg-gradient-to-r from-white to-primary-50">
					<div className="container mx-auto px-4 py-12">
						<div className="flex items-center gap-4 mb-4">
							<Link
								to="/products"
								className="text-primary-700 hover:text-primary-800 transition-colors"
							>
								<FiArrowLeft className="h-6 w-6" />
							</Link>
							<h1 className="text-3xl md:text-4xl font-bold text-gray-900">
								Shopping Cart
							</h1>
						</div>
						<p className="text-lg text-gray-600">
							{cartItemsCount} {cartItemsCount === 1 ? "item" : "items"} in your
							cart
						</p>
					</div>
				</div>

				<div className="container mx-auto px-4 py-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* Cart Items */}
						<div className="lg:col-span-2 space-y-4">
							{cart.map((item) => (
								<div
									key={item.cartId}
									className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
								>
									<div className="flex flex-col sm:flex-row gap-4">
										{/* Product Image */}
										<div className="w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
											<img
												src={item.images[0]}
												alt={item.name}
												className="w-full h-full object-cover"
											/>
										</div>

										{/* Product Details */}
										<div className="flex-1 space-y-3">
											<div>
												<h3 className="font-semibold text-lg text-gray-900">
													{item.name}
												</h3>
												<p className="text-sm text-gray-500">{item.brand}</p>
											</div>

											{/* Size and Color */}
											<div className="flex gap-4 text-sm text-gray-600">
												{item.size && (
													<span>
														<strong>Size:</strong> {item.size}
													</span>
												)}
												{item.color && (
													<span>
														<strong>Color:</strong> {item.color}
													</span>
												)}
											</div>

											{/* Price */}
											<div className="flex items-center gap-2">
												<span className="text-lg font-bold text-gray-900">
													৳{item.price}
												</span>
												{item.originalPrice &&
													item.originalPrice > item.price && (
														<span className="text-sm text-gray-500 line-through">
															৳{item.originalPrice}
														</span>
													)}
											</div>

											{/* Quantity Controls */}
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-3">
													<button
														onClick={() =>
															handleQuantityChange(
																item.cartId,
																item.quantity - 1
															)
														}
														className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
													>
														<FiMinus className="h-4 w-4" />
													</button>
													<span className="font-semibold text-lg min-w-[3rem] text-center">
														{item.quantity}
													</span>
													<button
														onClick={() =>
															handleQuantityChange(
																item.cartId,
																item.quantity + 1
															)
														}
														className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
													>
														<FiPlus className="h-4 w-4" />
													</button>
												</div>

												{/* Action Buttons */}
												<div className="flex items-center gap-2">
													<button
														onClick={() => handleMoveToWishlist(item)}
														disabled={isInWishlist(item.id)}
														className={`p-2 rounded-lg transition-colors ${
															isInWishlist(item.id)
																? "text-gray-400 cursor-not-allowed"
																: "text-coral-600 hover:bg-coral-50"
														}`}
														title={
															isInWishlist(item.id)
																? "Already in wishlist"
																: "Move to wishlist"
														}
													>
														<FiHeart className="h-4 w-4" />
													</button>
													<button
														onClick={() => removeFromCart(item.cartId)}
														className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
														title="Remove from cart"
													>
														<FiTrash2 className="h-4 w-4" />
													</button>
												</div>
											</div>

											{/* Subtotal */}
											<div className="text-right">
												<span className="text-lg font-bold text-primary-700">
													Subtotal: ৳{item.price * item.quantity}
												</span>
											</div>
										</div>
									</div>
								</div>
							))}

							{/* Clear Cart Button */}
							<div className="text-center pt-4">
								<button
									onClick={clearCart}
									className="text-red-600 hover:text-red-700 font-medium underline transition-colors"
								>
									Clear All Items
								</button>
							</div>
						</div>

						{/* Order Summary */}
						<div className="lg:col-span-1">
							<div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
								<h2 className="text-xl font-bold text-gray-900 mb-6">
									Order Summary
								</h2>

								<div className="space-y-4 mb-6">
									<div className="flex justify-between">
										<span className="text-gray-600">
											Items ({cartItemsCount})
										</span>
										<span className="font-semibold">৳{cartTotal}</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Delivery Charge</span>
										<span className="font-semibold text-blue-600">
											Calculated at checkout
										</span>
									</div>
									<div className="text-sm text-gray-500 bg-blue-50 p-3 rounded-lg">
										Delivery charges will be calculated based on your preferred
										shipping address
									</div>
									<hr />
									<div className="flex justify-between text-lg font-bold">
										<span>Subtotal</span>
										<span className="text-primary-700">৳{cartTotal}</span>
									</div>
								</div>

								{/* Proceed to Checkout Button */}
								<button
									onClick={handleProceedToCheckout}
									className="w-full bg-primary-700 hover:bg-primary-800 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
								>
									<FiShoppingBag className="h-5 w-5" />
									Proceed to Checkout
								</button>

								<p className="text-sm text-gray-500 text-center mt-4">
									Enter your shipping details and delivery charges will be
									calculated automatically
								</p>

								{/* Continue Shopping */}
								<Link
									to="/products"
									className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
								>
									<FiShoppingBag className="h-4 w-4" />
									Continue Shopping
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
