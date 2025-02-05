import { createGlobalStyle } from "styled-components";
import resetStyles from "./reset";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

${resetStyles}
`;
