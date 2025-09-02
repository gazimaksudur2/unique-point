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
			<Footer />
		</div>
	);
};

export default Layout;
