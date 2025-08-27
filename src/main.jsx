import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AppProvider } from "./context/AppContext";
import router from "./routers/Router";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HelmetProvider>
			<AppProvider>
				<RouterProvider router={router} />
			</AppProvider>
		</HelmetProvider>
	</StrictMode>
);
