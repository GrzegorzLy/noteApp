import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.mainDark};
`;

const Wrapper = styled.div`
    padding: 0.75rem;
    background-color: ${({ theme }) => theme.colors.main};
    font-size: ${({ theme }) => theme.fontsSize.lg};
    color: ${({ theme }) => theme.colors.mainDark};
`;

const Header: FC = () => {
    return (
        <Wrapper>
            <Title to="/">Notes App</Title>
        </Wrapper>
    );
};

export default Header;
