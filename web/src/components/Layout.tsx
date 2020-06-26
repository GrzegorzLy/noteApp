import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div``;
const Wrapper = styled.div``;

type Props = {
    children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
    return (
        <Container>
            <Header />
            <Wrapper>{children}</Wrapper>
        </Container>
    );
};

export default Layout;
