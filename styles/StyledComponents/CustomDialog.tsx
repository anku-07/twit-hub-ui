import { Dialog, styled } from '@mui/material';

export const CustomDialog = styled(Dialog)`
  .MuiPaper-root {
    max-width: 600px !important;
    width: 100%;
    max-height: 90vh;

    .modalHeader {
      padding: 16px;

      .modalHeader {
        padding: 0;
        font-weight: 600;
        font-size: 22px;
      }
    }

    .MuiDialogContent-root {
      overflow: auto;
      scrollbar-width: thin;
    }
  }
`;
