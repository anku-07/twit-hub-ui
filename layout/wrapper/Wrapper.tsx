import Box from '@mui/material/Box';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface wrapperProps {
  children: React.ReactNode;
}

const Wrapper = (props: wrapperProps) => {
  const { children } = props;

  return (
    <>
      <Header />

      <Box className='body_content'>{children}</Box>

      <Footer />
    </>
  );
};

export default Wrapper;
