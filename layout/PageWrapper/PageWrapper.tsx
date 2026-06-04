'use client';

import PageRightBar from '@/layout/PageRightBar/PageRightBar';
import PageSidebar from '@/layout/PageSidebar/PageSidebar';
import { PageWrapperStyled } from '@/styles/StyledComponents/PageWrapperStyled';
import { Box, Container, Stack } from '@mui/material';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <PageWrapperStyled>
      <Container fixed>
        <Stack className='pageMainStack'>
          <PageSidebar />
          <Box className='feedWrapper'>{children}</Box>
          <PageRightBar />
        </Stack>
      </Container>
    </PageWrapperStyled>
  );
};

export default PageWrapper;
