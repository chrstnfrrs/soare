import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import client from '../../../graphql/adapters/client';
import { LoginMutation } from '../../../graphql/mutations/auth-mutations';

// eslint-disable-next-line new-cap
export default NextAuth({
  callbacks: {
    redirect: ({ baseUrl }) => baseUrl,
  },
  pages: {
    signIn: '/auth/login',
  },
  // Configure one or more authentication providers
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
        await client.mutate({
          mutation: LoginMutation,
          variables: {
            email,
            password,
          },
        });

        // Add logic here to look up the user from the credentials supplied
        // @TODO: Post request to login user

        // Any object returned will be saved in `user` property of the JWT
        // If you return null then an error will be displayed advising the user to check their details.

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter

        return {
          email,
        };
      },
    }),
  ],
});
