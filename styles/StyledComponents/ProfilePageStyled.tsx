import { Box, styled } from '@mui/material';

export const ProfilePageStyled = styled(Box)`
  min-height: calc(100dvh - 32px);

  background: ${({ theme }) => theme.palette.background.default};

  @media (max-width: 899px) {
    min-height: 100dvh;
    border-right: 0;
    border-left: 0;
    padding-bottom: ${({ theme }) => theme.spacing(8)};
  }

  .profileTopbar {
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
    min-height: 58px;
    padding: ${({ theme }) => theme.spacing(0, 2)};
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
    background: ${({ theme }) => theme.palette.background.default};
  }

  .backBtn {
    width: 38px;
    height: 38px;
    color: ${({ theme }) => theme.palette.text.primary};

    &:hover {
      background: ${({ theme }) => theme.palette.action.hover};
    }
  }

  .topbarCopy {
    min-width: 0;

    h6 {
      overflow: hidden;
      color: ${({ theme }) => theme.palette.text.primary};
      font-weight: 800;
      line-height: 1.2;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    span {
      display: block;
      color: ${({ theme }) => theme.palette.text.secondary};
      line-height: 1.2;
    }
  }

  .coverArea {
    min-height: 200px;
    background:
      linear-gradient(
        135deg,
        ${({ theme }) => theme.palette.primary.main},
        ${({ theme }) => theme.palette.secondary.dark}
      ),
      ${({ theme }) => theme.palette.customColors.trackBg};

    @media (max-width: 599px) {
      min-height: 150px;
    }
  }

  .profileInfo {
    padding: ${({ theme }) => theme.spacing(0, 2, 2)};
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  }

  .avatarActions {
    align-items: flex-start;
    justify-content: space-between;
    margin-top: -68px;
  }

  .profileAvatar {
    width: 136px;
    height: 136px;
    border: 4px solid ${({ theme }) => theme.palette.background.default};
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.secondary.main};
    font-size: 48px;
    font-weight: 800;

    @media (max-width: 599px) {
      width: 104px;
      height: 104px;
      font-size: 38px;
    }
  }

  .actionGroup {
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
    padding-top: ${({ theme }) => theme.spacing(8.5)};

    @media (max-width: 599px) {
      padding-top: ${({ theme }) => theme.spacing(6)};
    }
  }

  .moreBtn {
    width: 38px;
    height: 38px;
    border: 1px solid ${({ theme }) => theme.palette.divider};
    color: ${({ theme }) => theme.palette.text.primary};

    &:hover {
      background: ${({ theme }) => theme.palette.action.hover};
    }
  }

  .editBtn {
    min-height: 38px;
    padding: ${({ theme }) => theme.spacing(0, 2)};
    border-color: ${({ theme }) => theme.palette.divider};
    border-radius: 999px;
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 800;
    text-transform: none;

    &:hover {
      border-color: ${({ theme }) => theme.palette.text.secondary};
      background: ${({ theme }) => theme.palette.action.hover};
    }
  }

  .nameBlock {
    margin-top: ${({ theme }) => theme.spacing(1.5)};

    h5 {
      color: ${({ theme }) => theme.palette.text.primary};
      font-weight: 800;
      line-height: 1.2;
    }

    p {
      color: ${({ theme }) => theme.palette.text.secondary};
      line-height: 1.35;
    }
  }

  .bioText {
    max-width: 540px;
    margin-top: ${({ theme }) => theme.spacing(1.5)};
    color: ${({ theme }) => theme.palette.text.primary};
  }

  .metaList {
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing(1.5)};
    margin-top: ${({ theme }) => theme.spacing(1.5)};

    span {
      display: inline-flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing(0.5)};
      color: ${({ theme }) => theme.palette.text.secondary};
      line-height: 1.3;
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }

  .statsList {
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing(2.5)};
    margin-top: ${({ theme }) => theme.spacing(1.5)};

    p {
      color: ${({ theme }) => theme.palette.text.secondary};
    }

    strong {
      color: ${({ theme }) => theme.palette.text.primary};
      font-weight: 800;
    }
  }

  .profileTabs {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};

    button {
      position: relative;
      min-width: 0;
      min-height: 52px;
      border-radius: 0;
      color: ${({ theme }) => theme.palette.text.secondary};
      font-weight: 700;
      text-transform: none;

      &:hover {
        background: ${({ theme }) => theme.palette.action.hover};
      }

      &.active {
        color: ${({ theme }) => theme.palette.text.primary};
      }

      &.active::after {
        position: absolute;
        right: 30%;
        bottom: 0;
        left: 30%;
        height: 4px;
        border-radius: 999px;
        background: ${({ theme }) => theme.palette.primary.main};
        content: '';
      }
    }
  }

  .postList {
    display: flex;
    flex-direction: column;
  }

  .postItem {
    display: flex;
    gap: ${({ theme }) => theme.spacing(1.5)};
    padding: ${({ theme }) => theme.spacing(2)};
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
    transition: background 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.palette.action.hover};
    }
  }

  .postAvatar {
    width: 44px;
    height: 44px;
    flex-shrink: 0;
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.secondary.main};
    font-weight: 800;
  }

  .postContent {
    min-width: 0;
    flex: 1;
  }

  .postHeader {
    flex-wrap: wrap;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(0.75)};

    p {
      color: ${({ theme }) => theme.palette.text.primary};
      font-weight: 800;
      line-height: 1.3;
    }

    span {
      color: ${({ theme }) => theme.palette.text.secondary};
      line-height: 1.3;
    }
  }

  .postText {
    margin-top: ${({ theme }) => theme.spacing(0.5)};
    color: ${({ theme }) => theme.palette.text.primary};
  }

  .postStats {
    max-width: 100%;
    margin-top: ${({ theme }) => theme.spacing(1.25)};
    color: ${({ theme }) => theme.palette.text.secondary};
    background: ${({ theme }) => theme.palette.action.selected};
    font-weight: 700;

    .MuiChip-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
