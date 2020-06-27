import React, { FC, useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import { useParams, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';

import { NOTE, REMOVE_NOTE, NOTES } from '../../graphql';
import Container from '../../components/Container';
import NoteDetails from './components/NoteDetails';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Loading = styled.div``;
const Error = styled.div``;

const Note: FC<RouteComponentProps> = ({ history }) => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(NOTE, { variables: { id } });
    const [remove] = useMutation(REMOVE_NOTE, {
        refetchQueries: [{ query: NOTES }],
        awaitRefetchQueries: true,
    });

    const onRemove = useCallback(
        async (id: string) => {
            await remove({ variables: { id } });
            history.push('/');
        },
        [remove],
    );

    if (!loading && !data.note) {
        return <Redirect to="/404" />;
    }

    return (
        <Wrapper>
            <Container>
                {error && <Error>{error.message}</Error>}
                {loading && <Loading>Loading note...</Loading>}
                {!error && !loading && <NoteDetails onRemove={onRemove} {...data.note}></NoteDetails>}
            </Container>
        </Wrapper>
    );
};

export default withRouter(Note);
