import { Box, styled } from '@mui/material';

export const CreatePostComponentWrapper = styled(Box)`
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  width: 100%;

  .postContainer {
    display: flex;
    gap: 12px;
  }

  .avatarCol {
    flex-shrink: 0;
  }

  .avatarStyle {
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-weight: 700;
    font-size: 18px;
  }

  .contentCol {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .inputArea {
    width: 100%;
    margin-top: 4px;

    .MuiInputBase-root {
      padding: 0;
      font-size: 20px;
      line-height: 1.3;
      color: ${({ theme }) => theme.palette.text.primary};

      textarea {
        &::placeholder {
          color: ${({ theme }) => theme.palette.text.secondary};
          opacity: 0.6;
        }
      }
    }

    fieldset {
      border: none;
    }
  }

  .privacySetting {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 700;
    font-size: 14px;
    margin: 12px 0 12px -8px;
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 2px 8px;
    border-radius: 9999px;
    align-self: flex-start;
    transition: background-color 0.2s;
    text-transform: none;

    &:hover {
      background-color: ${({ theme }) => theme.palette.action.hover};
    }

    svg {
      font-size: 16px;
    }
  }

  .dividerLine {
    height: 1px;
    background-color: ${({ theme }) => theme.palette.divider};
    margin: 8px 0;
    width: 100%;
  }

  .toolbarRow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
  }

  .iconGroup {
    display: flex;
    gap: 2px;
    margin-left: -8px;
  }

  .toolIconBtn {
    color: ${({ theme }) => theme.palette.primary.main};
    padding: 8px;

    &:hover {
      background-color: ${({ theme }) => theme.palette.action.hover};
    }

    svg {
      font-size: 20px;
    }
  }

  .postSubmitBtn {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-weight: 700;
    font-size: 15px;
    text-transform: none;
    border-radius: 9999px;
    padding: 6px 16px;
    min-width: 76px;
    box-shadow: none;

    &:hover {
      background-color: ${({ theme }) => theme.palette.secondary.dark};
      color: ${({ theme }) => theme.palette.primary.main};
      box-shadow: none;
    }

    &.Mui-disabled {
      background-color: ${({ theme }) => theme.palette.action.disabledBackground};
      color: ${({ theme }) => theme.palette.action.disabled};
      opacity: 0.5;
    }
  }
`;
