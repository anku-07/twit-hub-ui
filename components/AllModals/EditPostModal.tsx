import { useEditMyPost } from '@/hooks/api/post/useEditMyPost';
import { EditPostModalWrapper } from '@/styles/StyledComponents/EditPostModalWrapper';
import MuiModalWrapper from '@/ui/Modal/MuiModalWrapper';
import { Box, Button, TextField } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

interface IEditPostModalProps {
  open: boolean;
  onClose: () => void;
  postId: string;
  currentContent: string;
}

const EditPostModal = ({ open, onClose, postId, currentContent }: IEditPostModalProps) => {
  const [content, setContent] = useState(currentContent);
  const { mutate, isPending } = useEditMyPost();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (open) {
      setContent(currentContent);
    }
  }, [open, currentContent]);

  const handleEditPost = () => {
    if (!content.trim()) return;
    mutate(
      { id: postId, content },
      {
        onSuccess: () => {
          toast.success('Post updated successfully!');
          queryClient.invalidateQueries({ queryKey: ['posts'] });
          queryClient.invalidateQueries({ queryKey: ['my-posts'] });
          onClose();
        },
        onError: () => {
          toast.error('Failed to update post');
        },
      }
    );
  };

  return (
    <MuiModalWrapper open={open} onClose={onClose} title='Edit Post'>
      <EditPostModalWrapper>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
          <TextField
            multiline
            rows={4}
            fullWidth
            variant='outlined'
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder='Edit your post...'
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Button onClick={onClose} variant='outlined'>
              Cancel
            </Button>
            <Button
              variant='contained'
              onClick={handleEditPost}
              disabled={isPending || !content.trim()}
            >
              {isPending ? 'Saving...' : 'Save Changes'}
            </Button>
          </Box>
        </Box>
      </EditPostModalWrapper>
    </MuiModalWrapper>
  );
};

export default EditPostModal;
