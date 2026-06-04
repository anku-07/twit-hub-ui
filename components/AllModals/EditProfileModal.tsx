'use client';

import { useEditProfile } from '@/hooks/api/profile/useEditProfile';
import { useProfile } from '@/hooks/api/profile/useProfile';
import { EditProfileModalWrapper } from '@/styles/StyledComponents/EditProfileModalWrapper';
import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import MuiModalWrapper from '@/ui/Modal/MuiModalWrapper';
import { CameraAlt } from '@mui/icons-material';
import { Avatar, Box, Button, IconButton, Stack } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
}

const EditProfileModal = ({ open, onClose }: EditProfileModalProps) => {
  const { data: profileData } = useProfile();
  const { mutate, isPending } = useEditProfile();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    bio: '',
    city: '',
    avatar: '',
    coverImage: '',
  });

  useEffect(() => {
    if (profileData?.data) {
      setFormData({
        name: profileData.data.name || '',
        username: profileData.data.username || '',
        bio: profileData.data.bio || '',
        city: profileData.data.city || '',
        avatar: profileData.data.avatar || '',
        coverImage: profileData.data.coverImage || '',
      });
    }
  }, [profileData, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        toast.success('Profile updated successfully!');
        queryClient.invalidateQueries({ queryKey: ['profile'] });
        onClose();
      },
      onError: () => {
        toast.error('Failed to update profile.');
      },
    });
  };

  return (
    <MuiModalWrapper title='Edit Profile' open={open} onClose={onClose}>
      <EditProfileModalWrapper>
        <Box component='form' onSubmit={handleSubmit} style={{ width: '100%' }}>
          {/* Cover Photo Block */}
          <Box className='bannerSection' style={{ backgroundImage: `url(${formData.coverImage})` }}>
            <IconButton
              className='bannerCameraBtn'
              component='label'
              aria-label='upload cover photo'
            >
              <CameraAlt />
              <input type='file' hidden accept='image/*' />
            </IconButton>
          </Box>

          {/* Profile Avatar Overlay */}
          <Box className='avatarUploadSection'>
            <Avatar className='avatarStyle' src={formData.avatar}>
              {formData.name ? formData.name.charAt(0).toUpperCase() : 'U'}
            </Avatar>
            <IconButton
              className='avatarOverlay'
              component='label'
              aria-label='upload avatar photo'
            >
              <CameraAlt />
              <input type='file' hidden accept='image/*' />
            </IconButton>
          </Box>

          {/* Input fields */}
          <Stack className='formFieldsStack'>
            <InputFieldCommon
              label='Name'
              placeholder='Enter your name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <InputFieldCommon
              label='Username'
              placeholder='Enter username'
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
            />
            <InputFieldCommon
              label='Bio'
              placeholder='Describe yourself'
              name='bio'
              value={formData.bio}
              onChange={handleChange}
              multiline
              rows={3}
            />
            <InputFieldCommon
              label='City'
              placeholder='Location/City'
              name='city'
              value={formData.city}
              onChange={handleChange}
            />
          </Stack>

          <Button
            className='saveBtn'
            type='submit'
            variant='contained'
            disabled={isPending}
            fullWidth
          >
            {isPending ? 'Saving...' : 'Save'}
          </Button>
        </Box>
      </EditProfileModalWrapper>
    </MuiModalWrapper>
  );
};

export default EditProfileModal;
