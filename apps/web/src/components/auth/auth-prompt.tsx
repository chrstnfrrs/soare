import { useSession, signOut } from 'next-auth/react';
import { Button } from '@mui/material';

const AuthPrompt = () => {
  const { data: session } = useSession();

  if (session) {
    return <Button onClick={() => signOut()}>{'Sign out'}</Button>;
  }

  return (
    <>
      <Button href='/auth/login'>{'Login'}</Button>
      <Button href='/auth/register'>{'Register'}</Button>
    </>
  );
};

export default AuthPrompt;
