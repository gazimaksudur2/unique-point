import React from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import { useApp } from "../../context/AppContext";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

const ProductCard = ({ product, className = "" }) => {
	const { addToCart, addToWishlist, wishlist } = useApp();

	const isInWishlist = wishlist.some((item) => item.id === product.id);
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
			image: product.images[0],
			size: product.sizes[0], // Default to first available size
			color: product.colors[0], // Default to first available color
			quantity: 1,
		};

		addToCart(cartItem);
	};

	const handleAddToWishlist = (e) => {
		e.preventDefault();
		e.stopPropagation();

		addToWishlist({
			id: product.id,
			name: product.name,
			price: product.price,
			image: product.images[0],
		});
	};

	return (
		<div
			className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${className}`}
		>
			<Link to={`/product/${product.id}`} className="block">
				{/* Product Image */}
				<div className="relative aspect-square overflow-hidden bg-gray-100">
					<img
						src={product.images[0]}
						alt={product.name}
						className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
						loading="lazy"
					/>

					{/* Badges */}
					<div className="absolute top-2 left-2 space-y-1">
						{product.isNew && (
							<Badge variant="success" size="sm">
								New
							</Badge>
						)}
						{product.isBestseller && (
							<Badge variant="warning" size="sm">
								Bestseller
							</Badge>
						)}
						{discountPercentage > 0 && (
							<Badge variant="danger" size="sm">
								{discountPercentage}% OFF
							</Badge>
						)}
					</div>

					{/* Wishlist Button */}
					<button
						onClick={handleAddToWishlist}
						className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${
							isInWishlist
								? "bg-red-500 text-white"
								: "bg-white text-gray-600 hover:text-red-500"
						}`}
						aria-label="Add to wishlist"
					>
						<FiHeart
							className="h-4 w-4"
							fill={isInWishlist ? "currentColor" : "none"}
						/>
					</button>

					{/* Quick Add to Cart - Shows on hover */}
					<div className="absolute bottom-2 left-2 right-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
						<Button onClick={handleAddToCart} size="sm" className="w-full">
							<FiShoppingCart className="h-4 w-4 mr-2" />
							Quick Add
						</Button>
					</div>
				</div>

				{/* Product Info */}
				<div className="p-4 space-y-2">
					{/* Brand */}
					<p className="text-xs text-gray-500 uppercase tracking-wide">
						{product.brand}
					</p>

					{/* Product Name */}
					<h3 className="font-medium text-gray-900 line-clamp-2">
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
											? "text-yellow-400 fill-current"
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
							<span className="text-sm text-gray-500 line-through">
								₹{product.originalPrice}
							</span>
						)}
					</div>

					{/* Available Sizes */}
					<div className="flex flex-wrap gap-1">
						{product.sizes.slice(0, 3).map((size) => (
							<span
								key={size}
								className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
							>
								{size}
							</span>
						))}
						{product.sizes.length > 3 && (
							<span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
								+{product.sizes.length - 3}
							</span>
						)}
					</div>

					{/* Stock Status */}
					{!product.inStock && (
						<div className="pt-2">
							<Badge variant="danger" size="sm">
								Out of Stock
							</Badge>
						</div>
					)}
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;
