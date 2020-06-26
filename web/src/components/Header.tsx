import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0.75rem;
    background-color: ${({ theme }) => theme.colors.main};
    font-size: ${({ theme }) => theme.fontsSize.lg};
    color: ${({ theme }) => theme.colors.mainDark};
`;

const Header: FC = () => {
    return <Wrapper>Notes App</Wrapper>;
};

export default Header;
