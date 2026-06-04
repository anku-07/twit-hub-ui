'use client';

import { Box, styled, TextField } from '@mui/material';
import { DesktopTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ClockIcon from '../Icons/ClockIcon';

interface ITimePickerProps {
  placeholder?: string;
  className?: string;
  adormentIcon?: React.ReactNode;
}

const CustomTimePicker = ({
  placeholder,
  className,
  adormentIcon = <ClockIcon />,
}: ITimePickerProps) => {
  return (
    <CustomTimePickerStyle className={className}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopTimePicker
          enableAccessibleFieldDOMStructure={false}
          slots={{
            openPickerIcon: () => <>{adormentIcon}</>,
            textField: TextField,
          }}
          slotProps={{
            textField: {
              placeholder: placeholder,
            },
            openPickerButton: {
              disableRipple: true,
              disableFocusRipple: true,
            },
            desktopPaper: {
              className: 'custom-timepicker-paper',
            },
          }}
        />
      </LocalizationProvider>
    </CustomTimePickerStyle>
  );
};

export default CustomTimePicker;

export const CustomTimePickerStyle = styled(Box)`
  .MuiFormControl-root {
    width: 100%;
    .MuiInputBase-root {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.palette.common.black};
      border-radius: 16px;
      padding: 15px 20px;
      width: 100%;
      color: ${({ theme }) => theme.palette.common.black};
      font-size: 18px;
      font-weight: 400;
      opacity: 1;
      font-family: 'Google Sans', sans-serif;

      input {
        padding: 0;
        color: ${({ theme }) => theme.palette.common.black};
        opacity: 1 !important;
        font-size: 18px;
        font-weight: 400;
        font-family: 'Google Sans', sans-serif;

        &::placeholder {
          color: ${({ theme }) => theme.palette.common.black};
          opacity: 1 !important;
        }
      }

      .MuiInputAdornment-root {
        button {
          margin: 0;
          padding: 0;
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;

          &:hover {
            background-color: transparent;
          }
        }

        svg {
          position: absolute;
          right: 20px;
        }
      }

      fieldset {
        border: none;
      }
    }
  }
`;
