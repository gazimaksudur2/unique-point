// Scroll utility functions for smooth navigation and anchor scrolling
import React from "react";

/**
 * Smoothly scrolls to the top of the page
 */
export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
};

/**
 * Scrolls to a specific element by ID with smooth behavior
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Optional offset from the top (default: 80px for fixed header)
 */
export const scrollToElement = (elementId, offset = 80) => {
	const element = document.getElementById(elementId);
	if (element) {
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.pageYOffset - offset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	}
};

/**
 * Scrolls to a specific section on the current page or navigates to another page and scrolls
 * @param {function} navigate - React Router navigate function
 * @param {string} path - The path to navigate to (e.g., "/", "/products")
 * @param {string} sectionId - Optional section ID to scroll to
 */
export const navigateToSection = (navigate, path, sectionId = null) => {
	const currentPath = window.location.pathname;

	if (currentPath === path) {
		// Already on the same page, just scroll
		if (sectionId) {
			scrollToElement(sectionId);
		} else {
			scrollToTop();
		}
	} else {
		// Navigate to different page
		if (sectionId) {
			// Navigate with hash for section
			navigate(`${path}#${sectionId}`);
		} else {
			// Navigate to page top
			navigate(path);
		}
	}
};

/**
 * Hook to handle scroll to section after navigation
 * Should be used in page components to handle hash navigation
 */
export const useScrollToHash = () => {
	React.useEffect(() => {
		const hash = window.location.hash;
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
	}, [window.location.pathname, window.location.hash]);
};

/**
 * Gets the current scroll position
 * @returns {number} Current scroll Y position
 */
export const getScrollPosition = () => {
	return window.pageYOffset || document.documentElement.scrollTop;
};

/**
 * Checks if an element is in viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} True if element is in viewport
 */
export const isElementInViewport = (element) => {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

/**
 * Debounce function for scroll events
 * @param {function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {function} Debounced function
 */
export const debounce = (func, wait) => {
	let timeout;
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};
