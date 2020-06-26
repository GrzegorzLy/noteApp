import React, { ReactElement } from 'react';
import Layout from './components/Layout';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const NOTES = gql`
    {
        notes {
            id
            text
            date
        }
    }
`;

const App: React.SFC = (): ReactElement => {
    const { loading, error, data } = useQuery(NOTES);
    console.log(data);

    return <Layout>test</Layout>;
};

export default App;
