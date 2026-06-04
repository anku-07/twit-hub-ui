'use client';

import { useLogin } from '@/hooks/api/auth/useLogin';
import AuthWrapper from '@/layout/AuthWrapper/AuthWrapper';
import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import CustomButtonPrimary from '@/ui/CustomButtons/CustomButtonPrimary';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

type LoginFormData = {
  email: string;
  phone: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();

  const { isPending, mutate } = useLogin();

  const [formData, setformData] = useState<LoginFormData>({
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutate(formData, {
      onSuccess(data) {
        if (!data || !data.token) return;
        localStorage.setItem('token', data.token);
        toast.success('Logged in successfully!');
        setformData({
          email: '',
          phone: '',
          password: '',
        });

        router.push('/');
      },
      onError() {
        toast.error('Login failed');
      },
    });
  };

  return (
    <AuthWrapper heading='Welcome back' paragraph='Login to your account'>
      <Box component='form' className='authForm' onSubmit={handleLogin}>
        <InputFieldCommon
          type='text'
          label='Email or phone number'
          placeholder='Enter your email or phone'
          name='email'
          value={formData.email}
          onChange={handleChange}
          autoComplete='username'
          required
        />
        <InputFieldCommon
          isPassword
          label='Password'
          placeholder='Enter your password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          autoComplete='current-password'
          required
        />
        <CustomButtonPrimary type='submit' variant='contained' color='primary' disabled={isPending}>
          {isPending ? 'Logging in...' : 'Login'}
        </CustomButtonPrimary>
        <Box className='authFooter'>
          <Typography variant='body2'>Don&apos;t have an account?</Typography>
          <Link href='/signup'>Sign up</Link>
        </Box>
      </Box>
    </AuthWrapper>
  );
};

export default LoginPage;
