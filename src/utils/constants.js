// Application constants
export const APP_NAME = "UniquePoint";
export const APP_TAGLINE = "Where Fashion Meets Innovation";

// Navigation constants
export const NAVIGATION_ITEMS = [
	{ name: "Home", path: "/" },
	{ name: "Products", path: "/products" },
	{ name: "Gallery", path: "/gallery" },
	{ name: "FAQ", path: "/faq" },
	{ name: "Contacts", path: "/contacts" },
];

// Category constants
export const CATEGORIES = {
	MENS: "Mens",
};

export const AGE_GROUPS = {
	ADULTS: "Adult",
};

export const CLOTHING_TYPES = {
	POLO_TSHIRTS: "polo-tshirts",
};

// Delivery charges
export const DELIVERY_CHARGES = {
	DHAKA: 60,
	OUTSIDE_DHAKA: 120,
};
// WhatsApp constants
export const WHATSAPP_NUMBER = "+8801876658343"; // Replace with actual number
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

// Professional E-commerce Color Scheme
export const COLORS = {
	PRIMARY: "#A1C398", // Sage Green - Main brand color
	SECONDARY: "#C6EBC5", // Light Green - Soft accent
	CREAM: "#FEFDED", // Cream - Background/neutral
	CORAL: "#FA7070", // Coral Pink - Accent/CTA
	ACCENT: "#FA7070", // Same as coral for consistency
	SUCCESS: "#A1C398", // Use primary for success
	WARNING: "#FA7070", // Use coral for warnings
	NEUTRAL: {
		50: "#fafafa",
		100: "#f4f4f5",
		200: "#e4e4e7",
		300: "#d4d4d8",
		400: "#a1a1aa",
		500: "#71717a",
		600: "#52525b",
		700: "#3f3f46",
		800: "#27272a",
		900: "#18181b",
	},
};
