import { Box, styled } from '@mui/material';

export const PostCardWrapper = styled(Box)`
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.palette.background.default};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  width: 100%;

  .postHeader {
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }

  .avatarCol {
    flex-shrink: 0;
  }

  .avatarStyle {
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-weight: bold;
  }

  .postMainContent {
    flex-grow: 1;
    min-width: 0;
  }

  .userInfoRow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;
  }

  .userInfoLeft {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;
  }

  .displayName {
    font-weight: 700;
    font-size: 15px;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  .verifiedBadge {
    color: #1d9bf0;
    font-size: 16px;
    display: flex;
    align-items: center;
  }

  .usernameText {
    font-size: 14px;
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  .dotSeparator {
    font-size: 14px;
    color: ${({ theme }) => theme.palette.text.secondary};
    margin: 0 4px;
  }

  .timeText {
    font-size: 14px;
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  .headerActions {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  .actionIconBtn {
    color: ${({ theme }) => theme.palette.text.secondary};
    padding: 4px;

    &:hover {
      background-color: ${({ theme }) => theme.palette.action.hover};
    }
  }

  .postTextContent {
    font-size: 15px;
    line-height: 1.5;
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 12px;
    word-break: break-word;
    white-space: pre-line;
  }

  .showMoreLink {
    color: #1d9bf0;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    margin-top: 4px;

    &:hover {
      text-decoration: underline;
    }
  }

  .mediaGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.palette.divider};
    margin-bottom: 12px;
    aspect-ratio: 16 / 9;
    background-color: ${({ theme }) => theme.palette.action.disabledBackground};
  }

  .mediaItem {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .mediaImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .actionBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 425px;
    margin-top: 12px;
  }

  .actionItem {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: ${({ theme }) => theme.palette.text.secondary};
    cursor: pointer;
    font-size: 13px;
    transition: color 0.2s;
    background: transparent;
    border: none;
    padding: 6px 12px;
    border-radius: 9999px;
    text-transform: none;
    min-width: auto;

    &.MuiButton-root {
      color: ${({ theme }) => theme.palette.text.secondary};
      background-color: transparent;
      box-shadow: none;

      .MuiButton-startIcon {
        margin: 0;
        margin-right: 4px;
      }
    }

    svg {
      font-size: 18px;
    }

    &:hover {
      color: ${({ theme }) => theme.palette.primary.main};
      background-color: ${({ theme }) => theme.palette.action.hover} !important;
    }
  }
`;
