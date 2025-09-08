import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Gallery from "../pages/Gallery";
import FAQ from "../pages/FAQ";
import Contacts from "../pages/Contacts";
import SizeGuide from "../pages/SizeGuide";
import Blog from "../pages/Blog";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";
import MyOrders from "../pages/MyOrders";
import NotFound from "../pages/NotFound";
import ServerError from "../pages/ServerError";
import ForbiddenError from "../pages/ForbiddenError";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Layout>
				<Home />
			</Layout>
		),
	},
	{
		path: "/products",
		element: (
			<Layout>
				<Products />
			</Layout>
		),
	},
	{
		path: "/product/:id",
		element: (
			<Layout>
				<ProductDetail />
			</Layout>
		),
	},
	{
		path: "/gallery",
		element: (
			<Layout>
				<Gallery />
			</Layout>
		),
	},
	{
		path: "/faq",
		element: (
			<Layout>
				<FAQ />
			</Layout>
		),
	},
	{
		path: "/contacts",
		element: (
			<Layout>
				<Contacts />
			</Layout>
		),
	},
	{
		path: "/size-guide",
		element: (
			<Layout>
				<SizeGuide />
			</Layout>
		),
	},
	{
		path: "/blog",
		element: (
			<Layout>
				<Blog />
			</Layout>
		),
	},
	{
		path: "/cart",
		element: (
			<Layout>
				<Cart />
			</Layout>
		),
	},
	{
		path: "/wishlist",
		element: (
			<Layout>
				<Wishlist />
			</Layout>
		),
	},
	{
		path: "/checkout",
		element: (
			<Layout>
				<Checkout />
			</Layout>
		),
	},
	{
		path: "/order-success",
		element: (
			<Layout>
				<OrderSuccess />
			</Layout>
		),
	},
	{
		path: "/my-orders",
		element: (
			<Layout>
				<MyOrders />
			</Layout>
		),
	},
	// Error pages
	{
		path: "/404",
		element: <NotFound />,
	},
	{
		path: "/500",
		element: <ServerError />,
	},
	{
		path: "/403",
		element: <ForbiddenError />,
	},
	// Catch-all route for 404
	{
		path: "*",
		element: <NotFound />,
	},
]);

export default router;
