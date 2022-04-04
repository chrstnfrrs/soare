import * as React from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import Navless from '../../layouts/navless';
import { GoogleButton } from '../../components/auth/google-button';

const Login = () => {
  const router = useRouter();
  const { error } = router.query;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const loginUser = () => {
    signIn('credentials', {
      email,
      password,
    });
  };

  return (
    <Card elevation={4} sx={{ p: 1 }}>
      <CardHeader subheader='Login' title='Soare' />
      <CardContent sx={{ minWidth: 256, pb: 2 }}>
        <Stack sx={{ gap: 2 }}>
          <TextField
            focused
            label='Email'
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            value={email}
            variant='standard'
          />
          <TextField
            focused
            label='Password'
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            value={password}
            variant='standard'
          />
          {/*
              @TODO: implement forgot password flow
              <Link href='#'>Forgot Password?</Link>
            */}
        </Stack>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          boxSizing: 'border-box',
          gap: 2,
        }}
      >
        <Button onClick={loginUser} sx={{ width: '100%' }} variant='contained'>
          {'Login'}
        </Button>
        <hr style={{ width: '100%' }} />
        <GoogleButton onClick={() => signIn('google')}>
          {'Register with Google'}
        </GoogleButton>
        {Boolean(error) && <Typography color='error'>{error}</Typography>}
      </CardActions>
    </Card>
  );
};

Login.getLayout = (page) => <Navless>{page}</Navless>;

export default Login;
