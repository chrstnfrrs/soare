import * as React from 'react';
import { signIn } from 'next-auth/react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  TextField,
} from '@mui/material';
// import Link from 'next/link';

import Navless from '../../layouts/navless';
import useForm from '../../hooks/use-form';

const loginConfig = {
  email: {
    name: 'email',
    type: 'string',
  },
  password: {
    name: 'password',
    type: 'string',
  },
};

const Login = () => {
  const { input, setInput } = useForm(loginConfig);

  const loginUser = () => {
    signIn('credentials', {
      email: input.email,
      password: input.password,
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
            onChange={(e) => setInput('email', e.target.value)}
            type='text'
            value={input.email}
            variant='standard'
          />
          <TextField
            focused
            label='Password'
            onChange={(e) => setInput('password', e.target.value)}
            type='password'
            value={input.password}
            variant='standard'
          />
          {/*
              @TODO: implement forgot password flow
              <Link href='#'>Forgot Password?</Link>
            */}
        </Stack>
      </CardContent>
      <CardActions>
        <Button onClick={loginUser} sx={{ flex: 1 }} variant='contained'>
          {'Login'}
        </Button>
      </CardActions>
    </Card>
  );
};

Login.getLayout = (page) => <Navless>{page}</Navless>;

export default Login;
