import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { scrollToElement, scrollToTop } from "../../utils/scrollUtils";

const Layout = ({ children }) => {
	const location = useLocation();

	// Handle scroll behavior on route changes
	useEffect(() => {
		const hash = location.hash;
		if (hash) {
			// Remove the # from hash
			const sectionId = hash.substring(1);
			// Small delay to ensure DOM is rendered
			setTimeout(() => {
				scrollToElement(sectionId);
			}, 100);
		} else {
			// No hash, scroll to top
			scrollToTop();
		}
	}, [location.pathname, location.hash]);

	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			<Header />
			<main className="flex-1">{children}</main>
			{/* Floating WhatsApp Button */}
			<a
				href="https://wa.me/+8801876658343"
				target="_blank"
				rel="noopener noreferrer"
				className="fixed bottom-6 right-6 md:bottom-10 md:right-10 lg:bottom-15 lg:right-15 z-50 rounded-full shadow-xl scale-125 md:scale-150 xl:scale-200"
				title="Chat on WhatsApp"
			>
				{/* <span className="font-semibold">WhatsApp</span> */}
				<img src="https://cdn-icons-png.flaticon.com/128/4423/4423697.png" alt="WhatsApp" className="w-6 h-6" />
			</a>
			<Footer />
		</div>
	);
};

export default Layout;
