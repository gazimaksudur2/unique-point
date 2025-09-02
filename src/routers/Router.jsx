import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Gallery from "../pages/Gallery";
import FAQ from "../pages/FAQ";
import Contacts from "../pages/Contacts";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import TestLocalStorage from "../pages/TestLocalStorage";
import DaisyUIExample from "../components/examples/DaisyUIExample";
import DaisyUITest from "../components/examples/DaisyUITest";

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
	{
		path: "/auth",
		element: (
			<Layout>
				<div>Authentication</div>
			</Layout>
		),
	},
	{
		path: "/profile",
		element: (
			<Layout>
				<div>User Profile</div>
			</Layout>
		),
	},
	{
		path: "/daisyui-example",
		element: (
			<Layout>
				<DaisyUIExample />
			</Layout>
		),
	},
	{
		path: "/daisyui-test",
		element: (
			<Layout>
				<DaisyUITest />
			</Layout>
		),
	},
	{
		path: "/test-localstorage",
		element: (
			<Layout>
				<TestLocalStorage />
			</Layout>
		),
	},
]);

export default router;
