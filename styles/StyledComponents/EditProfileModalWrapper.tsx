import { Box, styled } from '@mui/material';

export const EditProfileModalWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  .bannerSection {
    position: relative;
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.palette.action.disabledBackground};
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bannerCameraBtn {
    background-color: rgba(0, 0, 0, 0.5) !important;
    color: #ffffff !important;
    &:hover {
      background-color: rgba(0, 0, 0, 0.7) !important;
    }
  }

  .avatarUploadSection {
    position: relative;
    margin-top: -60px;
    padding-left: 20px;
    display: flex;
    align-items: flex-end;
    margin-bottom: 12px;
  }

  .avatarStyle {
    width: 100px;
    height: 100px;
    border: 4px solid ${({ theme }) => theme.palette.background.paper};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-size: 32px;
    font-weight: 700;
  }

  .avatarOverlay {
    position: absolute;
    left: 24px;
    bottom: 4px;
    background-color: rgba(0, 0, 0, 0.5) !important;
    color: #ffffff !important;
    width: 92px;
    height: 92px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.6) !important;
    }
  }

  .formFieldsStack {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    margin-top: 16px;
  }

  .saveBtn {
    margin-top: 24px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-weight: 700;
    text-transform: none;
    border-radius: 9999px;
    min-height: 48px;

    &:hover {
      background-color: ${({ theme }) => theme.palette.secondary.dark};
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;
