import React from "react";
import { useApp } from "../context/AppContext";
import { STORAGE_KEYS } from "../utils/constants";

const TestLocalStorage = () => {
	const { cart, wishlist, addToCart, toggleWishlist } = useApp();

	const testAddToCart = () => {
		const testProduct = {
			id: 999,
			name: "Test Product",
			price: 100,
			originalPrice: 150,
			images: ["test.jpg"],
			brand: "Test Brand",
			size: "M",
			color: "Red",
			quantity: 1,
		};
		addToCart(testProduct);
	};

	const testAddToWishlist = () => {
		const testProduct = {
			id: 888,
			name: "Test Wishlist Product",
			price: 200,
			originalPrice: 250,
			images: ["test2.jpg"],
			brand: "Test Brand",
		};
		toggleWishlist(testProduct);
	};

	const checkLocalStorage = () => {
		const cartData = localStorage.getItem(STORAGE_KEYS.CART);
		const wishlistData = localStorage.getItem(STORAGE_KEYS.WISHLIST);

		console.log("Current localStorage data:");
		console.log("Cart:", cartData);
		console.log("Wishlist:", wishlistData);

		alert(`Cart: ${cartData}\nWishlist: ${wishlistData}`);
	};

	const clearLocalStorage = () => {
		localStorage.removeItem(STORAGE_KEYS.CART);
		localStorage.removeItem(STORAGE_KEYS.WISHLIST);
		window.location.reload();
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold mb-6">localStorage Test Page</h1>

			<div className="space-y-4">
				<div className="bg-white p-4 rounded-lg shadow">
					<h2 className="font-semibold mb-2">Current State:</h2>
					<p>Cart items: {cart.length}</p>
					<p>Wishlist items: {wishlist.length}</p>
				</div>

				<div className="space-x-4">
					<button
						onClick={testAddToCart}
						className="bg-blue-500 text-white px-4 py-2 rounded"
					>
						Add Test Item to Cart
					</button>

					<button
						onClick={testAddToWishlist}
						className="bg-red-500 text-white px-4 py-2 rounded"
					>
						Toggle Test Item in Wishlist
					</button>

					<button
						onClick={checkLocalStorage}
						className="bg-green-500 text-white px-4 py-2 rounded"
					>
						Check localStorage
					</button>

					<button
						onClick={clearLocalStorage}
						className="bg-gray-500 text-white px-4 py-2 rounded"
					>
						Clear localStorage & Reload
					</button>
				</div>

				<div className="bg-yellow-100 p-4 rounded-lg">
					<h3 className="font-semibold mb-2">Test Instructions:</h3>
					<ol className="list-decimal list-inside space-y-1 text-sm">
						<li>Open browser DevTools Console</li>
						<li>Click "Add Test Item to Cart"</li>
						<li>Check console for "Persisting cart:" message</li>
						<li>Click "Check localStorage" to see stored data</li>
						<li>Refresh the page (F5)</li>
						<li>Check if cart items are still there</li>
					</ol>
				</div>
			</div>
		</div>
	);
};

export default TestLocalStorage;
