'use client';

import { PageRightBarStyled } from '@/styles/StyledComponents/PageRightBarStyled';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Box, Button, Typography } from '@mui/material';

const PageRightBar = () => {
  const trends = [
    {
      eyebrow: 'Trending in Technology',
      title: 'Next.js 16',
      meta: '18.4K posts',
    },
    {
      eyebrow: 'Sports · Trending',
      title: 'World Cup',
      meta: '42.1K posts',
    },
    {
      eyebrow: 'Entertainment · Trending',
      title: 'New Trailer',
      meta: '9,840 posts',
    },
  ];

  const suggestions = [
    {
      name: 'Sarah Lane',
      username: '@sarahlane',
      initial: 'S',
    },
    {
      name: 'Design Daily',
      username: '@designdaily',
      initial: 'D',
    },
    {
      name: 'Code Notes',
      username: '@codenotes',
      initial: 'C',
    },
  ];

  return (
    <PageRightBarStyled>
      <Box className='searchBox'>
        <SearchIcon />
        <Typography component='span' variant='body2'>
          Search
        </Typography>
      </Box>

      <Box className='rightCard'>
        <Typography variant='h6'>What&apos;s happening</Typography>
        {trends.map(item => (
          <Box className='trendItem' key={item.title}>
            <Typography className='mutedText' variant='caption'>
              {item.eyebrow}
            </Typography>
            <Typography className='trendTitle' variant='body2'>
              {item.title}
            </Typography>
            <Typography className='mutedText' variant='caption'>
              {item.meta}
            </Typography>
          </Box>
        ))}
        <Button className='showMoreBtn' disableRipple>
          Show more
        </Button>
      </Box>

      <Box className='rightCard'>
        <Typography variant='h6'>Who to follow</Typography>
        {suggestions.map(item => (
          <Box className='followItem' key={item.username}>
            <Avatar className='followAvatar'>{item.initial}</Avatar>
            <Box className='followCopy'>
              <Typography variant='body2'>{item.name}</Typography>
              <Typography variant='caption'>{item.username}</Typography>
            </Box>
            <Button className='followBtn' variant='contained' color='primary' disableRipple>
              Follow
            </Button>
          </Box>
        ))}
      </Box>
    </PageRightBarStyled>
  );
};

export default PageRightBar;
