const BrandLogo = () => {
  return (
    <svg
      width='160'
      height='auto'
      viewBox='0 0 420 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-[130px] md:w-[160px] h-auto'
    >
      {/* Bird */}
      <path
        d='M87.2 24C78.8 28.8 69.6 32 60 33.2C68.8 28 75.2 20 78.4 10.4C70 15.2 60.8 18.4 50.8 20.4C42.8 12 31.6 6.8 19.2 6.8C-4 6.8 -12.4 36.8 5.2 50.8C-14 49.6 -31.2 40 -42.8 25.2C-48.8 35.6 -45.6 48.8 -35.2 55.6C-42.4 55.2 -48.8 53.2 -54.4 50V50.4C-54.4 66.8 -42.8 80.8 -27.2 84C-33.2 85.6 -39.6 86 -45.6 84.8C-41.2 98.4 -28.4 108.4 -13.2 108.8C-26 118.8 -42 124.8 -59.2 124.8C-63.2 124.8 -67.2 124.4 -71.2 123.6C-55.6 133.6 -36.8 139.2 -16.8 139.2C67.2 139.2 113.6 69.6 110.8 33.2C119.2 27.2 126.4 20 132 11.6C124 15.2 115.6 17.6 107.2 18.4C116 13.2 122.8 5.6 126 0C118 4.8 109.2 8 99.6 10C96.4 5.6 92 2 87.2 0V24Z'
        transform='translate(80 18) scale(0.45)'
        fill='#1D9BF0'
      />

      {/* Hashtag Bubble */}
      <circle cx='120' cy='28' r='16' fill='#1D9BF0' />

      <text
        x='120'
        y='34'
        textAnchor='middle'
        fontSize='18'
        fontFamily='Arial, sans-serif'
        fontWeight='700'
        fill='white'
      >
        #
      </text>

      {/* Brand Text */}
      <text
        x='150'
        y='78'
        fontSize='58'
        fontFamily='Poppins, Arial, sans-serif'
        fontWeight='700'
        letterSpacing='-2'
      >
        <tspan fill='#07142F'>twit-</tspan>
        <tspan fill='#1D9BF0'>hub</tspan>
      </text>
    </svg>
  );
};

export default BrandLogo;
