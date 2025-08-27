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
import logo from "../../assets/logo_svg.svg";

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
		<header className="border-b border-gray-100 sticky top-0 z-50 shadow-sm bg-white">
			{/* Top Banner - Professional and sleek */}
			<div className="bg-primary text-white text-center py-2 sm:py-2.5">
				<div className="container mx-auto px-4">
					<p className="text-xs sm:text-sm font-medium tracking-wide">
						<span className="hidden sm:inline">
							🚚 Free shipping on orders over ₹999 • 🔄 Easy returns • 📞 24/7
							support
						</span>
						<span className="sm:hidden">
							🚚 Free shipping over ₹999 • 📞 24/7 support
						</span>
					</p>
				</div>
			</div>

			{/* Main Header */}
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
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
					<Link to="/" className="flex items-center space-x-2 sm:space-x-3">
						<div className="bg-primary text-white w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center">
							<img src={logo} alt="Logo" className="w-5 h-5 sm:w-7 sm:h-7" />
						</div>
						<div className="hidden sm:block">
							<span className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 tracking-tight">
								{APP_NAME}
							</span>
							<p className="text-xs text-gray-500 font-medium tracking-wide">
								Premium Fashion Store
							</p>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center space-x-2">
						{NAVIGATION_ITEMS.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`font-medium text-sm px-6 py-3 rounded-lg ${
									isActiveLink(item.path)
										? "text-white bg-primary"
										: "text-gray-700 hover:text-white hover:bg-primary"
								}`}
							>
								{item.name}
							</Link>
						))}
					</nav>

					{/* Right Side Icons */}
					<div className="flex items-center space-x-2 sm:space-x-3">
						{/* Search Button */}
						<button
							onClick={toggleSearch}
							className="p-2 sm:p-3 rounded-lg bg-gray-50 hover:bg-secondary-100 border border-gray-200"
							aria-label="Search"
						>
							<FiSearch className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
						</button>

						{/* Wishlist */}
						<Link
							to="/wishlist"
							className="p-2 sm:p-3 rounded-lg bg-gray-50 hover:bg-secondary-100 border border-gray-200 relative"
							aria-label="Wishlist"
						>
							<FiHeart className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
							{wishlistItemsCount > 0 && (
								<span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-coral text-white text-xs font-semibold rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
									{wishlistItemsCount}
								</span>
							)}
						</Link>

						{/* Shopping Cart */}
						<Link
							to="/cart"
							className="p-2 sm:p-3 rounded-lg bg-gray-50 hover:bg-secondary-100 border border-gray-200 relative"
							aria-label="Shopping cart"
						>
							<FiShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
							{cartItemsCount > 0 && (
								<span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-coral text-white text-xs font-semibold rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
									{cartItemsCount}
								</span>
							)}
						</Link>

						{/* User Profile / Login */}
						{isAuthenticated ? (
							<Link
								to="/profile"
								className="p-3 rounded-xl bg-gray-50 hover:bg-secondary-50 hover:text-secondary-600 transition-all group border border-gray-200"
								aria-label="Profile"
							>
								<FiUser className="h-5 w-5 text-gray-600 group-hover:text-secondary-600" />
							</Link>
						) : (
							<Link
								to="/auth"
								className="ml-2 bg-coral hover:bg-coral-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm"
							>
								<span className="hidden sm:inline">Sign In</span>
								<span className="sm:hidden">Login</span>
							</Link>
						)}
					</div>
				</div>

				{/* Search Bar - Collapsible */}
				{isSearchOpen && (
					<div className="py-6 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
						<div className="relative">
							<input
								type="text"
								placeholder="Search for products, brands, categories..."
								className="w-full px-4 py-4 pl-12 pr-24 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all shadow-sm"
								autoFocus
							/>
							<FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
							<button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-xl text-sm font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-md">
								Search
							</button>
						</div>
					</div>
				)}
			</div>

			{/* Mobile Navigation Menu */}
			{isMobileMenuOpen && (
				<div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
					<nav className="px-6 py-6 space-y-2">
						{NAVIGATION_ITEMS.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`block px-6 py-4 rounded-xl font-medium transition-all ${
									isActiveLink(item.path)
										? "bg-primary-700 text-white shadow-md"
										: "text-gray-700 hover:bg-primary-50 hover:text-primary-700"
								}`}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item.name}
							</Link>
						))}

						{/* Mobile-only links */}
						<div className="border-t border-gray-100 pt-6 mt-6 space-y-2">
							<Link
								to="/wishlist"
								className="flex items-center justify-between px-6 py-4 rounded-xl font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<span>Wishlist</span>
								{wishlistItemsCount > 0 && (
									<span className="bg-danger-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
										{wishlistItemsCount}
									</span>
								)}
							</Link>
							<Link
								to="/cart"
								className="flex items-center justify-between px-6 py-4 rounded-xl font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<span>Shopping Cart</span>
								{cartItemsCount > 0 && (
									<span className="bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
										{cartItemsCount}
									</span>
								)}
							</Link>
							{!isAuthenticated && (
								<Link
									to="/auth"
									className="block px-6 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 text-center mt-3 shadow-md"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Sign In
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
