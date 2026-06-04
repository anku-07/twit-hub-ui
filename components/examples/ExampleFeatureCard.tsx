import assest from '@/json/assest';
import CustomButtonPrimary from '@/ui/CustomButtons/CustomButtonPrimary';
import { Box, Chip, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { ExampleFeatureCardWrapper } from './ExampleFeatureCard.styles';
import { IExampleFeatureCardMetric, IExampleFeatureCardProps } from './ExampleFeatureCard.types';

const defaultMetrics: IExampleFeatureCardMetric[] = [
  {
    label: 'Status',
    value: 'Ready',
  },
  {
    label: 'Priority',
    value: 'High',
  },
  {
    label: 'Owner',
    value: 'Team',
  },
];

export default function ExampleFeatureCard({
  eyebrow = 'Reference',
  title,
  description,
  imageSrc = assest.logo_img,
  imageAlt = 'Example feature preview',
  metrics = defaultMetrics,
  action = {
    label: 'View details',
    href: '/',
  },
}: IExampleFeatureCardProps) {
  return (
    <ExampleFeatureCardWrapper>
      <Box className='contentCol'>
        <Box className='titleBlock'>
          {eyebrow ? <Chip className='eyebrowChip' label={eyebrow} size='small' /> : null}
          <Typography variant='h3'>{title}</Typography>
          <Typography className='description' variant='body1'>
            {description}
          </Typography>
        </Box>

        {metrics.length > 0 ? (
          <Box className='metricList' aria-label='Example metrics'>
            {metrics.map(metric => (
              <Box className='metricItem' key={`${metric.label}-${metric.value}`}>
                <Typography className='metricLabel' variant='caption'>
                  {metric.label}
                </Typography>
                <Typography variant='h6'>{metric.value}</Typography>
              </Box>
            ))}
          </Box>
        ) : null}

        {action ? (
          <Stack className='actionRow' direction='row'>
            <CustomButtonPrimary
              aria-label={action.ariaLabel || action.label}
              disabled={action.disabled}
              href={action.href}
              variant='contained'
              color='primary'
              buttonType='small'
            >
              {action.label}
            </CustomButtonPrimary>
          </Stack>
        ) : null}
      </Box>

      <Box className='mediaCol'>
        <Image src={imageSrc} alt={imageAlt} fill sizes='(max-width: 899px) 100vw, 180px' />
      </Box>
    </ExampleFeatureCardWrapper>
  );
}
