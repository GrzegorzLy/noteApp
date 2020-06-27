import config from '../config';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: `${config.serverUrl}/graphql`,
});

export default client;
