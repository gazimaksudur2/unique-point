import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AppProvider } from "./context/AppContext";
import ErrorBoundary from "./components/common/ErrorBoundary";
import router from "./routers/Router";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HelmetProvider>
			<AppProvider>
				<ErrorBoundary>
					<RouterProvider router={router} />
				</ErrorBoundary>
			</AppProvider>
		</HelmetProvider>
	</StrictMode>
);
