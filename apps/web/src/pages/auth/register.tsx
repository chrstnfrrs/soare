import * as React from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { signIn } from 'next-auth/react';

import Navless from '../../layouts/navless';
import { GoogleButton } from '../../components/auth/google-button';
import { RegisterUser } from '../../graphql/mutations/auth-mutations';

const Register = () => {
  const router = useRouter();
  const { error } = router.query;

  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [createUser, { loading }] = useMutation(RegisterUser);

  const registerUser = () => {
    createUser({
      onCompleted: () => {
        signIn('credentials', { email, password });
      },
      variables: {
        input: {
          email,
          firstName,
          lastName,
          password,
        },
      },
    });
  };

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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            focused
            variant='standard'
            type='text'
            label='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            focused
            variant='standard'
            type='text'
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            focused
            variant='standard'
            label='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            focused
            variant='standard'
            label='Confirm Password'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
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
        <Button
          data-testid='credential-register-button'
          variant='contained'
          disabled={loading}
          onClick={registerUser}
          sx={{ width: '100%' }}
        >
          {loading ? (
            <CircularProgress data-testid='loading' size={16} />
          ) : (
            'Register'
          )}
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

Register.getLayout = (page) => <Navless>{page}</Navless>;

export default Register;
