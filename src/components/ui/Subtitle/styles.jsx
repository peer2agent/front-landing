import styled from "styled-components";

export const StyledSubtitle = styled.h2`
    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.font.colors.primary};
    font-size: ${({ theme }) => theme.font.sizes.large};
    font-weight: bold;
    margin-bottom: 1rem;

    text-align: ${({ align }) => align};

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.font.sizes.medium};
    }
`;
