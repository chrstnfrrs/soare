import { useSession, signOut } from 'next-auth/react';
import Button from '../ui/button';

const AuthPrompt = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <Button color='secondary' onClick={() => signOut()}>
        {'Sign out'}
      </Button>
    );
  }

  return (
    <>
      <Button color='secondary' href='/auth/login'>
        {'Login'}
      </Button>
      <Button color='secondary' href='/auth/register'>
        {'Register'}
      </Button>
    </>
  );
};

export default AuthPrompt;
