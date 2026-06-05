'use client';

import { useCreatePost } from '@/hooks/api/post/useCreatePost';
import { useProfile } from '@/hooks/api/profile/useProfile';
import { CreatePostComponentWrapper } from '@/styles/StyledComponents/CreatePostComponentWrapper';
import {
  BallotOutlined,
  CalendarTodayOutlined,
  FlagOutlined,
  GifBoxOutlined,
  ImageOutlined,
  LocationOnOutlined,
  Public,
  SentimentSatisfiedAltOutlined,
} from '@mui/icons-material';
import { Avatar, Box, Button, IconButton, TextField } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

interface CreatePostComponentProps {
  onSuccess?: () => void;
}

const CreatePostComponent = ({ onSuccess }: CreatePostComponentProps) => {
  const { data: profileData } = useProfile();

  const { mutate, isPending } = useCreatePost();
  const queryClient = useQueryClient();
  const [postText, setPostText] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!postText.trim()) return;

    mutate(
      { content: postText },
      {
        onSuccess: () => {
          setPostText('');
          toast.success('Post created successfully!');
          queryClient.invalidateQueries({ queryKey: ['posts'] });
          queryClient.invalidateQueries({ queryKey: ['my-posts'] });
          onSuccess?.();
        },
        onError: () => {
          toast.error('Failed to create post');
        },
      }
    );
  };

  return (
    <CreatePostComponentWrapper className='createPostWrapper'>
      <Box component='form' onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Box className='postContainer'>
          <Box className='avatarCol'>
            <Avatar className='avatarStyle' src={profileData?.data?.avatar}>
              {profileData?.data?.name ? profileData.data.name.charAt(0).toUpperCase() : 'W'}
            </Avatar>
          </Box>
          <Box className='contentCol'>
            <TextField
              className='inputArea'
              placeholder="What's happening?"
              variant='outlined'
              multiline
              value={postText}
              onChange={handleTextChange}
              fullWidth
            />

            {/* <Button className='privacySetting' startIcon={<Public />} disableRipple>
              Everyone can reply
            </Button> */}

            <Box className='dividerLine' />

            <Box className='toolbarRow'>
              <Box className='iconGroup'>
                <IconButton className='toolIconBtn' aria-label='Media'>
                  <ImageOutlined />
                </IconButton>
                <IconButton className='toolIconBtn' aria-label='GIF'>
                  <GifBoxOutlined />
                </IconButton>
                <IconButton className='toolIconBtn' aria-label='Poll'>
                  <BallotOutlined />
                </IconButton>
                <IconButton className='toolIconBtn' aria-label='Emoji'>
                  <SentimentSatisfiedAltOutlined />
                </IconButton>
                <IconButton className='toolIconBtn' aria-label='Schedule'>
                  <CalendarTodayOutlined />
                </IconButton>
                <IconButton className='toolIconBtn' aria-label='Location'>
                  <LocationOnOutlined />
                </IconButton>
                <IconButton className='toolIconBtn' aria-label='Tag'>
                  <FlagOutlined />
                </IconButton>
              </Box>
              <Button
                className='postSubmitBtn'
                variant='contained'
                type='submit'
                disabled={!postText.trim() || isPending}
                disableElevation
              >
                {isPending ? 'Posting...' : 'Post'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </CreatePostComponentWrapper>
  );
};

export default CreatePostComponent;
