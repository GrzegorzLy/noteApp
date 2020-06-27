import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

const BaseButton = css`
    padding: 0.5rem 0.75rem;
    border: none;
    min-width: 6rem;
    font-size: ${({ theme }) => theme.fontsSize.md};
    border-radius: 4px;
    outline: 0;
    transition: background-color 0.25s ease-out;
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
    }
`;

export const ButtonDanger = styled.button`
    ${BaseButton};
    background-color: ${({ theme }) => theme.colors.red};
    color: white;
    &:disabled {
        background-color: ${({ theme }) => lighten(0.2, theme.colors.red)};
    }

    @media (hover: hover) {
        &:active,
        &:hover {
            background-color: ${({ theme }) => darken(0.2, theme.colors.red)};
        }
    }
`;

export const ButtonMain = styled.button`
    ${BaseButton};
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.mainDark};
    &:disabled {
        color: ${({ theme }) => lighten(0.4, theme.colors.mainDark)};
    }

    @media (hover: hover) {
        &:active,
        &:hover {
            background-color: ${darken(0.05, 'white')}};
        }
    }
`;
