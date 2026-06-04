'use client';

import { useRegister } from '@/hooks/api/auth/useRegister';
import AuthWrapper from '@/layout/AuthWrapper/AuthWrapper';
import { userFormData } from '@/typescript/types/common.type';
import CustomButtonPrimary from '@/ui/CustomButtons/CustomButtonPrimary';
import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const SignupPage = () => {
  const router = useRouter();

  const { isPending, mutate } = useRegister();

  const [formData, setFormData] = useState<userFormData>({
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutate(formData, {
      onSuccess() {
        toast.success('Registered successfully!');
        setFormData({
          name: '',
          username: '',
          email: '',
          phone: '',
          password: '',
        });
        router.push('/login');
      },
      onError() {
        toast.error('Registration failed');
      },
    });
  };

  return (
    <AuthWrapper heading='Create account' paragraph='Sign up to start using TwitHub'>
      <Box component='form' className='authForm' onSubmit={handleRegister}>
        <InputFieldCommon
          type='text'
          label='Full name'
          placeholder='Enter your full name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          autoComplete='name'
          required
        />
        <InputFieldCommon
          type='text'
          label='Username'
          placeholder='Choose a username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          autoComplete='username'
          required
        />
        <InputFieldCommon
          type='email'
          label='Email address'
          placeholder='Enter your email address'
          name='email'
          value={formData.email}
          onChange={handleChange}
          autoComplete='email'
          required
        />
        <InputFieldCommon
          type='tel'
          label='Phone number'
          placeholder='Enter your phone number'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          autoComplete='tel'
          required
        />
        <InputFieldCommon
          isPassword
          label='Password'
          placeholder='Create a password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          autoComplete='new-password'
          required
        />
        <CustomButtonPrimary type='submit' variant='contained' color='primary' disabled={isPending}>
          {isPending ? 'Signing up...' : 'Sign up'}
        </CustomButtonPrimary>
        <Box className='authFooter'>
          <Typography variant='body2'>Already have an account?</Typography>
          <Link href='/login'>Login</Link>
        </Box>
      </Box>
    </AuthWrapper>
  );
};

export default SignupPage;
