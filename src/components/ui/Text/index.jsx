import { StyledText } from "./styles";

export default function Text({
    children,
    align = "left",
    textSizing = "small",
}) {
    return (
        <StyledText align={align} textSizing={textSizing}>
            {children}
        </StyledText>
    );
}
