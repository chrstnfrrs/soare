import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@emotion/react';
import { SessionProvider } from 'next-auth/react';

import { client } from '../graphql/adapters/client';
import DefaultLayout from '../layouts/default';
import Auth from '../components/auth';
import '../styles.css';
import Head from '../components/ui/head';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  const theme = {
    colors: {
      palette: {
        primary: {
          main: '#186245',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#ffffff',
          contrastText: '#101010',
          border: '1px #101010 solid',
        },
      },
      text: {
        primary: '#101010',
        error: '#B81430',
      },
      background: {
        primary: '#FFFFFF',
        secondary: '#EFEFEF',
      },
    },
  };

  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <Head {...Component.seo} />
          {getLayout(
            Component.auth ? (
              <Auth>
                <Component {...pageProps} />
              </Auth>
            ) : (
              <Component {...pageProps} />
            ),
          )}
        </ThemeProvider>
      </SessionProvider>
    </ApolloProvider>
  );
};

export default MyApp;
