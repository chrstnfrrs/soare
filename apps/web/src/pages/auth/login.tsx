import * as React from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import styled from '@emotion/styled';

import Navless from '../../layouts/navless';
import AuthCard from '../../components/auth/auth-card';
import AuthForm from '../../components/auth/auth-form';
import H3 from '../../components/ui/h3';
import AuthFormInputs from '../../components/auth/styled';
import TextField from '../../components/ui/text-field';
import Button from '../../components/ui/button';
import Divider from '../../components/ui/divider';
import SmallText from '../../components/ui/small';
import Row from '../../components/ui/row';
import Col from '../../components/ui/col';

const loginGoogle = () => {
  signIn('google');
};

const Login = () => {
  const router = useRouter();
  const { error } = router.query;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);

  const loginCredentials = () => {
    signIn('credentials', {
      email,
      password,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      loginCredentials();
    }
  };

  return (
    <AuthCard>
      <Col align='center' gap='0.5'>
        <H3 as='h1'>Welcome Back</H3>
        {Boolean(error) && <SmallText color='error'>{error}</SmallText>}
      </Col>
      <AuthForm>
        <AuthFormInputs>
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
        </AuthFormInputs>
        <Button onClick={loginCredentials}>Sign In</Button>
        <Row align='center' gap='1'>
          <Divider />
          <SmallText>or sign in with</SmallText>
          <Divider />
        </Row>
        <Button color='secondary' onClick={loginGoogle}>
          Google
        </Button>
      </AuthForm>
    </AuthCard>
  );
};

Login.getLayout = (page) => <Navless>{page}</Navless>;
Login.seo = {
  title: 'Login',
  description: 'User login for Soare',
};

export default Login;
