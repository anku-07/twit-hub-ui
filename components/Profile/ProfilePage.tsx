'use client';

import EditPostModal from '@/components/AllModals/EditPostModal';
import EditProfileModal from '@/components/AllModals/EditProfileModal';
import PostCard from '@/components/FeedComponent/PostCard';
import { useEditMyPost } from '@/hooks/api/post/useEditMyPost';
import { useMyPosts } from '@/hooks/api/post/useMyPosts';
import { useProfile } from '@/hooks/api/profile/useProfile';
import { ProfilePageStyled } from '@/styles/StyledComponents/ProfilePageStyled';
import { PostData } from '@/typescript/types/common.type';
import Loader from '@/ui/Loader/Loder';
import {
  ArrowBack,
  CalendarMonthOutlined,
  LocationOnOutlined,
  MoreHoriz,
} from '@mui/icons-material';
import { Avatar, Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const profileTabs = ['Posts', 'Replies', 'Highlights', 'Media'];

const ProfilePage = () => {
  const router = useRouter();

  const { data: profileData, isLoading: isProfileLoading } = useProfile();
  const { data: myPostsData } = useMyPosts();

  const { mutate: editMyPost } = useEditMyPost();

  const [editProfileModal, setEditProfileModal] = useState(false);
  const [editPostModal, setEditPostModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState('');
  const [selectedPostContent, setSelectedPostContent] = useState('');
  const [deletePostModal, setDeletePostModal] = useState(false);

  const handleEditProfile = () => {
    setEditProfileModal(true);
  };

  const handleEditProfileClose = () => {
    setEditProfileModal(false);
  };

  const handleOpenEditPostModal = (id: string, content: string) => {
    setEditPostModal(true);
    setSelectedPostId(id);
    setSelectedPostContent(content);
  };

  const saveEditPost = (content: string) => {
 
    setSelectedPostId('');
    setSelectedPostContent('');
  };

  const handleEditPostClose = () => {
    setEditPostModal(false);
    setSelectedPostId('');
    setSelectedPostContent('');
  };

  const handleDeletePost = (id: string) => {};

  if (isProfileLoading) return <Loader />;

  return (
    <ProfilePageStyled>
      <Box className='profileTopbar'>
        <IconButton aria-label='Back' className='backBtn' onClick={() => router.back()}>
          <ArrowBack />
        </IconButton>
        <Box className='topbarCopy'>
          <Typography variant='h6'>{profileData?.data?.name}</Typography>
          <Typography variant='caption'>{myPostsData?.data?.length || 0} posts</Typography>
        </Box>
      </Box>

      <Box className='coverArea' />

      <Box className='profileInfo'>
        <Stack className='avatarActions' direction='row'>
          <Avatar className='profileAvatar'>
            {profileData?.data?.name ? profileData.data.name.charAt(0).toUpperCase() : 'U'}
          </Avatar>
          <Stack className='actionGroup' direction='row'>
            <IconButton aria-label='More profile actions' className='moreBtn' disableRipple>
              <MoreHoriz />
            </IconButton>
            <Button
              className='editBtn'
              variant='outlined'
              disableRipple
              onClick={handleEditProfile}
            >
              Edit profile
            </Button>
          </Stack>
        </Stack>

        <Box className='nameBlock'>
          <Typography variant='h5'>{profileData?.data?.name}</Typography>
          <Typography variant='body2'>@{profileData?.data?.username}</Typography>
        </Box>

        <Typography className='bioText' variant='body2'>
          {profileData?.data?.bio}
        </Typography>

        <Stack className='metaList' direction='row'>
          <Typography variant='caption'>
            <LocationOnOutlined />
            {profileData?.data?.city}
          </Typography>
          <Typography variant='caption'>
            <CalendarMonthOutlined />
            Joined{' '}
            {profileData?.data?.createdAt
              ? new Date(profileData.data.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              : ''}
          </Typography>
        </Stack>

        <Stack className='statsList' direction='row'>
          <Typography variant='body2'>
            <strong>{profileData?.data?.following?.length || 0}</strong> Following
          </Typography>

          <Typography variant='body2'>
            <strong>{profileData?.data?.followers?.length || 0}</strong> Followers
          </Typography>
        </Stack>
      </Box>

      <Box className='profileTabs' role='tablist' aria-label='Profile content'>
        {profileTabs.map((item, index) => (
          <Button className={index === 0 ? 'active' : ''} key={item} role='tab' disableRipple>
            {item}
          </Button>
        ))}
      </Box>

      <Box className='postList'>
        {myPostsData?.data?.map((post: PostData) => (
          <PostCard
            key={post._id}
            content={post.content}
            name={post.author.name}
            username={post.author.username}
            time={post.createdAt}
            editOnClick={() => handleOpenEditPostModal(post._id, post.content)}
            deleteOnClick={() => handleDeletePost(post._id)}
          />
        ))}
      </Box>

      {/* Edit profile Modal */}
      <EditProfileModal open={editProfileModal} onClose={handleEditProfileClose} />

      {/* Edit post Modal */}
      <EditPostModal
        open={editPostModal}
        onClose={handleEditPostClose}
        postId={selectedPostId}
        currentContent={selectedPostContent}
      />
    </ProfilePageStyled>
  );
};

export default ProfilePage;
