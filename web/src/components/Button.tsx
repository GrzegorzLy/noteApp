import styled from 'styled-components';

const Button = styled.button`
    padding: 0.75rem;
    border: none;
    min-width: 7rem;
    background-color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.fontsSize.lg};
    color: white;
`;

export default Button;
