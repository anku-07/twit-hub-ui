'use client';
import assest from '@/json/assest';
import BrandLogo from '@/ui/Icons/BrandLogo';
import CrossIcon from '@/ui/Icons/CrossIcon';
import { IconButton, styled } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface IDashboardSidebarProps extends BoxProps {
  closeSidebar?: () => void;
  sideBarToggle?: boolean;
  isOperator?: boolean;
}

const commonpath = '/dashboard';
const navItems: {
  name: string;
  route: string;
  icon: React.ReactNode;
}[] = [
  {
    name: 'Dashboard',
    route: `${commonpath}/`,
    icon: null,
  },
  {
    name: 'My Vehicles',
    route: `${commonpath}/my-vehicles`,
    icon: null,
  },
  {
    name: 'Rental Rides',
    route: `${commonpath}/rental-rides`,
    icon: null,
  },
  {
    name: 'Messages',
    route: `${commonpath}/message/`,
    icon: null,
  },
  {
    name: 'My Profile',
    route: `${commonpath}/profile`,
    icon: null,
  },
];

const DashboardSidebar: React.FC<IDashboardSidebarProps> = ({
  closeSidebar,
  sideBarToggle,
  ...props
}) => {
  const pathname = usePathname();
  return (
    <DashboardSidebarWrapper className={sideBarToggle ? 'active' : ''} {...props}>
      <Box className='logo_sec'>
        <IconButton disableRipple type='button' onClick={closeSidebar} className='mobileCLoseBtn'>
          <CrossIcon IconColor='currentColor' />
        </IconButton>
        <Link href={`${commonpath}`} className='brandLogo'>
          <Image src={assest?.logo} alt='logo' width={149} height={74} />

          <BrandLogo />
        </Link>
      </Box>
      <List disablePadding className={`sidebar_menu`}>
        {navItems?.map((data, index) => {
          const isLogout = data.name === 'Logout';
          return (
            <ListItem
              disablePadding
              key={index}
              className={pathname === data?.route ? 'active' : ''}
            >
              <Button
                component={isLogout ? 'button' : Link}
                href={isLogout ? undefined : data?.route}
                onClick={
                  isLogout
                    ? (_e: React.MouseEvent<HTMLButtonElement>) => {
                        ('logout');
                      }
                    : undefined
                }
                startIcon={data?.icon}
              >
                {data?.name}
              </Button>
            </ListItem>
          );
        })}
      </List>
      <Box className='bottomBlock'></Box>
    </DashboardSidebarWrapper>
  );
};

export default DashboardSidebar;

export const DashboardSidebarWrapper = styled(Box)`
  width: 260px;
  flex-basis: 260px;
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100vh;
  overflow-y: auto;
  z-index: 5;
  border-right: 1px solid rgba(67, 26, 26, 0.078);
  background: ${({ theme }) => theme.palette.customColors.bodyBg};
  @media (max-width: 1599px) {
    width: 260px;
    flex-basis: 260px;
  }
  @media (max-width: 1199px) {
    left: 0;
    top: 0;
    transform: translateX(-100%);
    height: 100dvh;
    border-radius: 0 16px 16px 0;
    transition: all 0.3s ease-in-out;
    border: 0;
    background: ${({ theme }) => theme.palette.common.white};
    overflow: hidden;
    &.active {
      transform: translateX(0);
      z-index: 99;
    }
  }
  .mobileCLoseBtn {
    display: none;
    @media (max-width: 1199px) {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 6px;
      top: 6px;
      width: 30px;
      height: 30px;
      min-width: inherit;
      padding: 0;
      border-radius: 50%;
      background: ${({ theme }) => theme.palette.primary?.main};
      color: ${({ theme }) => theme.palette.common?.white};
      transition: all 0.3s ease-in-out;
      margin-left: 10px;
      &:hover {
        transform: scale(1.03);
        background: ${({ theme }) => theme.palette.primary.light};
      }
    }
  }

  .logo_sec {
    position: relative;
    padding: 24px 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1199px) {
      padding: 20px 14px;
      padding-top: 20px;
    }
    @media (max-width: 899px) {
      padding: 15px 14px;
      padding-top: 20px;
    }
    a {
      width: 149px;
      height: auto;
      line-height: 0;
      @media (max-width: 899px) {
        width: 100px;
      }
      @media (max-width: 599px) {
        width: 80px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .sidebar_menu {
    padding: 0 24px;
    height: calc(100dvh - 330px);
    overflow-y: auto;
    margin-bottom: 20px;
    width: 100%;
    overflow-x: hidden;
    &.landscape {
      height: calc(100dvh - 270px);
    }
    @media (max-width: 1199px) {
      height: calc(100vh - 290px);
    }
    @media (max-width: 899px) {
      height: calc(100vh - 250px);
    }
    @media (max-width: 599px) {
      height: calc(100vh - 220px);
      margin-bottom: 10px;
    }
    li {
      &:not(:last-child) {
        margin-bottom: 8px;
        @media (max-width: 1599px) {
          margin-bottom: 8px;
        }
      }
      a,
      button {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        width: 100%;
        justify-content: flex-start;
        padding: 14px 16px;
        color: ${({ theme }) => theme.palette.customColors?.placeText};
        border-radius: 10px;
        min-width: inherit;
        text-transform: capitalize;
        @media (max-width: 899px) {
          padding: 8px 15px;
          font-size: 14px;
        }
        .MuiButton-startIcon {
          margin-left: 0px;
          margin-right: 12px;
        }
        &:hover {
          background: ${({ theme }) => theme.palette.primary.main};
          color: ${({ theme }) => theme.palette.common.white};
        }
      }
      &.active {
        a {
          background: ${({ theme }) => theme.palette.primary.main};
          color: ${({ theme }) => theme.palette.common.white};
        }
      }
    }
  }

  .bottomBlock {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 0px 24px 27px;
    z-index: 3;
    @media (max-width: 1499px) {
      padding: 0 24px 15px;
    }
    @media (max-width: 899px) {
      padding: 0 15px 15px;
    }
    @media (max-width: 599px) {
      padding: 0 10px 10px;
    }
  }
`;
