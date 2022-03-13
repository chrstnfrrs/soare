import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SessionProvider } from 'next-auth/react';

import * as GraphqlClient from '../graphql/adapters/client';
import DefaultLayout from '../layouts/default';
import '../styles.css';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  const theme = createTheme({
    typography: {
      fontFamily: `Inter, 
        -apple-system, 
        BlinkMacSystemFont, 
        "Segoe UI", 
        Roboto, 
        "Helvetica Neue", 
        Arial, 
        sans-serif, 
        "Apple Color Emoji", 
        "Segoe UI Emoji", 
        "Segoe UI Symbol"`,
    },
    palette: {
      primary: {
        main: '#0E8A16',
      },
    },
  });

  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  const client = GraphqlClient.get();

  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </SessionProvider>
    </ApolloProvider>
  );
};

export default MyApp;
