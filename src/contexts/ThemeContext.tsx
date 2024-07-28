import type React from "react";
import { createContext, useContext, useState } from "react";
import {
	type DefaultTheme,
	ThemeProvider as StyledThemeProvider,
} from "styled-components";
import GlobalStyle from "../styles/global";
import { darkTheme, lightTheme } from "../styles/theme";

type ThemeContextType = {
	theme: DefaultTheme;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

	const theme = currentTheme === "light" ? lightTheme : darkTheme;

	const toggleTheme = () => {
		setCurrentTheme(currentTheme === "light" ? "dark" : "light");
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<StyledThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
			</StyledThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
