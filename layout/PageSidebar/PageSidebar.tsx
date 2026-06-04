'use client';

import PostModal from '@/components/AllModals/PostModal';
import { useProfile } from '@/hooks/api/profile/useProfile';
import { PageSidebarWrapper } from '@/styles/StyledComponents/PageSidebarWrapper';
import {
  BookmarkBorder,
  ExploreOutlined,
  Home,
  Logout,
  MailOutline,
  MoreHoriz,
  NotificationsNone,
  PersonOutline,
  Search,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const PageSidebar = () => {
  const commonPath = '/';
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data } = useProfile();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileSettings = () => {
    handleMenuClose();
    router.push('/profile');
  };

  const handleLogout = () => {
    handleMenuClose();
    localStorage.removeItem('token');
    queryClient.clear();
    toast.success('Logged out successfully!');
    router.push('/login');
  };

  const navList = [
    {
      name: 'Home',
      pageLink: `${commonPath}`,
      icon: <Home />,
      active: true,
    },
    {
      name: 'Explore',
      pageLink: `${commonPath}`,
      icon: <ExploreOutlined />,
    },
    {
      name: 'Search',
      pageLink: `${commonPath}`,
      icon: <Search />,
    },
    {
      name: 'Notifications',
      pageLink: `${commonPath}`,
      icon: <NotificationsNone />,
    },
    {
      name: 'Messages',
      pageLink: `${commonPath}`,
      icon: <MailOutline />,
    },
    {
      name: 'Bookmarks',
      pageLink: `${commonPath}`,
      icon: <BookmarkBorder />,
    },
    {
      name: 'Profile',
      pageLink: '/profile',
      icon: <PersonOutline />,
    },
    {
      name: 'More',
      pageLink: `${commonPath}`,
      icon: <MoreHoriz />,
    },
  ];

  const [openPostModal, setOpenPostModal] = useState(false);

  const handleOpenPostModal = () => {
    setOpenPostModal(true);
  };

  const handleClosePostModal = () => {
    setOpenPostModal(false);
  };

  return (
    <PageSidebarWrapper>
      <Box className='logoWrap'>
        <Link href='/'>
          Twit- <em>hub</em>
        </Link>
      </Box>

      <List className='navList'>
        {navList.map((item, index) => (
          <ListItem key={`${item.name}-${index}`} disablePadding>
            <Button
              className={item.active ? 'active' : ''}
              LinkComponent={Link}
              href={item.pageLink}
              fullWidth
              disableRipple
              startIcon={item.icon}
            >
              <span>{item.name}</span>
            </Button>
          </ListItem>
        ))}
      </List>

      <Button
        className='postBtn'
        variant='contained'
        color='primary'
        fullWidth
        disableRipple
        onClick={handleOpenPostModal}
      >
        Post
      </Button>

      <Box className='sidebarFtr'>
        <Button className='profileBtn' fullWidth disableRipple onClick={handleProfileClick}>
          <Avatar className='profileAvatar'>{data?.data?.name.charAt(0).toUpperCase()}</Avatar>
          <Box className='profileCopy'>
            <Typography variant='body2'>{data?.data?.name}</Typography>
            <Typography variant='caption'>@{data?.data?.username}</Typography>
          </Box>
          <MoreHoriz className='profileMore' />
        </Button>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        slotProps={{
          paper: {
            sx: {
              minWidth: 200,
              borderRadius: '12px',
              mt: -1,
              boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)',
              border: '1px solid',
              borderColor: 'divider',
              '& .MuiMenuItem-root': {
                py: 1.25,
                px: 2,
                borderRadius: '8px',
                mx: 0.5,
                my: 0.5,
                transition: 'background-color 0.2s, color 0.2s',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              },
            },
          },
        }}
      >
        <MenuItem onClick={handleProfileSettings}>
          <ListItemIcon sx={{ minWidth: '36px !important' }}>
            <PersonOutline fontSize='small' />
          </ListItemIcon>
          <ListItemText>Profile Settings</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
          <ListItemIcon sx={{ minWidth: '36px !important', color: 'error.main' }}>
            <Logout fontSize='small' />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>

      <PostModal open={openPostModal} onClose={handleClosePostModal} />
    </PageSidebarWrapper>
  );
};

export default PageSidebar;
