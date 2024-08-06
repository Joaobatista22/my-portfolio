import type React from "react";
import { WiSolarEclipse } from "react-icons/wi";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeToggle } from "./Button.styles";

const ThemeToggleButton: React.FC = () => {
	const { toggleTheme } = useTheme();

	return (
		<ThemeToggle onClick={toggleTheme}>
			<WiSolarEclipse />
		</ThemeToggle>
	);
};

export default ThemeToggleButton;
