import { Box, styled } from '@mui/material';

export const AuthWrapperStyled = styled(Box)`
  min-height: 100dvh;
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.palette.customColors.bodyBg};

  @media (max-width: 599px) {
    padding: ${({ theme }) => theme.spacing(2)};
  }

  .authShell {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1fr);
    width: 100%;
    max-width: 960px;
    min-height: 620px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.palette.divider};
    border-radius: 8px;
    background: ${({ theme }) => theme.palette.background.paper};
    box-shadow: ${({ theme }) => theme.shadows[7]};

    @media (max-width: 899px) {
      grid-template-columns: 1fr;
      min-height: auto;
    }
  }

  .authIntro {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(4)};
    min-width: 0;
    padding: ${({ theme }) => theme.spacing(5)};
    color: ${({ theme }) => theme.palette.common.white};
    background: ${({ theme }) => theme.palette.primary.main};

    @media (max-width: 899px) {
      gap: ${({ theme }) => theme.spacing(3)};
      padding: ${({ theme }) => theme.spacing(3)};
    }

    @media (max-width: 599px) {
      padding: ${({ theme }) => theme.spacing(2.5)};
    }
  }

  .authBrand {
    width: fit-content;
    max-width: 100%;
    padding: ${({ theme }) => theme.spacing(0.75, 1.5)};
    border: 1px solid ${({ theme }) => theme.palette.action.focus};
    border-radius: 8px;
    color: ${({ theme }) => theme.palette.secondary.main};
    font-weight: 800;
    line-height: 1;
  }

  .authIntroCopy {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1.5)};
    max-width: 360px;
  }

  .authIntroCopy h2 {
    color: ${({ theme }) => theme.palette.common.white};
    font-size: 34px;
    font-weight: 800;
    line-height: 1.15;

    @media (max-width: 599px) {
      font-size: 26px;
    }
  }

  .authIntroCopy p,
  .authFootnote {
    color: ${({ theme }) => theme.palette.customColors.avatarBg};
  }

  .authPanel {
    display: flex;
    min-width: 0;
    flex-direction: column;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing(5)};

    @media (max-width: 899px) {
      padding: ${({ theme }) => theme.spacing(3)};
    }

    @media (max-width: 599px) {
      padding: ${({ theme }) => theme.spacing(2.5)};
    }
  }

  .authHeader {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }

  h1 {
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 30px;
    font-weight: 800;
    line-height: 1.2;
  }

  .authHeader p {
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  .authForm {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
  }

  .authForm .MuiFormControl-root {
    gap: ${({ theme }) => theme.spacing(0.75)};
  }

  .authForm .MuiInputLabel-root {
    position: static;
    max-width: 100%;
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 14px;
    font-weight: 700;
    line-height: 1.35;
    transform: none;

    &.Mui-focused {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  .authForm .MuiInputLabel-asterisk {
    color: ${({ theme }) => theme.palette.error.main};
  }

  .authForm .MuiButton-root {
    width: 100%;
    min-height: 50px;
    margin-top: ${({ theme }) => theme.spacing(1)};
  }

  .authFooter {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(0.75)};
    padding-top: ${({ theme }) => theme.spacing(1)};
    text-align: center;
  }

  .authFooter p {
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  .authFooter a {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 800;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.palette.secondary.dark};
    }
  }

  .authFooter a:focus-visible {
    border-radius: 4px;
    outline: 2px solid ${({ theme }) => theme.palette.primary.main};
    outline-offset: 3px;
  }
`;
