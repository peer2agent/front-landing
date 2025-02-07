import styled from "styled-components";

export const StyledText = styled.p`
    font-family: ${({ theme }) => theme.font.secondary};
    color: ${({ theme }) => theme.font.colors.primary};
    font-size: ${({ theme, textSizing }) => theme.font.sizes[textSizing]};
    font-weight: thin;

    line-height: 1.6rem;
    text-align: ${({ align }) => align};

    @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.font.sizes.extraSmall};
    }
`;
