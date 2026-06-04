import { CustomDialog } from '@/styles/StyledComponents/CustomDialog';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

interface MuiModalWrapperProps {
  open: boolean;
  onClose?: () => void;
  scroll?: 'paper' | 'body';
  children: React.JSX.Element | React.JSX.Element[];
  title: string;
}

export default function MuiModalWrapper({
  open,
  onClose,
  scroll,
  children,
  title,
}: MuiModalWrapperProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <CustomDialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      scroll={scroll}
      aria-labelledby='responsive-dialog-title'
    >
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        spacing={2}
        className='modalHeader'
      >
        <Typography variant='h5' className='modalHeader'>
          {title}
        </Typography>
        <IconButton onClick={onClose} autoFocus>
          <CloseIcon />
        </IconButton>
      </Stack>

      <DialogContent>{children}</DialogContent>
    </CustomDialog>
  );
}
