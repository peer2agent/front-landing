import styled from "styled-components";

export const StyledTitle = styled.h1`
    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.font.colors.primary};
    font-size: ${({ theme }) => theme.font.sizes.large};
    font-weight: bold;

    margin-bottom: 2rem;
`;
