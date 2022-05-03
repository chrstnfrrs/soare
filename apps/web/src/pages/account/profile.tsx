import * as React from 'react';
import { getToken } from 'next-auth/jwt';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
// import { GetServerSideProps } from 'next';

import * as UserQueries from '../../graphql/queries/user-queries';
import { query } from '../../graphql/adapters/client';
import { useSession } from 'next-auth/react';
import H1 from '../../components/ui/h1';
import H5 from '../../components/ui/h5';
import P from '../../components/ui/p';

const Profile = ({ user }) => (
  <>
    <H1>Welcome {user.firstName}!</H1>
    <H5 as='strong'>Email</H5>
    <P>{user.email}</P>
  </>
);

const getServerSideProps = async (context) => {
  const token = await getToken({
    ...context,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token?.user) {
    // eslint-disable-next-line no-param-reassign
    context.res.statusCode = 302;
    context.res.setHeader('Location', `/`);

    return { props: {} };
  }

  const { data, error } = await query({
    query: UserQueries.User,
    variables: {
      // @ts-ignore
      id: token.user.id,
    },
  });

  console.log('data', data);
  console.log('error', error);

  return {
    props: {
      user: data.user || {},
    },
  };
};

Profile.auth = true;

export default Profile;
export { getServerSideProps };
