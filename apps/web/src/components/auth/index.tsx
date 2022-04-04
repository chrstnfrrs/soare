import { useSession } from 'next-auth/react';

const Auth = ({ children }) => {
  const { data: session } = useSession({ required: true });
  const isUser = session?.user;

  if (isUser) {
    return children;
  }

  return undefined;
};

export default Auth;
