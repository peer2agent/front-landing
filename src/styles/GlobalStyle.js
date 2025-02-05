import { createGlobalStyle } from "styled-components";
import { reset } from "reset.js";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

${reset}
`;
