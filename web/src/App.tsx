import React, { ReactElement } from 'react';
import Layout from './components/Layout';
import { ApolloProvider } from '@apollo/react-hooks';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';

import { theme } from './styles/theme';
import GlobalStyle from './styles/global';
import client from './client';
import Routes from './routes';

const history = createBrowserHistory();

const App: React.SFC = (): ReactElement => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Router history={history}>
                    <Layout>
                        <Routes />
                    </Layout>
                </Router>
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default App;
