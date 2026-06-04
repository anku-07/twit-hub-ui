import { ICustomIconProps } from '@/typescript/interface/icons.interface';

const MessageSendIcon = ({ IconColor }: ICustomIconProps) => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.4425 4.55304L6.16396 8.21792L0.642819 6.37729C0.257434 6.24857 -0.00220328 5.88699 1.40928e-05 5.48077C0.00226064 5.07456 0.264874 4.7152 0.651747 4.59096L14.7674 0.0452006C15.103 -0.062663 15.4712 0.0258569 15.7205 0.275107C15.9697 0.524358 16.0583 0.892617 15.9504 1.22817L11.4046 15.3438C11.2804 15.7307 10.921 15.9933 10.5148 15.9956C10.1086 15.9978 9.74701 15.7381 9.61828 15.3528L7.76873 9.80486L11.4425 4.55304Z'
        fill={IconColor || 'white'}
      />
    </svg>
  );
};

export default MessageSendIcon;
