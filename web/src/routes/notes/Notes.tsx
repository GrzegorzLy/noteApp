import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const NOTES = gql`
    {
        notes {
            id
            text
            date
        }
    }
`;

const Notes = () => {
    const { loading, error, data } = useQuery(NOTES);

    return <div>{JSON.stringify(data)}</div>;
};

export default Notes;
