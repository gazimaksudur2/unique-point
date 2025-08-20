import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import Home from "../pages/Home";
import Boys from "../pages/Boys";

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
		path: "/boys",
		element: (
			<Layout>
				<Boys />
			</Layout>
		),
	},
	{
		path: "/girls",
		element: (
			<Layout>
				<div>Girls Collection</div>
			</Layout>
		),
	},
	{
		path: "/collections",
		element: (
			<Layout>
				<div>Collections</div>
			</Layout>
		),
	},
	{
		path: "/sale",
		element: (
			<Layout>
				<div>Sale Items</div>
			</Layout>
		),
	},
	{
		path: "/cart",
		element: (
			<Layout>
				<div>Shopping Cart</div>
			</Layout>
		),
	},
	{
		path: "/wishlist",
		element: (
			<Layout>
				<div>Wishlist</div>
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
]);

export default router;
