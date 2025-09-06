import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FiHeart,
	FiShoppingCart,
	FiTrash2,
	FiArrowLeft,
	FiShoppingBag,
} from "react-icons/fi";
import { useApp } from "../context/AppContext";
import SEO from "../components/common/SEO";

const Wishlist = () => {
	const { wishlist, wishlistItemsCount, removeFromWishlist, addToCart, cart } =
		useApp();

	const [selectedItems, setSelectedItems] = useState(new Set());

	const handleAddToCart = (item, size = null, color = null) => {
		const cartItem = {
			id: item.id,
			name: item.name,
			price: item.price,
			originalPrice: item.originalPrice,
			images: item.images,
			brand: item.brand,
			size: size || item.sizes?.[0] || "One Size",
			color: color || item.colors?.[0] || "Default",
			quantity: 1,
		};
		addToCart(cartItem);
	};

	const handleSelectItem = (itemId) => {
		const newSelected = new Set(selectedItems);
		if (newSelected.has(itemId)) {
			newSelected.delete(itemId);
		} else {
			newSelected.add(itemId);
		}
		setSelectedItems(newSelected);
	};

	const handleSelectAll = () => {
		if (selectedItems.size === wishlist.length) {
			setSelectedItems(new Set());
		} else {
			setSelectedItems(new Set(wishlist.map((item) => item.id)));
		}
	};

	const handleAddSelectedToCart = () => {
		selectedItems.forEach((itemId) => {
			const item = wishlist.find((w) => w.id === itemId);
			if (item) {
				handleAddToCart(item);
			}
		});
		setSelectedItems(new Set());
	};

	const handleRemoveSelected = () => {
		selectedItems.forEach((itemId) => {
			removeFromWishlist(itemId);
		});
		setSelectedItems(new Set());
	};

	const isInCart = (productId) => {
		return cart.some((item) => item.id === productId);
	};

	if (wishlist.length === 0) {
		return (
			<>
				<SEO
					title="Wishlist - UniquePoint"
					description="Save your favorite products to your wishlist for later purchase."
					keywords="wishlist, favorites, saved items, online shopping"
					canonical="https://unique-point.com/wishlist"
				/>

				<div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50">
					<div className="container mx-auto px-4 py-16">
						<div className="max-w-2xl mx-auto text-center">
							<div className="bg-white rounded-3xl shadow-lg p-12">
								<div className="text-8xl mb-6">💝</div>
								<h1 className="text-3xl font-bold text-gray-900 mb-4">
									Your Wishlist is Empty
								</h1>
								<p className="text-lg text-gray-600 mb-8">
									Start adding products to your wishlist by clicking the heart
									icon on products you love!
								</p>
								<Link
									to="/products"
									className="bg-coral hover:bg-coral-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-flex items-center"
								>
									<FiShoppingBag className="mr-2 h-5 w-5" />
									Browse Products
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
				title={`Wishlist (${wishlistItemsCount} items) - UniquePoint`}
				description="Save your favorite products to your wishlist for later purchase."
				keywords="wishlist, favorites, saved items, online shopping"
				canonical="https://unique-point.com/wishlist"
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
								My Wishlist
							</h1>
						</div>
						<p className="text-lg text-gray-600">
							{wishlistItemsCount} {wishlistItemsCount === 1 ? "item" : "items"}{" "}
							saved for later
						</p>
					</div>
				</div>

				<div className="container mx-auto px-4 py-8">
					{/* Bulk Actions */}
					{wishlist.length > 0 && (
						<div className="bg-white rounded-xl shadow-md p-4 mb-6">
							<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
								<div className="flex items-center gap-4">
									<label className="flex items-center gap-2 cursor-pointer">
										<input
											type="checkbox"
											checked={selectedItems.size === wishlist.length}
											onChange={handleSelectAll}
											className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
										/>
										<span className="font-medium">
											Select All ({selectedItems.size} of {wishlist.length})
										</span>
									</label>
								</div>

								{selectedItems.size > 0 && (
									<div className="flex items-center gap-2">
										<button
											onClick={handleAddSelectedToCart}
											className="bg-primary-700 hover:bg-primary-800 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
										>
											<FiShoppingCart className="h-4 w-4" />
											Add to Cart ({selectedItems.size})
										</button>
										<button
											onClick={handleRemoveSelected}
											className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
										>
											<FiTrash2 className="h-4 w-4" />
											Remove ({selectedItems.size})
										</button>
									</div>
								)}
							</div>
						</div>
					)}

					{/* Wishlist Items */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{wishlist.map((item) => (
							<div
								key={item.id}
								className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all group"
							>
								{/* Product Image */}
								<div className="relative aspect-square bg-gray-100">
									<img
										src={item.images[0]}
										alt={item.name}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									/>

									{/* Select Checkbox */}
									<div className="absolute top-3 left-3">
										<label className="flex items-center cursor-pointer">
											<input
												type="checkbox"
												checked={selectedItems.has(item.id)}
												onChange={() => handleSelectItem(item.id)}
												className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 bg-white/80"
											/>
										</label>
									</div>

									{/* Remove from Wishlist */}
									<button
										onClick={() => removeFromWishlist(item.id)}
										className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full text-red-600 hover:text-red-700 transition-all shadow-md"
										title="Remove from wishlist"
									>
										<FiHeart className="h-5 w-5 fill-current" />
									</button>

									{/* Discount Badge */}
									{item.originalPrice && item.originalPrice > item.price && (
										<div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-coral text-white px-2 py-1 rounded-full text-xs font-bold">
											{Math.round(
												((item.originalPrice - item.price) /
													item.originalPrice) *
													100
											)}
											% OFF
										</div>
									)}
								</div>

								{/* Product Details */}
								<div className="p-4 space-y-3">
									<div>
										<h3 className="font-semibold text-gray-900 line-clamp-2">
											{item.name}
										</h3>
										<p className="text-sm text-gray-500">{item.brand}</p>
									</div>

									{/* Price */}
									<div className="flex items-center gap-2">
										<span className="text-lg font-bold text-gray-900">
											৳{item.price}
										</span>
										{item.originalPrice && item.originalPrice > item.price && (
											<span className="text-sm text-gray-500 line-through">
												৳{item.originalPrice}
											</span>
										)}
									</div>

									{/* Actions */}
									<div className="space-y-2">
										<button
											onClick={() => handleAddToCart(item)}
											disabled={isInCart(item.id)}
											className={`w-full py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
												isInCart(item.id)
													? "bg-gray-100 text-gray-500 cursor-not-allowed"
													: "bg-primary-700 hover:bg-primary-800 text-white"
											}`}
										>
											<FiShoppingCart className="h-4 w-4" />
											{isInCart(item.id) ? "In Cart" : "Add to Cart"}
										</button>

										{/* Size/Color Selection for detailed add to cart */}
										{(item.sizes?.length > 1 || item.colors?.length > 1) && (
											<div className="text-xs text-gray-500 text-center">
												Quick add with default options
											</div>
										)}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Continue Shopping */}
					<div className="text-center mt-12">
						<Link
							to="/products"
							className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-xl transition-colors inline-flex items-center gap-2"
						>
							<FiShoppingBag className="h-5 w-5" />
							Continue Shopping
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Wishlist;
