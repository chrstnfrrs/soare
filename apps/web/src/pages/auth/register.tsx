import * as React from 'react';
import { useMutation } from '@apollo/client';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  TextField,
} from '@mui/material';
import { signIn } from 'next-auth/react';

import Navless from '../../../layouts/navless';
import useForm from '../../../hooks/use-form';
import { RegisterMutation } from '../../../graphql/mutations/auth-mutations';

const registerConfig = {
  email: {
    name: 'email',
    type: 'string',
  },
  password: {
    name: 'password',
    type: 'string',
  },
  confirmPassword: {
    name: 'confirmPassword',
    type: 'string',
  },
  firstName: {
    name: 'firstName',
    type: 'string',
  },
  lastName: {
    name: 'lastName',
    type: 'string',
  },
};

const Register = () => {
  const { input, setInput } = useForm(registerConfig);
  const [createUser, { loading, data }] = useMutation(RegisterMutation);

  const registerUser = () => {
    createUser({
      variables: {
        input: {
          email: input.email,
          password: input.password,
          firstName: input.firstName,
          lastName: input.lastName,
        },
      },
    });
  };

  React.useEffect(() => {
    if (data) {
      signIn('credentials', { email: input.email, password: input.password });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Card elevation={4} sx={{ p: 1 }}>
      <CardHeader title='Soare' subheader='Register' />
      <CardContent sx={{ minWidth: 256, pb: 2 }}>
        <Stack sx={{ gap: 2 }}>
          <TextField
            focused
            variant='standard'
            type='text'
            label='First Name'
            value={input.firstName}
            onChange={(e) => setInput('firstName', e.target.value)}
          />
          <TextField
            focused
            variant='standard'
            type='text'
            label='Last Name'
            value={input.lastName}
            onChange={(e) => setInput('lastName', e.target.value)}
          />
          <TextField
            focused
            variant='standard'
            type='text'
            label='Email'
            value={input.email}
            onChange={(e) => setInput('email', e.target.value)}
          />
          <TextField
            focused
            variant='standard'
            label='Password'
            type='password'
            value={input.password}
            onChange={(e) => setInput('password', e.target.value)}
          />
          <TextField
            focused
            variant='standard'
            label='Confirm Password'
            type='password'
            value={input.confirmPassword}
            onChange={(e) => setInput('confirmPassword', e.target.value)}
          />
        </Stack>
      </CardContent>
      <CardActions>
        <Button variant='contained' onClick={registerUser} sx={{ flex: 1 }}>
          {loading ? 'Loading...' : 'Register'}
        </Button>
      </CardActions>
    </Card>
  );
};

Register.getLayout = (page) => <Navless>{page}</Navless>;

export default Register;
