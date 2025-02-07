import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    margin: 50px 0;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 100px;
    }

    img {
        width: 100px;
        height: 50px;

        object-fit: scale-down;
    }

    img:first-child,
    img:last-child {
        background-color: white;

        filter: invert(100%) grayscale(100%) brightness(100%);
    }

    @media (max-width: 768px) {
        > div {
            gap: 50px;
        }

        img {
            width: 80px;
            height: 40px;
        }
    }
`;
