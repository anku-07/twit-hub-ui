import { Box, styled } from '@mui/material';

export const PageRightBarStyled = styled(Box)`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 300px;
  height: 100dvh;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing(0, 0, 2)};
  scrollbar-width: none;
  border-left: 1px solid #334f4d29;
  padding: 16px 0 16px 16px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1199px) {
    display: none;
  }

  .searchBox {
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1.25)};
    min-height: 46px;
    padding: ${({ theme }) => theme.spacing(0, 2)};
    border-radius: 999px;
    color: ${({ theme }) => theme.palette.text.secondary};
    background: ${({ theme }) => theme.palette.customColors.trackBg};

    svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }
  }

  .rightCard {
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.palette.divider};
    border-radius: 16px;
    background: ${({ theme }) => theme.palette.background.paper};

    h6 {
      padding: ${({ theme }) => theme.spacing(1.75, 2)};
      color: ${({ theme }) => theme.palette.text.primary};
      font-weight: 800;
      line-height: 1.2;
    }
  }

  .trendItem {
    padding: ${({ theme }) => theme.spacing(1.5, 2)};
    transition: background 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.palette.action.hover};
    }
  }

  .trendTitle {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 800;
    line-height: 1.35;
  }

  .mutedText {
    display: block;
    color: ${({ theme }) => theme.palette.text.secondary};
    line-height: 1.35;
  }

  .showMoreBtn {
    justify-content: flex-start;
    width: 100%;
    min-height: 48px;
    padding: ${({ theme }) => theme.spacing(0, 2)};
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 700;
    text-transform: none;

    &:hover {
      background: ${({ theme }) => theme.palette.action.hover};
    }
  }

  .followItem {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1.25)};
    padding: ${({ theme }) => theme.spacing(1.5, 2)};
    transition: background 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.palette.action.hover};
    }
  }

  .followAvatar {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.secondary.main};
    font-weight: 800;
  }

  .followCopy {
    min-width: 0;
    flex: 1;

    p {
      overflow: hidden;
      color: ${({ theme }) => theme.palette.text.primary};
      font-weight: 800;
      line-height: 1.25;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    span {
      display: block;
      overflow: hidden;
      color: ${({ theme }) => theme.palette.text.secondary};
      line-height: 1.25;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .followBtn {
    min-width: 74px;
    min-height: 34px;
    padding: ${({ theme }) => theme.spacing(0.5, 1.5)};
    border-radius: 999px;
    font-size: 14px;
    text-transform: none;
  }
`;
