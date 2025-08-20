import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	FiMenu,
	FiX,
	FiSearch,
	FiShoppingCart,
	FiHeart,
	FiUser,
	FiLogIn,
} from "react-icons/fi";
import { useApp } from "../../context/AppContext";
import { APP_NAME, NAVIGATION_ITEMS } from "../../utils/constants";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const { isAuthenticated, cartItemsCount, wishlistItemsCount } = useApp();
	const location = useLocation();

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen);
	};

	const isActiveLink = (path) => {
		return location.pathname === path;
	};

	return (
		<header className="bg-white shadow-md sticky top-0 z-50">
			{/* Top Banner - Optional promotional banner */}
			<div className="bg-purple-600 text-white text-center py-2 text-sm">
				<p>Free shipping on orders over ₹999! 🚚</p>
			</div>

			{/* Main Header */}
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Mobile Menu Button */}
					<button
						onClick={toggleMobileMenu}
						className="md:hidden p-2 rounded-md hover:bg-gray-100"
						aria-label="Toggle mobile menu"
					>
						{isMobileMenuOpen ? (
							<FiX className="h-6 w-6" />
						) : (
							<FiMenu className="h-6 w-6" />
						)}
					</button>

					{/* Logo */}
					<Link to="/" className="flex items-center space-x-2">
						<div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-lg">
							<span className="font-bold text-xl">UP</span>
						</div>
						<span className="font-bold text-xl text-gray-800 hidden sm:block">
							{APP_NAME}
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{NAVIGATION_ITEMS.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`font-medium transition-colors hover:text-purple-600 ${
									isActiveLink(item.path)
										? "text-purple-600 border-b-2 border-purple-600 pb-1"
										: "text-gray-700"
								}`}
							>
								{item.name}
							</Link>
						))}
					</nav>

					{/* Right Side Icons */}
					<div className="flex items-center space-x-4">
						{/* Search Button */}
						<button
							onClick={toggleSearch}
							className="p-2 rounded-md hover:bg-gray-100 transition-colors"
							aria-label="Search"
						>
							<FiSearch className="h-5 w-5 text-gray-600" />
						</button>

						{/* Wishlist */}
						<Link
							to="/wishlist"
							className="p-2 rounded-md hover:bg-gray-100 transition-colors relative"
							aria-label="Wishlist"
						>
							<FiHeart className="h-5 w-5 text-gray-600" />
							{wishlistItemsCount > 0 && (
								<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
									{wishlistItemsCount}
								</span>
							)}
						</Link>

						{/* Shopping Cart */}
						<Link
							to="/cart"
							className="p-2 rounded-md hover:bg-gray-100 transition-colors relative"
							aria-label="Shopping cart"
						>
							<FiShoppingCart className="h-5 w-5 text-gray-600" />
							{cartItemsCount > 0 && (
								<span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
									{cartItemsCount}
								</span>
							)}
						</Link>

						{/* User Profile / Login */}
						{isAuthenticated ? (
							<Link
								to="/profile"
								className="p-2 rounded-md hover:bg-gray-100 transition-colors"
								aria-label="Profile"
							>
								<FiUser className="h-5 w-5 text-gray-600" />
							</Link>
						) : (
							<Link
								to="/auth"
								className="flex items-center space-x-1 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
							>
								<FiLogIn className="h-4 w-4" />
								<span className="hidden sm:block">Login</span>
							</Link>
						)}
					</div>
				</div>

				{/* Search Bar - Collapsible */}
				{isSearchOpen && (
					<div className="py-4 border-t">
						<div className="relative">
							<input
								type="text"
								placeholder="Search for fashion items..."
								className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
								autoFocus
							/>
							<FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
						</div>
					</div>
				)}
			</div>

			{/* Mobile Navigation Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden bg-white border-t border-gray-200">
					<nav className="px-4 py-4 space-y-2">
						{NAVIGATION_ITEMS.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`block px-3 py-2 rounded-md font-medium transition-colors ${
									isActiveLink(item.path)
										? "bg-purple-100 text-purple-600"
										: "text-gray-700 hover:bg-gray-100"
								}`}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item.name}
							</Link>
						))}

						{/* Mobile-only links */}
						<div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
							<Link
								to="/wishlist"
								className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:bg-gray-100"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Wishlist ({wishlistItemsCount})
							</Link>
							<Link
								to="/cart"
								className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:bg-gray-100"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Cart ({cartItemsCount})
							</Link>
							{!isAuthenticated && (
								<Link
									to="/auth"
									className="block px-3 py-2 rounded-md font-medium bg-purple-600 text-white hover:bg-purple-700"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Login / Sign Up
								</Link>
							)}
						</div>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;
