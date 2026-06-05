'use client';

import { useForm } from 'react-hook-form';

const Demo = () => {
  const {
    register,
    watch,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const passwordValue = watch('password');


  const onSubmit = (data: any) => {
    console.log(data);

    reset();
    alert('Form submitted successfully');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>User Name</p>
          <input
            type='text'
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters long',
              },
            })}
          />
          {errors.username && (
            <p
              style={{
                color: 'red',
              }}
            >
              {errors.username.message}
            </p>
          )}
        </div>
        <div>
          <p>Email</p>
          <input
            type='email'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && (
            <p
              style={{
                color: 'red',
              }}
            >
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <p>Password</p>
          <input
            type='password'
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
            })}
          />
          {errors.password && (
            <p
              style={{
                color: 'red',
              }}
            >
              {errors.password.message}
            </p>
          )}
        </div>
        <div>
          <p>Confirm Password</p>
          <input
            type='password'
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: value => value === passwordValue || "Password doesn't match",
            })}
          />
          {errors.confirmPassword && (
            <p
              style={{
                color: 'red',
              }}
            >
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Demo;
