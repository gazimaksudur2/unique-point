import React, {
	createContext,
	useContext,
	useReducer,
	useEffect,
	useState,
} from "react";
import { STORAGE_KEYS } from "../utils/constants";

// Initial state
const initialState = {
	user: null,
	isAuthenticated: false,
	cart: [],
	wishlist: [],
	loading: false,
	error: null,
};

// Action types
export const ACTION_TYPES = {
	SET_LOADING: "SET_LOADING",
	SET_ERROR: "SET_ERROR",
	SET_USER: "SET_USER",
	LOGOUT: "LOGOUT",
	ADD_TO_CART: "ADD_TO_CART",
	REMOVE_FROM_CART: "REMOVE_FROM_CART",
	UPDATE_CART_QUANTITY: "UPDATE_CART_QUANTITY",
	CLEAR_CART: "CLEAR_CART",
	ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
	REMOVE_FROM_WISHLIST: "REMOVE_FROM_WISHLIST",
	TOGGLE_WISHLIST: "TOGGLE_WISHLIST",
	LOAD_PERSISTED_DATA: "LOAD_PERSISTED_DATA",
};

// Reducer function
function appReducer(state, action) {
	switch (action.type) {
		case ACTION_TYPES.SET_LOADING:
			return { ...state, loading: action.payload };

		case ACTION_TYPES.SET_ERROR:
			return { ...state, error: action.payload };

		case ACTION_TYPES.SET_USER:
			return {
				...state,
				user: action.payload,
				isAuthenticated: !!action.payload,
			};

		case ACTION_TYPES.LOGOUT:
			return {
				...state,
				user: null,
				isAuthenticated: false,
				cart: [],
				wishlist: [],
			};

		case ACTION_TYPES.ADD_TO_CART:
			const existingCartItem = state.cart.find(
				(item) =>
					item.id === action.payload.id &&
					item.size === action.payload.size &&
					item.color === action.payload.color
			);

			if (existingCartItem) {
				return {
					...state,
					cart: state.cart.map((item) =>
						item.id === action.payload.id &&
						item.size === action.payload.size &&
						item.color === action.payload.color
							? { ...item, quantity: item.quantity + action.payload.quantity }
							: item
					),
				};
			}

			return {
				...state,
				cart: [...state.cart, { ...action.payload, cartId: Date.now() }],
			};

		case ACTION_TYPES.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((item) => item.cartId !== action.payload),
			};

		case ACTION_TYPES.UPDATE_CART_QUANTITY:
			return {
				...state,
				cart: state.cart.map((item) =>
					item.cartId === action.payload.cartId
						? { ...item, quantity: action.payload.quantity }
						: item
				),
			};

		case ACTION_TYPES.CLEAR_CART:
			return { ...state, cart: [] };

		case ACTION_TYPES.ADD_TO_WISHLIST:
			const isInWishlist = state.wishlist.some(
				(item) => item.id === action.payload.id
			);
			if (isInWishlist) return state;

			return {
				...state,
				wishlist: [...state.wishlist, action.payload],
			};

		case ACTION_TYPES.REMOVE_FROM_WISHLIST:
			return {
				...state,
				wishlist: state.wishlist.filter((item) => item.id !== action.payload),
			};

		case ACTION_TYPES.TOGGLE_WISHLIST:
			const isCurrentlyInWishlist = state.wishlist.some(
				(item) => item.id === action.payload.id
			);

			if (isCurrentlyInWishlist) {
				// Remove from wishlist
				return {
					...state,
					wishlist: state.wishlist.filter(
						(item) => item.id !== action.payload.id
					),
				};
			} else {
				// Add to wishlist
				return {
					...state,
					wishlist: [...state.wishlist, action.payload],
				};
			}

		case ACTION_TYPES.LOAD_PERSISTED_DATA:
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
}

// Create context
const AppContext = createContext();

