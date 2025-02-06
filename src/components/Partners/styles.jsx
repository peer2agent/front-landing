import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;

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
`;
