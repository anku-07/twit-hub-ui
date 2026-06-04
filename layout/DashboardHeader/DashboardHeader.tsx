import assest from '@/json/assest';
import DashboardMenuBtnIcon from '@/ui/Icons/DashboardMenuBtnIcon';
import NotiFicationIcon from '@/ui/Icons/NotiFicationIcon';
import { Box, BoxProps, Button, IconButton, Menu, Stack, styled, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const DashboardHeaderStyled = styled(Box)`
  padding: 20px;
  position: fixed;
  top: 0;
  z-index: 9;
  width: calc(100% - 260px);
  border-bottom: 1px solid rgba(67, 26, 26, 0.078);
  background-color: ${({ theme }) => theme.palette.customColors?.bodyBg};
  @media (max-width: 1199px) {
    width: 100%;
    top: 0;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 15px;
    padding-bottom: 10px;
  }
  @media (max-width: 899px) {
    width: 100%;
    top: 0;
    padding-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 10px;
  }
  .header_title {
    h1 {
      color: ${({ theme }) => theme.palette.customColors.dark};
      font-size: 24px;
      font-weight: 400;
      @media (max-width: 1199px) {
        display: none;
      }
    }
    span {
      font-size: 14px;
      color: ${({ theme }) => theme.palette.customColors.light};
    }
  }
  .header_options {
    width: 100%;
    .sub_title {
      @media (max-width: 1199px) {
        display: none;
      }
    }
    h1 {
      color: ${({ theme }) => theme.palette.customColors.dark};
      font-size: 24px;
      font-weight: 400;
      @media (max-width: 1199px) {
        display: none;
      }
    }
    span {
      font-size: 14px;
      color: ${({ theme }) => theme.palette.customColors.light};
    }
    .logoMobile {
      position: relative;
      line-height: 0;
      display: none;
      width: 140px;
      @media (max-width: 1199px) {
        display: block;
        margin-right: 15px;
        width: 100px;
      }
      @media (max-width: 599px) {
        width: 75px;
      }
      img {
        width: 100%;
      }
    }
  }

  .notificationBtn {
    width: 56px;
    height: 56px;
    min-width: auto;
    padding: 0;
    border-radius: 10px;
    position: relative;
    color: ${({ theme }) => theme.palette.customColors?.light};
    &:hover {
      background: ${({ theme }) => theme.palette.primary.main};
      color: ${({ theme }) => theme.palette.common.white};
      border: 1px solid ${({ theme }) => theme.palette.primary.main};
      &::after {
        background: ${({ theme }) => theme.palette.common.white};
      }
    }
    @media (max-width: 899px) {
      width: 48px;
      height: 48px;
    }
    @media (max-width: 599px) {
      width: 40px;
      height: 40px;
    }
    &::after {
      content: '';
      width: 7px;
      background: ${({ theme }) => theme.palette.primary.main};
      height: 7px;
      border-radius: 100%;
      position: absolute;
      right: 13px;
      top: 13px;
      z-index: 1;
      @media (max-width: 1199px) {
        right: 10px;
        top: 10px;
      }
      @media (max-width: 899px) {
        right: 8px;
        top: 8px;
      }
    }
  }

  .avatar_block {
    .avatar_btn {
      padding: 12px;
      padding-right: 20px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      @media (max-width: 1499px) {
        padding: 10px;
        padding-right: 15px;
        min-width: 150px;
      }
      &:hover {
        background: ${({ theme }) => theme.palette.primary.main};
        color: ${({ theme }) => theme.palette.common.white};
        border: 2px solid ${({ theme }) => theme.palette.primary.main};
        p {
          color: ${({ theme }) => theme.palette.common.white};
        }
        &::after {
          background: ${({ theme }) => theme.palette.common.white};
        }
      }
      @media (max-width: 899px) {
        padding: 0;
        min-height: auto;
        min-width: auto;
        border-radius: 0;
        border: 0;
        background: transparent;
        &:hover,
        &:focus,
        &:active {
          background: transparent;
          border: 0;
        }
        .MuiButton-icon {
          display: none;
        }
      }
      i {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        overflow: hidden;
        margin: 0;
        margin-right: 10px;
        @media (max-width: 899px) {
          width: 48px;
          height: 48px;
          margin: 0;
        }
        @media (max-width: 599px) {
          width: 36px;
          height: 36px;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      p {
        font-size: 16px;
        text-transform: capitalize;
        margin: 0;
        color: ${({ theme }) => theme.palette.customColors?.dark};
        @media screen and (max-width: 1499px) {
          font-size: 12px;
          flex-shrink: 0;
        }
        @media (max-width: 899px) {
          display: none;
        }
      }
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 12px;
      }
      .MuiButton-endIcon {
        position: absolute;
        top: 50%;
        right: 20px;
        margin: 0;
        transform: translate(0px, -50%);
        z-index: 1;
        @media (max-width: 899px) {
          right: 8px;
        }
      }
    }
  }
  .mobileMenuDashboard {
    display: none;
    @media (max-width: 1199px) {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 40px;
      height: 40px;
      min-width: inherit;
      padding: 0;
      border-radius: 50%;
      background: ${({ theme }) => theme.palette.primary?.main};
      color: ${({ theme }) => theme.palette.common?.white};
      transition: all 0.3s ease-in-out;
      margin-left: 0 !important;
      &:hover {
        transform: scale(1.03);
        background: ${({ theme }) => theme.palette.primary.light};
      }
    }
    @media (max-width: 599px) {
      width: 36px;
      height: 36px;
      padding: 10px;
      margin-left: 6px;
    }
  }
`;

interface IheaderProps extends BoxProps {
  mainTitle: string;
  subTitle: string;
  dashboarMenuClick?: () => void;
}

const DashboardHeader: React.FC<IheaderProps & BoxProps> = ({
  mainTitle,
  subTitle,
  dashboarMenuClick,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <DashboardHeaderStyled {...props}>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          className='header_options'
        >
          <Link href='/dashboard' className='logoMobile'>
            <Image src={assest.logo} width={209} height={150} alt='Logo' />
          </Link>
          <Stack
            direction={'column'}
            alignItems={'flex-start'}
            justifyContent={'flex-start'}
            gap={'5px'}
          >
            <Typography variant='h1'>{mainTitle}</Typography>
            {subTitle && (
              <Typography variant='caption' className='sub_title'>
                {subTitle}
              </Typography>
            )}
          </Stack>

          <Stack direction='row' alignItems='center' gap={'15px'} className='header_rightStack'>
            <Stack
              direction='row'
              alignItems='center'
              gap={'15px'}
              className='header_rightStack_inner'
            >
              <IconButton
                className='notificationBtn'
                disableRipple
                LinkComponent={Link}
                href='/dashboard/seller/notifications'
              >
                <NotiFicationIcon IconColor='currentColor' />
              </IconButton>
              <Box className='avatar_block'>
                <Button
                  id='basic-button'
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  className='avatar_btn'
                  disableRipple
                  LinkComponent={Link}
                  href='/dashboard/seller/profile'
                >
                  <Typography component='i' className='avatar_image'>
                    <Image src={assest?.messageAvatar1} alt='avatar image' width={53} height={53} />
                  </Typography>
                  <Typography>Jason Gomes</Typography>
                </Button>
              </Box>
              <IconButton
                type='button'
                disableRipple
                className='mobileMenuDashboard'
                onClick={dashboarMenuClick}
              >
                <DashboardMenuBtnIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </DashboardHeaderStyled>
  );
};

export default DashboardHeader;

export const AvatarMenu = styled(Menu, {
  shouldForwardProp: data => data !== 'avatarMenuWidth',
})<{ avatarMenuWidth: number | undefined }>`
  .MuiPaper-root {
    width: ${({ avatarMenuWidth }) => `${avatarMenuWidth}px`};

    box-shadow: 0px 3px 28px -6px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    ul {
      padding: 17px 17px;
      li {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 15px;
        line-height: 1.5;
        text-transform: capitalize !important;

        padding: 9px 0;
        &:first-child {
          padding-top: 0px;
        }
        &:last-child {
          padding-bottom: 0px;
        }
        &:hover {
          background-color: transparent;
        }
      }
    }
  }
`;
