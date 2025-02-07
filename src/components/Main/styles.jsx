import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 4rem 0;
    background-color: ${({ theme }) => theme.colors.primary};
    position: relative;

    h1 {
        font-family: ${({ theme }) => theme.font.primary};
        color: ${({ theme }) => theme.font.colors.primary};
        font-size: ${({ theme }) => theme.font.sizes.extraLarge};
        margin: 0;

        text-align: center;
    }

    p {
        width: 70%;
        margin: 1.5rem 0;
        font-family: ${({ theme }) => theme.font.secondary};
        color: ${({ theme }) => theme.font.colors.primary};
        font-size: ${({ theme }) => theme.font.sizes.small};
        line-height: 1.5rem;

        text-align: center;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: ${({ theme }) => theme.font.sizes.large};
        }

        p {
            width: 90%;
            font-size: ${({ theme }) => theme.font.sizes.extraSmall};
        }
    }
`;

export const GradientText = styled.h1`
    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.font.colors.primary};
    font-size: ${({ theme }) => theme.font.sizes.extraLarge};
    line-height: 1.8;

    margin: 0;

    background: ${({ theme }) => theme.gradients.greenBlueGreen};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-align: center;

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.font.sizes.large};
        line-height: 1.4;
    }
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
`;

export const Button = styled.div`
    width: 150px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.font.colors.primary};
    font-size: ${({ theme }) => theme.font.sizes.small};

    border-radius: 30px;
    border: 2px solid #fff;

    transition: transform 0.2s ease-out;

    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`;

export const BlurContainer = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    pointer-events: none;
    overflow: hidden;
`;

export const BlueBlur = styled.div`
    width: 250px;
    height: 250px;
    background: ${({ theme }) => theme.colors.blue};

    border-radius: 50%;
    opacity: 0.3;
    filter: blur(100px);

    position: absolute;
    top: 20%;
    left: 15%;

    animation: moveBlue 2s linear forwards;

    @keyframes moveBlue {
        0% {
            left: 15%;
        }
        50% {
            left: 60%;
        }
        100% {
            left: 15%;
        }
    }
`;

export const GreenBlur = styled.div`
    width: 250px;
    height: 250px;
    background: ${({ theme }) => theme.colors.green};

    border-radius: 50%;
    opacity: 0.3;
    filter: blur(100px);

    position: absolute;
    top: 20%;
    right: 15%;

    animation: moveGreen 2s linear forwards;

    @keyframes moveGreen {
        0% {
            right: 15%;
        }
        50% {
            right: 60%;
        }
        100% {
            right: 15%;
        }
    }
`;