// Context provider component
export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, initialState);
	const [isInitialized, setIsInitialized] = useState(false);

	// Load persisted data on mount
	useEffect(() => {
		const loadPersistedData = () => {
			try {
				const persistedCart = localStorage.getItem(STORAGE_KEYS.CART);
				const persistedWishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST);
				const persistedUser = localStorage.getItem(STORAGE_KEYS.USER);

				const cartData = persistedCart ? JSON.parse(persistedCart) : [];
				const wishlistData = persistedWishlist
					? JSON.parse(persistedWishlist)
					: [];
				const userData = persistedUser ? JSON.parse(persistedUser) : null;

				// Data loaded successfully from localStorage

				dispatch({
					type: ACTION_TYPES.LOAD_PERSISTED_DATA,
					payload: {
						cart: cartData,
						wishlist: wishlistData,
						user: userData,
						isAuthenticated: !!userData,
					},
				});

				setIsInitialized(true);
			} catch (error) {
				console.error("Error loading persisted data:", error);
				// Initialize with empty arrays if there's an error
				dispatch({
					type: ACTION_TYPES.LOAD_PERSISTED_DATA,
					payload: {
						cart: [],
						wishlist: [],
						user: null,
						isAuthenticated: false,
					},
				});
				setIsInitialized(true);
			}
		};

		loadPersistedData();
	}, []);

	// Persist cart to localStorage
	useEffect(() => {
		if (!isInitialized) return; // Don't persist during initial load

		try {
			localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
		} catch (error) {
			console.error("Error persisting cart:", error);
		}
	}, [state.cart, isInitialized]);

	// Persist wishlist to localStorage
	useEffect(() => {
		if (!isInitialized) return; // Don't persist during initial load

		try {
			localStorage.setItem(
				STORAGE_KEYS.WISHLIST,
				JSON.stringify(state.wishlist)
			);
		} catch (error) {
			console.error("Error persisting wishlist:", error);
		}
	}, [state.wishlist, isInitialized]);

	// Persist user to localStorage (removed since no authentication)
	useEffect(() => {
		if (state.user) {
			try {
				localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(state.user));
			} catch (error) {
				console.error("Error persisting user:", error);
			}
		} else {
			localStorage.removeItem(STORAGE_KEYS.USER);
		}
	}, [state.user]);

	// Action creators
	const actions = {
		setLoading: (loading) =>
			dispatch({ type: ACTION_TYPES.SET_LOADING, payload: loading }),
		setError: (error) =>
			dispatch({ type: ACTION_TYPES.SET_ERROR, payload: error }),
		setUser: (user) => dispatch({ type: ACTION_TYPES.SET_USER, payload: user }),
		logout: () => {
			localStorage.removeItem(STORAGE_KEYS.USER);
			localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
			dispatch({ type: ACTION_TYPES.LOGOUT });
		},
		addToCart: (product) =>
			dispatch({ type: ACTION_TYPES.ADD_TO_CART, payload: product }),
		removeFromCart: (cartId) =>
			dispatch({ type: ACTION_TYPES.REMOVE_FROM_CART, payload: cartId }),
		updateCartQuantity: (cartId, quantity) =>
			dispatch({
				type: ACTION_TYPES.UPDATE_CART_QUANTITY,
				payload: { cartId, quantity },
			}),
		clearCart: () => dispatch({ type: ACTION_TYPES.CLEAR_CART }),
		addToWishlist: (product) =>
			dispatch({ type: ACTION_TYPES.ADD_TO_WISHLIST, payload: product }),
		removeFromWishlist: (productId) =>
			dispatch({
				type: ACTION_TYPES.REMOVE_FROM_WISHLIST,
				payload: productId,
			}),
		toggleWishlist: (product) =>
			dispatch({ type: ACTION_TYPES.TOGGLE_WISHLIST, payload: product }),
	};

	const value = {
		...state,
		...actions,
		cartItemsCount: state.cart.reduce(
			(total, item) => total + item.quantity,
			0
		),
		wishlistItemsCount: state.wishlist.length,
		cartTotal: state.cart.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		),
		isInWishlist: (productId) =>
			state.wishlist.some((item) => item.id === productId),
		isInCart: (productId) => state.cart.some((item) => item.id === productId),
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useApp = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useApp must be used within an AppProvider");
	}
	return context;
};

export default AppContext;
