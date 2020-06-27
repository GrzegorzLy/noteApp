import { gql } from 'apollo-boost';

export const NOTES = gql`
    {
        notes {
            id
            text
            date
        }
    }
`;

export const NOTE = gql`
    query note($id: String!) {
        note(id: $id) {
            id
            text
            date
        }
    }
`;

export const REMOVE_NOTE = gql`
    mutation removeNote($id: String!) {
        removeNote(id: $id)
    }
`;

export const ADD_NOTE = gql`
    mutation addNote($text: String!) {
        addNote(text: $text) {
            id
        }
    }
`;
