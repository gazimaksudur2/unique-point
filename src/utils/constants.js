// Application constants
export const APP_NAME = "UniquePoint";
export const APP_TAGLINE = "Where Fashion Meets Innovation";

// Navigation constants
export const NAVIGATION_ITEMS = [
	{ name: "Home", path: "/" },
	{ name: "Boys", path: "/boys" },
	{ name: "Girls", path: "/girls" },
	{ name: "Collections", path: "/collections" },
	{ name: "Sale", path: "/sale" },
];

// Category constants
export const CATEGORIES = {
	BOYS: "boys",
	GIRLS: "girls",
};

export const AGE_GROUPS = {
	INFANTS: "infants",
	KIDS: "kids",
	TEENS: "teens",
	ADULTS: "adults",
};

export const CLOTHING_TYPES = {
	TSHIRTS: "t-shirts",
	DRESSES: "dresses",
	JEANS: "jeans",
	ETHNIC: "ethnic-wear",
	WINTER: "winter-wear",
	FOOTWEAR: "footwear",
	ACCESSORIES: "accessories",
};

// WhatsApp constants
export const WHATSAPP_NUMBER = "+1234567890"; // Replace with actual number
export const WHATSAPP_MESSAGE_TEMPLATE = {
	ORDER: "Hi! I'm interested in ordering the following items from UniquePoint:",
	INQUIRY: "Hi! I have a question about this product from UniquePoint:",
};

// Local storage keys
export const STORAGE_KEYS = {
	CART: "uniquepoint_cart",
	WISHLIST: "uniquepoint_wishlist",
	USER: "uniquepoint_user",
	AUTH_TOKEN: "uniquepoint_auth_token",
};

// API endpoints (to be updated when backend is ready)
export const API_ENDPOINTS = {
	BASE_URL: "http://localhost:3001/api",
	AUTH: {
		LOGIN: "/auth/login",
		REGISTER: "/auth/register",
		GOOGLE: "/auth/google",
		LOGOUT: "/auth/logout",
		PROFILE: "/auth/profile",
	},
	PRODUCTS: {
		LIST: "/products",
		DETAIL: "/products/:id",
		SEARCH: "/products/search",
		CATEGORIES: "/products/categories",
	},
	CART: "/cart",
	WISHLIST: "/wishlist",
	ORDERS: "/orders",
};

// Responsive breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
	SM: "640px",
	MD: "768px",
	LG: "1024px",
	XL: "1280px",
	"2XL": "1536px",
};

// Color scheme (to be refined)
export const COLORS = {
	PRIMARY: "#8B5CF6", // Purple
	SECONDARY: "#10B981", // Emerald
	ACCENT: "#F59E0B", // Amber
	NEUTRAL: {
		50: "#F9FAFB",
		100: "#F3F4F6",
		200: "#E5E7EB",
		300: "#D1D5DB",
		400: "#9CA3AF",
		500: "#6B7280",
		600: "#4B5563",
		700: "#374151",
		800: "#1F2937",
		900: "#111827",
	},
};
