import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    > img {
        width: 30%;

        object-fit: contain;
    }

    @media (max-width: 768px) {
        > img {
            display: none;
        }
    }
`;
