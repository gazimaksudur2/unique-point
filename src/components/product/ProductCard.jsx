import React from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import { useApp } from "../../context/AppContext";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

const ProductCard = ({ product, className = "" }) => {
	const { addToCart, toggleWishlist, isInWishlist } = useApp();

	const inWishlist = isInWishlist(product.id);
	const discountPercentage = Math.round(
		((product.originalPrice - product.price) / product.originalPrice) * 100
	);

	const handleAddToCart = (e) => {
		e.preventDefault();
		e.stopPropagation();

		const cartItem = {
			id: product.id,
			name: product.name,
			price: product.price,
			originalPrice: product.originalPrice,
			images: product.images,
			brand: product.brand,
			size: product.sizes?.[0] || "One Size", // Default to first available size
			color: product.colors?.[0] || "Default", // Default to first available color
			quantity: 1,
		};

		addToCart(cartItem);
	};

	const handleToggleWishlist = (e) => {
		e.preventDefault();
		e.stopPropagation();

		toggleWishlist({
			id: product.id,
			name: product.name,
			price: product.price,
			originalPrice: product.originalPrice,
			images: product.images,
			brand: product.brand,
			sizes: product.sizes,
			colors: product.colors,
		});
	};

	return (
		<div
			className={`bg-white border border-gray-200 hover:border-primary rounded-lg shadow-sm hover:shadow-md transition-shadow w-full group ${className}`}
		>
			<Link to={`/product/${product.id}`} className="block">
				{/* Product Image */}
				<div className="relative aspect-square overflow-hidden bg-gray-100 rounded-t-lg">
					<img
						src={product.images[0]}
						alt={product.name}
						className="w-full h-full object-cover"
						loading="lazy"
					/>

					{/* Badges */}
					<div className="absolute top-2 left-2 sm:top-3 sm:left-3 space-y-1 sm:space-y-2">
						{product.isNew && (
							<span className="bg-primary text-white text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
								NEW
							</span>
						)}
						{product.isBestseller && (
							<span className="bg-secondary-500 text-white text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
								BESTSELLER
							</span>
						)}
						{discountPercentage > 0 && (
							<span className="bg-coral text-white text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
								{discountPercentage}% OFF
							</span>
						)}
					</div>

					{/* Wishlist Toggle Button */}
					<button
						onClick={handleToggleWishlist}
						className={`absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-full transition-all duration-200 ${
							inWishlist
								? "bg-coral text-white shadow-lg scale-110"
								: "bg-white text-gray-600 hover:bg-coral hover:text-white border border-gray-200 hover:border-coral"
						}`}
						aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
						title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
					>
						<FiHeart
							className={`h-3 w-3 sm:h-4 sm:w-4 transition-all duration-200 ${
								inWishlist ? "fill-current" : ""
							}`}
						/>
					</button>

					{/* Quick Add to Cart - Shows on hover */}
					<div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
						<button
							onClick={handleAddToCart}
							className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center shadow-xl transform hover:scale-105"
						>
							<FiShoppingCart className="h-4 w-4 mr-2" />
							Quick Add
						</button>
					</div>
				</div>

				{/* Product Info */}
				<div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
					{/* Brand */}
					<p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
						{product.brand}
					</p>

					{/* Product Name */}
					<h3 className="font-medium text-gray-900 line-clamp-2 text-xs sm:text-sm leading-relaxed">
						{product.name}
					</h3>

					{/* Rating */}
					<div className="flex items-center space-x-1">
						<div className="flex items-center">
							{[...Array(5)].map((_, i) => (
								<FiStar
									key={i}
									className={`h-3 w-3 ${
										i < Math.floor(product.rating)
											? "text-warning-400 fill-current"
											: "text-gray-300"
									}`}
								/>
							))}
						</div>
						<span className="text-xs text-gray-500">
							({product.reviewCount})
						</span>
					</div>

					{/* Price */}
					<div className="flex items-center space-x-2">
						<span className="text-lg font-bold text-gray-900">
							₹{product.price}
						</span>
						{product.originalPrice > product.price && (
							<>
								<span className="text-sm text-gray-400 line-through">
									₹{product.originalPrice}
								</span>
								<span className="text-xs bg-secondary-100 text-secondary-700 px-2 py-0.5 rounded-full font-medium border border-secondary-200">
									Save ₹{product.originalPrice - product.price}
								</span>
							</>
						)}
					</div>

					{/* Available Sizes */}
					{product.sizes && product.sizes.length > 0 && (
						<div className="flex flex-wrap gap-1">
							{product.sizes.slice(0, 3).map((size) => (
								<span
									key={size}
									className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
								>
									{size}
								</span>
							))}
							{product.sizes.length > 3 && (
								<span className="px-2 py-1 text-xs bg-gray-800 text-white rounded-md">
									+{product.sizes.length - 3}
								</span>
							)}
						</div>
					)}

					{/* Stock Status */}
					{!product.inStock && (
						<div className="pt-1">
							<span className="text-xs bg-gray-500 text-white px-2 py-1 rounded-md font-medium">
								Out of Stock
							</span>
						</div>
					)}
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;
