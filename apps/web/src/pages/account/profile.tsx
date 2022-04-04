import * as React from 'react';
import { Box } from '@mui/material';
import { getToken } from 'next-auth/jwt';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
// import { GetServerSideProps } from 'next';

import * as UserQueries from '../../graphql/queries/user-queries';
import { query } from '../../graphql/adapters/client';

const Profile = ({ user }) => {
  const { data } = useQuery(gql`
    ${UserQueries.AllUsers}
  `);

  return (
    <Box>
      <Link href={'/'}>Go to Home</Link>
      <p>Email: {JSON.stringify(user)}</p>
      <p>data: {JSON.stringify(data)}</p>
    </Box>
  );
};

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

  const { data } = await query({
    query: UserQueries.UserById,
    variables: {
      // @ts-ignore
      id: token.user.id,
    },
  });

  return {
    props: {
      user: data || {},
    },
  };
};

Profile.auth = true;

export default Profile;
export { getServerSideProps };
