'use client';

import { useToggleLike } from '@/hooks/api/post/useToggleLike';
import { useProfile } from '@/hooks/api/profile/useProfile';
import { PostCardWrapper } from '@/styles/StyledComponents/PostCardWrapper';
import GorkIcon from '@/ui/Icons/GorkIcon';
import {
  BarChart,
  BookmarkBorder,
  ChatBubbleOutline,
  DeleteOutline,
  EditOutlined,
  Favorite,
  FavoriteBorder,
  MoreHoriz,
  Publish,
  Repeat,
  Verified,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const formatPostTime = (timeStr: string) => {
  const date = dayjs(timeStr);
  if (!date.isValid()) return timeStr;

  const now = dayjs();
  const diffInSeconds = now.diff(date, 'second');

  if (diffInSeconds < 60) {
    return `${Math.max(1, diffInSeconds)}s`;
  }

  const diffInMinutes = now.diff(date, 'minute');
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m`;
  }

  const diffInHours = now.diff(date, 'hour');
  if (diffInHours < 24) {
    return `${diffInHours}h`;
  }

  const diffInDays = now.diff(date, 'day');
  if (diffInDays < 7) {
    return `${diffInDays}d`;
  }

  if (date.year() === now.year()) {
    return date.format('MMM D');
  }

  return date.format('MMM D, YYYY');
};

export interface PostCardProps {
  postId: string;
  userId:string;
  avatar?: string;
  name: string;
  username: string;
  time: string;
  content: string;
  images?: string[];
  replies?: string | number;
  reposts?: string | number;
  likes?: string[];
  views?: string | number;
  isVerified?: boolean;
  editOnClick?: () => void;
  deleteOnClick?: () => void;
}

const PostCard = ({
  postId,
  userId,
  avatar,
  name,
  username,
  time,
  content,
  images = [],
  replies = 0,
  reposts = 0,
  likes,
  views = 0,
  isVerified = false,
  editOnClick,
  deleteOnClick,
}: PostCardProps) => {


  const router = useRouter();

  const { data: profileData } = useProfile();
  const { mutate: toggleLikePost } = useToggleLike();

  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(menuAnchorEl);

  const handleThreeDotClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleLike = () => {
    toggleLikePost(postId);
  };

  const handleProfileClick = () => {
    router.push( `/profile/${userId}`);
  }

  const currentUser = profileData?.data?._id;
  const isLiked = likes?.includes(currentUser);
  const isOwnPost = profileData?.data?.username === username;

  return (
    <PostCardWrapper onClick={handleProfileClick} sx={{cursor: "pointer"}}>
      <Box className='postHeader'>
        <Box className='avatarCol'>
          <Avatar className='avatarStyle' src={avatar}>
            {name ? name.charAt(0).toUpperCase() : 'U'}
          </Avatar>
        </Box>
        <Box className='postMainContent'>
          <Box className='userInfoRow'>
            <Box className='userInfoLeft'>
              <Typography className='displayName'>{name}</Typography>
              {isVerified && <Verified className='verifiedBadge' />}
              <Typography className='usernameText'>@{username}</Typography>
              <Box component='span' className='dotSeparator'>
                ·
              </Box>
              <Typography className='timeText'>{formatPostTime(time)}</Typography>
            </Box>
            <Box className='headerActions'>
              <IconButton className='actionIconBtn' size='small'>
                <GorkIcon />
              </IconButton>
              {isOwnPost && (
                <IconButton className='actionIconBtn' size='small' onClick={handleThreeDotClick}>
                  <MoreHoriz fontSize='small' />
                </IconButton>
              )}
            </Box>
          </Box>

          <Box className='postTextContent'>{content}</Box>

          {/* Media grid showing images side by side if present */}
          {images.length > 0 && (
            <Box
              className='mediaGrid'
              sx={{ gridTemplateColumns: images.length === 1 ? '1fr' : '1fr 1fr' }}
            >
              {images.map((imgUrl, index) => (
                <Box className='mediaItem' key={index}>
                  <Box
                    component='img'
                    className='mediaImg'
                    src={imgUrl}
                    alt={`Post attachment ${index + 1}`}
                  />
                </Box>
              ))}
            </Box>
          )}

          {/* Action bar with Twitter/X standard icons using MUI components */}
          <Box className='actionBar'>
            <Button
              className='actionItem'
              aria-label='Reply'
              startIcon={<ChatBubbleOutline />}
              disableRipple
            >
              {replies}
            </Button>
            <Button className='actionItem' aria-label='Repost' startIcon={<Repeat />} disableRipple>
              {reposts}
            </Button>
            <Button
              className='actionItem'
              aria-label='Like'
              startIcon={isLiked ? <Favorite sx={{ color: 'error.main' }} /> : <FavoriteBorder />}
              disableRipple
              onClick={handleLike}
              sx={
                isLiked
                  ? { color: 'error.main', '&.MuiButton-root': { color: 'error.main' } }
                  : undefined
              }
            >
              {likes?.length || 0}
            </Button>
            <Button
              className='actionItem'
              aria-label='Views'
              startIcon={<BarChart />}
              disableRipple
            >
              {views}
            </Button>
            <Box sx={{ display: 'flex', gap: '4px' }}>
              <IconButton className='actionItem' aria-label='Bookmark' disableRipple>
                <BookmarkBorder />
              </IconButton>
              <IconButton className='actionItem' aria-label='Share' disableRipple>
                <Publish />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Three-dot dropdown menu */}
      <Menu
        anchorEl={menuAnchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        slotProps={{
          paper: {
            sx: {
              minWidth: 150,
              borderRadius: '12px',
              mt: 0.5,
              boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)',
              border: '1px solid',
              borderColor: 'divider',
              '& .MuiMenuItem-root': {
                py: 1,
                px: 1.5,
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
        <MenuItem onClick={editOnClick}>
          <ListItemIcon sx={{ minWidth: '36px !important' }}>
            <EditOutlined fontSize='small' />
          </ListItemIcon>
          <ListItemText>Edit post</ListItemText>
        </MenuItem>
        <MenuItem onClick={deleteOnClick} sx={{ color: 'error.main' }}>
          <ListItemIcon sx={{ minWidth: '36px !important', color: 'error.main' }}>
            <DeleteOutline fontSize='small' />
          </ListItemIcon>
          <ListItemText>Delete post</ListItemText>
        </MenuItem>
      </Menu>
    </PostCardWrapper>
  );
};

export default PostCard;
