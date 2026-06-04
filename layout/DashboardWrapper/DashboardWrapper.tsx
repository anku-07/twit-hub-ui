'use client';
import Box from '@mui/material/Box';

import { styled, Typography } from '@mui/material';
import Stack, { StackProps } from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

interface IDashBoardProps extends StackProps {
  mainTitle?: string;
  subTitle?: string;
}

const DashboardWrapper: React.FC<IDashBoardProps> = ({ mainTitle, subTitle, ...props }) => {
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const handelMobileToggle = () => {
    setMobileSidebar(prev => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle('overflowHidden-body', mobileSidebar);
    return () => {
      document.body.classList.remove('overflowHidden-body');
    };
  }, [mobileSidebar]);

  return (
    <DashboardWrapperStyled direction='row' flexWrap='wrap' {...props}>
      <DashboardSidebar sideBarToggle={mobileSidebar} closeSidebar={handelMobileToggle} />

      <Box className='wrapper_rgt'>
        <DashboardHeader
          mainTitle={mainTitle ?? ''}
          subTitle={subTitle ?? ''}
          dashboarMenuClick={handelMobileToggle}
        />
        <Box className={mobileSidebar ? 'active dashboard_body' : 'dashboard_body'}>
          <Box className='dashboard_headerMobile'>
            <Typography variant='h1' className='dashboard_title'>
              {mainTitle}
            </Typography>
            {subTitle && <Typography>{subTitle}</Typography>}
          </Box>
          {props?.children}
        </Box>
      </Box>
      <Box
        className={mobileSidebar ? 'active overlayDashboard' : 'overlayDashboard'}
        onClick={handelMobileToggle}
      />
    </DashboardWrapperStyled>
  );
};

export default DashboardWrapper;

export const DashboardWrapperStyled = styled(Stack)`
  height: 100dvh;
  @media (max-width: 1199px) {
    height: auto;
  }

  .dashboard_headerMobile {
    display: none;
    @media (max-width: 1199px) {
      display: block;
      margin-bottom: 10px;
      h1 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 5px;
        color: ${({ theme }) => theme.palette.customColors?.dark};
      }
      p {
        font-size: 14px;
        color: ${({ theme }) => theme.palette.customColors?.dark};
        @media (max-width: 599px) {
          font-size: 12px;
        }
      }
    }
    @media (max-width: 899px) {
      h1 {
        font-size: 20px;
      }
    }
    @media (max-width: 599px) {
      h1 {
        font-size: 18px;
      }
    }
  }
  .wrapper_rgt {
    width: calc(100% - 260px);
    flex-basis: calc(100% - 260px);
    margin-left: auto;
    padding-top: 99px;
    @media (max-width: 1199px) {
      width: 100%;
      flex-basis: 100%;
      padding-top: 90px;
      padding-left: 0;
    }
    @media (max-width: 899px) {
      padding-top: 73px;
    }
    @media (max-width: 599px) {
      padding-top: 60px;
    }
  }

  .dashboard_body {
    padding: 24px;
    padding-bottom: 16px;
    @media (max-width: 1599px) {
      padding: 16px;
    }
  }

  .common_box {
    padding: 16px 20px;
    border-radius: 10px;
  }
  .overlayDashboard {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100dvh;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    display: none;
    z-index: 13;
    overflow: hidden;
    touch-action: none;
    &.active {
      display: block;
    }
  }
`;
