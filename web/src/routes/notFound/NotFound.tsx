import React, { FC } from 'react';
import Container from '../../components/Container';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
`;

const NotFound: FC = () => {
    return (
        <Wrapper>
            <Container>
                <h1>404 Not Found</h1>
            </Container>
        </Wrapper>
    );
};

export default NotFound;
