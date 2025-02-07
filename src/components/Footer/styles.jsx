import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;

    display: flex;
    justify-content: space-between;

    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.font.colors.primary};

    line-height: 1.5;

    border-bottom: 1px solid #fff;

    padding-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Menu = styled.div`
    width: 40%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    text-align: center;

    h4 {
        font-size: ${({ theme }) => theme.font.sizes.small};
        font-weight: 600;
        margin-bottom: 1rem;
    }

    h5 {
        font-size: ${({ theme }) => theme.font.sizes.extraSmall};
        margin-bottom: 0.6rem;

        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 1.8rem;

        div {
            width: 100%;
        }
    }
`;

export const ImageAndAbout = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;

    img {
        width: 40%;
        margin-bottom: 1rem;

        object-fit: contain;
    }

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;

        img {
            width: 30%;
        }

        padding-bottom: 1.8rem;
        border-bottom: 1px solid #fff;
    }
`;
