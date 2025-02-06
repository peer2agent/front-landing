import { StyledText } from "./styles";

export default function Text({ children, align = "left" }) {
    return <StyledText align={align}>{children}</StyledText>;
}
