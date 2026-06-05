import CreatePostComponent from '@/components/CreatePostComponent/CreatePostComponent';
import { PostModalWrapper } from '@/styles/StyledComponents/PostModalWrapper';
import MuiModalWrapper from '@/ui/Modal/MuiModalWrapper';

interface PostModalProps {
  open: boolean;
  onClose: () => void;
}

const PostModal = ({ open, onClose }: PostModalProps) => {
  return (
    <MuiModalWrapper open={open} onClose={onClose} title='Post a Tweet'>
      <PostModalWrapper>
        <CreatePostComponent onSuccess={onClose} />
      </PostModalWrapper>
    </MuiModalWrapper>
  );
};

export default PostModal;
