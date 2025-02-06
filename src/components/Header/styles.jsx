import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;

    padding: 0 5%;

    background-color: ${({ theme }) =>
        theme.colors
            .primary}CC; /* Adds transparency using hex (CC = 80% opacity) */
    backdrop-filter: blur(10px); /* Blurs the background behind the header */
    -webkit-backdrop-filter: blur(10px); /* Safari compatibility */

    img {
        width: 150px;
        object-fit: contain;
    }

    z-index: 1;
`;

export const CommandsContainer = styled.div`
    width: 40%;
    height: 90%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: ${({ theme }) => theme.font.secondary};
    color: ${({ theme }) => theme.font.colors.primary};
    size: ${({ theme }) => theme.font.sizes.small};

    div {
        width: 22%;
        height: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 10px;

        transition: all 0.1s ease-out;
    }

    div:hover {
        cursor: pointer;

        background-color: rgba(255, 255, 255, 0.2);
    }
`;

export const SocialContainer = styled.div`
    width: 12%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        cursor: pointer;

        transition: all 0.1s ease-out;
    }

    svg:hover {
        transform: scale(1.1);
    }
`;
