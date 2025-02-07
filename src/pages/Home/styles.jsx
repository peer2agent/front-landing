import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 100px 20%;
    padding-bottom: 50px;

    background: ${({ theme }) => theme.colors.primary};

    @media screen and (max-width: 768px) {
        padding: 50px 10%;
    }
`;
