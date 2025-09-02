import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Gallery from "../pages/Gallery";
import FAQ from "../pages/FAQ";
import Contacts from "../pages/Contacts";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";

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
]);

export default router;
