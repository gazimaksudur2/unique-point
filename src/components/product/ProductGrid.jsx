import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, loading = false, className = "" }) => {
	if (loading) {
		return (
			<div
				className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 ${className}`}
			>
				{[...Array(8)].map((_, index) => (
					<div key={index} className="animate-pulse">
						<div className="bg-gray-200 aspect-square rounded-lg mb-4"></div>
						<div className="space-y-2">
							<div className="h-4 bg-gray-200 rounded w-3/4"></div>
							<div className="h-4 bg-gray-200 rounded w-1/2"></div>
							<div className="h-4 bg-gray-200 rounded w-1/4"></div>
						</div>
					</div>
				))}
			</div>
		);
	}

	if (!products || products.length === 0) {
		return (
			<div className="text-center py-12">
				<div className="text-gray-400 text-6xl mb-4">🛍️</div>
				<h3 className="text-lg font-medium text-gray-900 mb-2">
					No products found
				</h3>
				<p className="text-gray-500">
					Try adjusting your filters or search terms.
				</p>
			</div>
		);
	}

	return (
		<div
			className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 ${className}`}
		>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductGrid;
