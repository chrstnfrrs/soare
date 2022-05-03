import * as React from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { signIn } from 'next-auth/react';

import Navless from '../../layouts/navless';
import { GoogleButton } from '../../components/auth/google-button';
import { RegisterUser } from '../../graphql/mutations/auth-mutations';
import AuthCard from '../../components/auth/auth-card';
import AuthForm from '../../components/auth/auth-form';
import H3 from '../../components/ui/h3';
import AuthFormInputs from '../../components/auth/styled';
import TextField from '../../components/ui/text-field';
import Button from '../../components/ui/button';
import Row from '../../components/ui/row';
import Divider from '../../components/ui/divider';
import SmallText from '../../components/ui/small';
import Col from '../../components/ui/col';

const signinGoogle = () => {
  signIn('google');
};

const Register = () => {
  const router = useRouter();
  const { error } = router.query;

  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [createUser] = useMutation(RegisterUser);

  const changeEmail = (e) => setEmail(e.target.value);
  const changeFirstName = (e) => setFirstName(e.target.value);
  const changeLastName = (e) => setLastName(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);
  const changeConfirmPassword = (e) => setConfirmPassword(e.target.value);

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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      registerUser();
    }
  };

  return (
    <AuthCard>
      <Col align='center' gap='0.5'>
        <H3 as='h1'>Get Started</H3>
        {Boolean(error) && <SmallText color='error'>{error}</SmallText>}
      </Col>
      <AuthForm>
        <AuthFormInputs>
          <Row gap='1'>
            <TextField
              label='First Name'
              name='first name'
              onChange={changeFirstName}
              onKeyDown={handleKeyDown}
              value={email}
            />
            <TextField
              label='Last Name'
              name='last name'
              onChange={changeLastName}
              onKeyDown={handleKeyDown}
              value={email}
            />
          </Row>
          <TextField
            label='Email'
            name='email'
            onChange={changeEmail}
            onKeyDown={handleKeyDown}
            value={email}
          />
          <TextField
            label='Password'
            name='password'
            onChange={changePassword}
            onKeyDown={handleKeyDown}
            type='password'
            value={password}
          />
          <TextField
            label='Confirm Password'
            name='password'
            onChange={changeConfirmPassword}
            onKeyDown={handleKeyDown}
            type='password'
            value={confirmPassword}
          />
        </AuthFormInputs>
        <Button onClick={registerUser}>Register</Button>
        <Row align='center' gap='1'>
          <Divider />
          <SmallText>or sign up with</SmallText>
          <Divider />
        </Row>
        <Button color='secondary' onClick={signinGoogle}>
          Google
        </Button>
      </AuthForm>
    </AuthCard>
  );
};

Register.getLayout = (page) => <Navless>{page}</Navless>;
Register.seo = {
  title: 'Register',
  description: 'User registration for Soare',
};

export default Register;
