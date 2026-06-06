import { Box, styled } from '@mui/material';

export const PageSidebarWrapper = styled(Box)`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 255px;
  height: 100dvh;
  padding: 12px;
  border-right: 1px solid ${({ theme }) => theme.palette.divider};
  background: ${({ theme }) => theme.palette.background.default};
  overflow: auto;

  @media (max-width: 1199px) {
    width: 88px;
    align-items: center;
  }

  @media (max-width: 899px) {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    top: auto;
    z-index: 20;
    width: 100%;
    height: auto;
    padding: ${({ theme }) => theme.spacing(0.75, 1.5)};
    border-top: 1px solid ${({ theme }) => theme.palette.divider};
    border-right: 0;
  }

  .logoWrap {
    margin-bottom: ${({ theme }) => theme.spacing(1)};

    @media (max-width: 899px) {
      display: none;
    }

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 52px;
      min-height: 52px;
      padding: ${({ theme }) => theme.spacing(0, 1.5)};
      border-radius: 999px;
      color: ${({ theme }) => theme.palette.primary.main};
      font-size: 24px;
      font-weight: 800;
      letter-spacing: 0;
      text-decoration: none;
      transition:
        background 0.2s ease,
        color 0.2s ease;

      @media (max-width: 1199px) {
        width: 52px;
        padding: 0;
        font-size: 0;

        &::first-letter {
          font-size: 0;
        }

        &::before {
          content: 'T';
          font-size: 26px;
          font-weight: 900;
        }
      }

      em {
        color: ${({ theme }) => theme.palette.secondary.dark};
      }
    }
  }

  .navList {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(0.5)};
    width: 100%;
    padding: 0;

    @media (max-width: 899px) {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: ${({ theme }) => theme.spacing(0.5)};
    }

    li:nth-of-type(n + 6) {
      @media (max-width: 899px) {
        display: none;
      }
    }

    .MuiButton-root {
      justify-content: flex-start;
      min-height: 52px;
      padding: ${({ theme }) => theme.spacing(0, 2)};
      border-radius: 999px;
      color: ${({ theme }) => theme.palette.text.primary};
      font-size: 20px;
      font-weight: 500;
      line-height: 1.2;
      text-transform: none;
      transition:
        background 0.2s ease,
        color 0.2s ease;

      &:hover,
      &.active {
        background: ${({ theme }) => theme.palette.action.hover};
      }

      &.active {
        font-weight: 800;
      }

      @media (max-width: 1199px) {
        justify-content: center;
        width: 52px;
        min-width: 52px;
        padding: 0;
      }

      @media (max-width: 899px) {
        width: 100%;
        min-width: 0;
        min-height: 46px;
      }

      .MuiButton-startIcon {
        margin-right: ${({ theme }) => theme.spacing(2)};
        margin-left: 0;

        @media (max-width: 1199px) {
          margin-right: 0;
        }

        svg {
          width: 27px;
          height: 27px;
        }
      }

      span:not(.MuiButton-startIcon) {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        @media (max-width: 1199px) {
          display: none;
        }
      }
    }
  }

  .postBtn {
    min-height: 52px;
    margin-top: ${({ theme }) => theme.spacing(2)};
    border-radius: 999px;
    font-size: 17px;
    text-transform: none;

    @media (max-width: 1199px) {
      width: 52px;
      min-width: 52px;
      padding: 0;
      font-size: 0;

      &::before {
        content: '+';
        font-size: 28px;
        font-weight: 800;
        line-height: 1;
      }
    }

    @media (max-width: 899px) {
      display: none;
    }
  }

  .sidebarFtr {
    width: 100%;
    margin-top: auto;

    @media (max-width: 899px) {
      display: none;
    }
  }

  .profileBtn {
    justify-content: flex-start;
    min-height: 64px;
    padding: ${({ theme }) => theme.spacing(1)};
    border-radius: 999px;
    color: ${({ theme }) => theme.palette.text.primary};
    text-align: left;
    text-transform: none;

    &:hover {
      background: ${({ theme }) => theme.palette.action.hover};
    }

    @media (max-width: 1199px) {
      justify-content: center;
      width: 56px;
      min-width: 56px;
      min-height: 56px;
      padding: 0;
    }
  }

  .profileAvatar {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.secondary.main};
    font-weight: 800;
  }

  .profileCopy {
    min-width: 0;
    padding-left: ${({ theme }) => theme.spacing(1.25)};

    @media (max-width: 1199px) {
      display: none;
    }

    p {
      color: ${({ theme }) => theme.palette.text.primary};
      font-weight: 800;
      line-height: 1.25;
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

  .profileMore {
    width: 22px;
    height: 22px;
    margin-left: auto;

    @media (max-width: 1199px) {
      display: none;
    }
  }
`;
