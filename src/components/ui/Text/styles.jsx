import styled from "styled-components";

export const StyledText = styled.p`
    font-family: ${({ theme }) => theme.font.secondary};
    color: ${({ theme }) => theme.font.colors.primary};
    font-size: ${({ theme }) => theme.font.sizes.small};
    font-weight: thin;

    line-height: 1.6rem;
    text-align: ${({ align }) => align};
`;
