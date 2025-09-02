import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	FiMenu,
	FiX,
	FiSearch,
	FiShoppingCart,
	FiHeart,
	FiUser,
	FiLogIn,
	FiMapPin,
	FiChevronDown,
	FiGlobe,
} from "react-icons/fi";
import { useApp } from "../../context/AppContext";
import { APP_NAME, NAVIGATION_ITEMS } from "../../utils/constants";
import logo from "../../assets/logo_jpg.jpg";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
	const [selectedLocation, setSelectedLocation] = useState("United States");
	const [selectedLanguage, setSelectedLanguage] = useState("English (USA)");
	const { isAuthenticated, cartItemsCount, wishlistItemsCount } = useApp();
	const location = useLocation();
	const userMenuRef = useRef(null);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen);
	};

	const toggleUserMenu = () => {
		setIsUserMenuOpen(!isUserMenuOpen);
	};

	const isActiveLink = (path) => {
		return location.pathname === path;
	};

	// Close user menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
				setIsUserMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<header className="sticky top-0 z-50 bg-white shadow-sm">
			{/* Top Utility Bar */}
			{/* <div className="bg-gray-50 border-b border-gray-200">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between h-10 text-xs sm:text-sm">
						<div className="flex items-center space-x-4">
							<div className="flex items-center space-x-1 text-gray-700">
								<FiMapPin className="h-3 w-3 sm:h-4 sm:w-4" />
								<span className="hidden sm:inline">Deliver to:</span>
								<button className="font-medium hover:text-primary-600 flex items-center">
									{selectedLocation}
									<FiChevronDown className="ml-1 h-3 w-3" />
								</button>
							</div>
						</div>

						<div className="flex items-center space-x-4">
							<div className="hidden sm:flex items-center space-x-1 text-gray-700">
								<FiGlobe className="h-4 w-4" />
								<button className="font-medium hover:text-primary-600 flex items-center">
									{selectedLanguage}
									<FiChevronDown className="ml-1 h-3 w-3" />
								</button>
							</div>
							<div className="text-coral-600 font-medium">
								🚚 Free shipping over ₹999
							</div>
						</div>
					</div>
				</div>
			</div> */}

			{/* Main Header */}
			<div className="bg-white border-b border-gray-100">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between h-16 lg:h-20">
						{/* Logo */}
						<div className="flex items-center">
							<button
								onClick={toggleMobileMenu}
								className="lg:hidden p-2 rounded-md hover:bg-gray-100 mr-3"
								aria-label="Toggle mobile menu"
							>
								{isMobileMenuOpen ? (
									<FiX className="h-6 w-6" />
								) : (
									<FiMenu className="h-6 w-6" />
								)}
							</button>

							<Link to="/" className="flex items-center space-x-3">
								<div className="bg-primary text-white w-10 h-10 lg:w-12 lg:h-12 rounded-xl">
									{/* <img
										src={logo}
										alt="Logo"
										className="w-6 h-6 lg:w-7 lg:h-7 scale-200"
									/> */}
									<img
										src={logo}
										alt="Logo"
										className="w-full h-full object-fill scale-150"
									/>
								</div>
								<div className="hidden sm:block">
									<span className="font-bold text-xl lg:text-2xl text-gray-900 tracking-tight">
										{APP_NAME}
									</span>
									<p className="text-xs text-gray-500 font-medium">
										Premium Fashion Store
									</p>
								</div>
							</Link>
						</div>

						{/* Search Bar - Desktop */}
						<div className="hidden sm:flex flex-1 max-w-2xl mx-8">
							<div className="relative w-full">
								<div className="flex">
									<select className="bg-gray-50 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
										<option>All categories</option>
										<option>Kids</option>
										<option>Teens</option>
										<option>Accessories</option>
									</select>
									<input
										type="text"
										placeholder="What can we help you find today?"
										className="flex-1 px-4 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
									/>
									<button className="bg-primary hover:bg-primary-600 text-white px-6 py-2 rounded-r-lg flex items-center justify-center">
										<FiSearch className="h-5 w-5" />
									</button>
								</div>
							</div>
						</div>

						{/* Right Side Actions */}
						<div className="flex items-center space-x-1 sm:space-x-3">
							{/* Mobile Search Button */}
							<button
								onClick={toggleSearch}
								className="sm:hidden p-2 text-gray-600 hover:text-primary-600"
								aria-label="Search"
							>
								<FiSearch className="h-5 w-5" />
							</button>

							{/* Favorites */}
							<Link
								to="/wishlist"
								className="flex flex-col items-center p-2 text-gray-700 hover:text-coral-600 relative"
								aria-label="Favorites"
							>
								<div className="relative">
									<FiHeart className="h-5 w-5" />
									{wishlistItemsCount > 0 && (
										<span className="absolute -top-2 -right-2 bg-coral text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
											{wishlistItemsCount}
										</span>
									)}
								</div>
								<span className="hidden lg:block text-xs mt-1 font-medium">
									Favorites
								</span>
							</Link>

							{/* My Cart */}
							<Link
								to="/cart"
								className="flex flex-col items-center p-2 text-gray-700 hover:text-coral-600 relative"
								aria-label="My Cart"
							>
								<div className="relative">
									<FiShoppingCart className="h-5 w-5" />
									{cartItemsCount > 0 && (
										<span className="absolute -top-2 -right-2 bg-coral text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
											{cartItemsCount}
										</span>
									)}
								</div>
								<span className="hidden lg:block text-xs mt-1 font-medium">
									My Cart
								</span>
							</Link>

							{/* My Account */}
							<div className="relative" ref={userMenuRef}>
								{isAuthenticated ? (
									<button
										onClick={toggleUserMenu}
										className="flex flex-col items-center p-2 text-gray-700 hover:text-primary-600"
										aria-label="My Account"
									>
										<div className="flex items-center">
											<FiUser className="h-5 w-5" />
											<FiChevronDown className="h-3 w-3 ml-1" />
										</div>
										<span className="hidden lg:block text-xs mt-1 font-medium">
											My Account
										</span>
									</button>
								) : (
									<Link
										to="/auth"
										className="flex flex-col items-center p-2 text-gray-700 hover:text-primary-600"
										aria-label="Sign In"
									>
										<FiUser className="h-5 w-5" />
										<span className="hidden lg:block text-xs mt-1 font-medium">
											Sign In
										</span>
									</Link>
								)}

								{/* User Dropdown Menu */}
								{isAuthenticated && isUserMenuOpen && (
									<div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
										<Link
											to="/profile"
											className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
											onClick={() => setIsUserMenuOpen(false)}
										>
											<FiUser className="h-4 w-4 mr-3" />
											My Profile
										</Link>
										<Link
											to="/orders"
											className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
											onClick={() => setIsUserMenuOpen(false)}
										>
											<FiPackage className="h-4 w-4 mr-3" />
											My Orders
										</Link>
										<Link
											to="/settings"
											className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
											onClick={() => setIsUserMenuOpen(false)}
										>
											<FiSettings className="h-4 w-4 mr-3" />
											Settings
										</Link>
										<hr className="my-2" />
										<button
											onClick={() => {
												// Add logout logic here
												setIsUserMenuOpen(false);
											}}
											className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
										>
											<FiLogOut className="h-4 w-4 mr-3" />
											Sign Out
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>

				{/* Navigation Bar */}
				<div className="bg-white border-b border-gray-100">
					<div className="container mx-auto px-4">
						<nav className="hidden lg:flex items-center space-x-8 h-12">
							{NAVIGATION_ITEMS.map((item) => (
								<Link
									key={item.path}
									to={item.path}
									className={`font-medium text-sm hover:text-primary-600 transition-colors ${
										isActiveLink(item.path)
											? "text-primary-600 border-b-2 border-primary-600"
											: "text-gray-700"
									}`}
								>
									{item.name}
								</Link>
							))}
							{/* <div className="ml-auto flex items-center space-x-6 text-sm">
								<Link
									to="/bestsellers"
									className="text-coral-600 font-medium hover:text-coral-700"
								>
									Best Sellers
								</Link>
								<Link
									to="/new-arrivals"
									className="text-primary-600 font-medium hover:text-primary-700"
								>
									New Arrivals
								</Link>
								<Link
									to="/products"
									className="text-coral-600 font-medium hover:text-coral-700"
								>
									All Products
								</Link>
							</div> */}
						</nav>
					</div>
				</div>

				{/* Mobile Search Bar - Collapsible */}
				{isSearchOpen && (
					<div className="sm:hidden py-4 bg-gray-50 border-t border-gray-200">
						<div className="container mx-auto px-4">
							<div className="flex">
								<select className="bg-white border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
									<option>All</option>
									<option>Kids</option>
									<option>Teens</option>
								</select>
								<input
									type="text"
									placeholder="What can we help you find today?"
									className="flex-1 px-4 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
								/>
								<button className="bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded-r-lg">
									<FiSearch className="h-5 w-5" />
								</button>
							</div>
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
									<span className="bg-coral text-white text-xs font-semibold px-2 py-1 rounded-full">
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
									<span className="bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
										{cartItemsCount}
									</span>
								)}
							</Link>
							{!isAuthenticated && (
								<Link
									to="/auth"
									className="block px-6 py-4 rounded-xl font-semibold bg-primary hover:bg-primary-600 text-white text-center mt-3"
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
