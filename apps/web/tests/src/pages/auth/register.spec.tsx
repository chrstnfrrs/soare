import * as React from 'react';
import { vi } from 'vitest';
import { useMutation } from '@apollo/client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Chance from 'chance';

import { fireEvent, render, screen, waitFor } from '../../../utils/test-utils';
import Register from '../../../../src/pages/auth/register';

vi.mock('@apollo/client', () => ({
  useMutation: vi.fn(),
}));
vi.mock('next-auth/react', () => ({
  signIn: vi.fn(),
}));
vi.mock('next/router', () => ({
  useRouter: vi.fn().mockReturnValue({
    query: {
      error: 'asdf'
    }
  })
}))
vi.mock('../../../../src/graphql/mutations/auth-mutations');

const chance = new Chance();

describe('Given <Register />', () => {
  let mutationCallback;

  describe('When page loads', () => {
    beforeEach(() => {
      mutationCallback = vi
        .fn()
        .mockImplementation(({ onCompleted }) => onCompleted());
      (useMutation as any).mockImplementation(() => [mutationCallback, {}]);

      render(Register.getLayout(<Register />));
    });

    test('Then should use navless layout', () => {
      expect(screen.getByTestId('navless-layout')).toBeVisible();
    });

    test('Then should display register form', () => {
      expect(screen.getByLabelText('First Name')).toBeVisible();
      expect(screen.getByLabelText('Last Name')).toBeVisible();
      expect(screen.getByLabelText('Email')).toBeVisible();
      expect(screen.getByLabelText('Password')).toBeVisible();
      expect(screen.getByLabelText('Confirm Password')).toBeVisible();
      expect(screen.getByText('Soare')).toBeVisible(1);
      expect(screen.getAllByText('Register')).toHaveLength(2);
    });

    describe('When form is submitted', () => {
      let firstName, lastName, email, password, confirmPassword;

      beforeEach(() => {
        const firstNameInput = screen.getByLabelText('First Name');
        firstName = chance.string();
        fireEvent.change(firstNameInput, { target: { value: firstName } });
        const lastNameInput = screen.getByLabelText('Last Name');
        lastName = chance.string();
        fireEvent.change(lastNameInput, { target: { value: lastName } });
        const emailInput = screen.getByLabelText('Email');
        email = chance.string();
        fireEvent.change(emailInput, { target: { value: email } });
        const passwordInput = screen.getByLabelText('Password');
        password = chance.string();
        fireEvent.change(passwordInput, { target: { value: password } });
        const confirmPasswordInput = screen.getByLabelText('Confirm Password');
        confirmPassword = chance.string();
        fireEvent.change(confirmPasswordInput, {
          target: { value: confirmPassword },
        });

        const [_, button] = screen.getAllByText('Register');
        fireEvent.click(button);
      });

      test('Then should call mutation', () => {
        expect(mutationCallback).toHaveBeenCalledTimes(1);
        expect(mutationCallback).toHaveBeenCalledWith({
          onCompleted: expect.any(Function),
          variables: {
            input: {
              email,
              firstName,
              lastName,
              password,
            },
          },
        });

        expect(signIn).toHaveBeenCalledTimes(1);
        expect(signIn).toHaveBeenCalledWith('credentials', {
          email,
          password,
        });
      });
    });
  });

  describe('When mutation is loading', () => {
    beforeEach(() => {
      mutationCallback = vi.fn();
      (useMutation as any).mockImplementation(() => [
        mutationCallback,
        { loading: true },
      ]);

      render(Register.getLayout(<Register />));
    });

    test('Then should display button as loading', () => {
      const spinner = screen.getByTestId('loading');
      expect(spinner).toBeVisible();
    });
  });
});
