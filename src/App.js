// src/App.js
import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import {
    ThemeProvider as CustomThemeProvider,
    useTheme,
} from "./context/ThemeContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/themes";

const AppContent = () => {
    const { isDark, toggleTheme } = useTheme();
    const currentTheme = isDark ? darkTheme : lightTheme;

    return (
        <StyledThemeProvider theme={currentTheme}>
            <GlobalStyle />
        </StyledThemeProvider>
    );
};

function App() {
    return (
        <CustomThemeProvider>
            <AppContent />
        </CustomThemeProvider>
    );
}

export default App;
