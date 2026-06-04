'use client';

import { AuthWrapperStyled } from '@/styles/StyledComponents/AuthWrapperStyled';
import { Box, Typography } from '@mui/material';

interface AuthWrapperProps {
  heading?: string;
  paragraph?: string;
  children: React.ReactNode;
}

const AuthWrapper = ({ heading, paragraph, children }: AuthWrapperProps) => {
  return (
    <AuthWrapperStyled>
      <Box className='authShell'>
        <Box className='authIntro'>
          <Typography className='authBrand' component='p' variant='body2'>
            TwitHub
          </Typography>

          <Box className='authIntroCopy'>
            <Typography variant='h2'>Connect with your people in one clean space.</Typography>
            <Typography variant='body2'>
              Keep conversations, updates, and your social presence moving without the noise.
            </Typography>
          </Box>

          <Typography className='authFootnote' variant='caption'>
            Secure access for every account.
          </Typography>
        </Box>

        <Box className='authPanel'>
          <Box className='authHeader'>
            {heading ? <Typography variant='h1'>{heading}</Typography> : null}
            {paragraph ? <Typography variant='body2'>{paragraph}</Typography> : null}
          </Box>

          <Box className='authForm'>{children}</Box>
        </Box>
      </Box>
    </AuthWrapperStyled>
  );
};

export default AuthWrapper;
