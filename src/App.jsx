import "react-toastify/dist/ReactToastify.css";

import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/themes";

import AppRoutes from "./routes/router";

const ThemedApp = () => {
    const { isDark } = useTheme();

    return (
        <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyle />

            <RouterProvider router={AppRoutes} />

            <ToastContainer
                position="top-right"
                autoClose={2000}
                theme="light"
            />
        </StyledThemeProvider>
    );
};

export default function App() {
    return (
        <ThemeProvider>
            <ThemedApp />
        </ThemeProvider>
    );
}
