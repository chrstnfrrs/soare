import * as React from 'react';
import Link from 'next/link';
// import { GetServerSideProps } from 'next';

import * as UserQueries from '../graphql/queries/user-queries';
import { query } from '../graphql/adapters/client';

const Web = ({ users }) => (
  <div>
    <p>Hello World!</p>
    <Link href={'/account/profile'}>Profile</Link>
    <p>data: {JSON.stringify(users)}</p>
  </div>
);

const getServerSideProps = async () => {
  const { data } = await query({
    query: UserQueries.AllUsers,
  });

  return {
    props: {
      users: data,
    },
  };
};

export default Web;
export { getServerSideProps };
