import { Box, styled } from '@mui/material';

export const ExampleFeatureCardWrapper = styled(Box)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 180px;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: stretch;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(3)};
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: 8px;
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[1]};

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.spacing(2)};
  }

  .contentCol {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
  }

  .titleBlock {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)};
  }

  .eyebrowChip {
    width: fit-content;
    max-width: 100%;
    color: ${({ theme }) => theme.palette.primary.main};
    background: ${({ theme }) => theme.palette.action.selected};
    font-weight: 700;
  }

  .description {
    max-width: 620px;
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  .metricList {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing(1.5)};

    @media (max-width: 599px) {
      grid-template-columns: 1fr;
    }
  }

  .metricItem {
    min-width: 0;
    padding: ${({ theme }) => theme.spacing(1.5)};
    border-radius: 8px;
    background: ${({ theme }) => theme.palette.customColors.trackBg};
  }

  .metricLabel {
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  .actionRow {
    padding-top: ${({ theme }) => theme.spacing(1)};
  }

  .mediaCol {
    position: relative;
    min-height: 180px;
    overflow: hidden;
    border-radius: 8px;
    background: ${({ theme }) => theme.palette.customColors.trackBg};

    @media (max-width: 899px) {
      aspect-ratio: 16 / 9;
      min-height: auto;
    }
  }

  .mediaCol img {
    object-fit: cover;
  }
`;
