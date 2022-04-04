import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { query } from '../../../graphql/adapters/client';
import * as UserQueries from '../../../graphql/queries/user-queries';
import * as UserMutations from '../../../graphql/mutations/auth-mutations';

// eslint-disable-next-line new-cap
export default NextAuth({
  callbacks: {
    redirect: ({ baseUrl }) => baseUrl,
    signIn: async ({ user, account }) => {
      if (account.provider === 'google') {
        const { data: registerData } = await query({
          query: UserMutations.SignInWithGoogle,
          variables: {
            input: {
              email: user.email,
              firstName: user.name.split(' ')[0],
              lastName: user.name.split(' ')[user.name.split(' ').length - 1],
            },
          },
        });

        return (
          Boolean(registerData?.signInWithGoogle) ||
          'http://localhost:3000/auth/register?error=Unable to Login'
        );
      }

      const { data } = await query({
        query: UserQueries.UserByEmail,
        variables: {
          email: user.email,
        },
      });

      return (
        Boolean(data?.userByEmail) ||
        'http://localhost:3000/auth/register?error=Unable to Login'
      );
    },
    session: ({ session }) => session,
    jwt: ({ token, user }) => {
      if (user) {
        // eslint-disable-next-line no-param-reassign
        token.user = user;
      }

      return token;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  providers: [
    // eslint-disable-next-line new-cap
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'example@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async ({ email, password }) => {
        try {
          const { data } = await query({
            query: UserQueries.UserByCredentials,
            variables: {
              input: {
                email,
                password,
              },
            },
          });

          if (!data?.userByCredentials) {
            throw new Error('Failed to create user.');
          }

          const { userByCredentials } = data;

          const jwtData = {
            id: userByCredentials.id,
            email: userByCredentials.email,
          };

          // Any object returned will be saved in `user` property of the JWT
          return jwtData;
        } catch (error) {
          // If you return null then an error will be displayed advising the user to check their details.
          return error;
        }
      },
    }),
    // eslint-disable-next-line new-cap
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
