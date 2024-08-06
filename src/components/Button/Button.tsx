import type React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeToggle } from "./Button.styles";

const ThemeToggleButton: React.FC = () => {
	const { toggleTheme, isDarkTheme } = useTheme();

	return (
		<ThemeToggle onClick={toggleTheme}>{isDarkTheme ? "🌙" : "☀️"}</ThemeToggle>
	);
};

export default ThemeToggleButton;
