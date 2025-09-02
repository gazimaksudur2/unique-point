import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Gallery from "../pages/Gallery";
import FAQ from "../pages/FAQ";
import Contacts from "../pages/Contacts";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";

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
]);

export default router;
