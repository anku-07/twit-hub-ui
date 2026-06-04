'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, keyframes } from '@mui/material/styles';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(0.97); }
  50% { opacity: 1; transform: scale(1.03); }
`;

const LoaderWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  width: 100%;
  gap: 16px;

  .spinner {
    width: 44px;
    height: 44px;
    border: 3.5px solid ${({ theme }) => theme.palette.divider};
    border-top-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
  }

  .logoText {
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.palette.primary.main};
    animation: ${pulse} 1.5s ease-in-out infinite;

    em {
      color: ${({ theme }) => theme.palette.secondary.dark};
      font-style: normal;
    }
  }
`;

export default function Loader() {
  return (
    <LoaderWrapper>
      <Box className='spinner' />
      <Box className='logoText'>
        Twit-<em>hub</em>
      </Box>
    </LoaderWrapper>
  );
}
