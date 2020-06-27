import React, { FC, useCallback } from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
import NotesItem from './components/NotesItem';
import { NoteType } from '../../types/types';
import styled from 'styled-components';

const NOTES = gql`
    {
        notes {
            id
            text
            date
        }
    }
`;

const REMOVE_NOTE = gql`
    mutation removeNote($id: String!) {
        removeNote(id: $id)
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    max-width: 1000px;
    width: 100%;
`;

const Title = styled.h1`
    text-align: center;
    color: ${({ theme }) => theme.colors.mainDark};
    font-size: ${({ theme }) => theme.fontsSize['2xl']};
    font-weight: 600;
`;

const Loading = styled.div``;
const Error = styled.div``;

const Notes: FC = () => {
    const { loading, error, data } = useQuery(NOTES);
    const [remove] = useMutation(REMOVE_NOTE, {
        refetchQueries: [{ query: NOTES }],
        awaitRefetchQueries: true,
    });

    const onRemove = useCallback(
        (id: string) => () => {
            remove({ variables: { id } });
        },
        [remove],
    );

    const notes = (data && data.notes) || [];
    return (
        <Wrapper>
            <Container>
                <Title>Latest Notes</Title>
                {error && <Error>{error.message}</Error>}
                {loading && <Loading>Loading notes...</Loading>}
                {!loading &&
                    notes.map((note: NoteType) => <NotesItem key={note.id} onRemove={onRemove} {...note}></NotesItem>)}
            </Container>
        </Wrapper>
    );
};

export default Notes;
