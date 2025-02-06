import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    align-items: center;
    justify-content: space-between;
    gap: 20%;

    background: ${({ theme }) => theme.colors.primary};

    > img {
        width: 30%;

        object-fit: contain;
    }
`;
