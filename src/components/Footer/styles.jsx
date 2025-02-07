import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;

    display: flex;
    justify-content: space-between;

    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.font.colors.primary};

    line-height: 1.5;

    border-bottom: 1px solid #fff;

    > div {
        width: 20%;
        height: 100%;

        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        margin-bottom: 1rem;
    }

    > div:first-child {
        width: 50%;
    }

    img {
        width: 30%;
        margin-bottom: 1rem;

        object-fit: contain;
    }

    h4 {
        font-size: ${({ theme }) => theme.font.sizes.small};
        font-weight: 600;
        margin-bottom: 1rem;
    }

    h5 {
        font-size: ${({ theme }) => theme.font.sizes.extraSmall};
        margin-bottom: 0.5rem;

        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`;
