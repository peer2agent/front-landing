import styled from "styled-components";

export const Container = styled.div`
    width: 60%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const AccordionQuestion = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-right: 10px;
    padding-bottom: 15px;

    border-bottom: 1px solid #fff;

    h3 {
        font-family: ${({ theme }) => theme.font.primary};
        font-size: ${({ theme }) => theme.font.sizes.medium};
        color: ${({ theme }) => theme.font.colors.primary};
        line-height: 1.2;
    }

    svg {
        cursor: pointer;
    }

    & + & {
        margin-top: 10px;
    }

    @media (max-width: 768px) {
        h3 {
            font-size: ${({ theme }) => theme.font.sizes.small};
        }
    }
`;

export const AccordionAnswer = styled.div`
    width: 100%;

    padding: 10px 0;

    h3 {
        font-family: ${({ theme }) => theme.font.secondary};
        font-size: ${({ theme }) => theme.font.sizes.medium};
        color: ${({ theme }) => theme.font.colors.primary};
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        h3 {
            font-size: ${({ theme }) => theme.font.sizes.small};
        }
    }
`;
