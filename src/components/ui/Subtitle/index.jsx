import { StyledSubtitle } from "./styles";

export default function SubTitle({ children, align = "left" }) {
    return <StyledSubtitle align={align}>{children}</StyledSubtitle>;
}
