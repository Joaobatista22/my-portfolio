import type React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeToggle } from "./Button.styles";

const ThemeToggleButton: React.FC = () => {
	const { toggleTheme } = useTheme();

	return <ThemeToggle onClick={toggleTheme}>🌓</ThemeToggle>;
};

export default ThemeToggleButton;
