import type React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
};

export default AppRoutes;
