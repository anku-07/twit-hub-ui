'use client';

import { Box, styled, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CalenderIcon from '../Icons/CalenderIcon';

interface IdatePickerProps {
  placeholder?: string;
  className?: string;
  adormentIcon?: React.ReactNode;
}

const CustomDatePicker = ({
  placeholder,
  className,
  adormentIcon = <CalenderIcon />,
}: IdatePickerProps) => {
  return (
    <CustomDatePickerStyle className={className}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
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
              className: 'custom-datepicker-paper',
            },
          }}
        />
      </LocalizationProvider>
    </CustomDatePickerStyle>
  );
};

export default CustomDatePicker;

export const CustomDatePickerStyle = styled(Box)`
  .MuiFormControl-root {
    width: 100%;
    .MuiInputBase-root {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.palette.common.black};
      border-radius: 16px;
      /* min-height: 54px; */
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
        opacity: 1;
        font-size: 18px;
        font-weight: 400;
        font-family: 'Google Sans', sans-serif;

        &::placeholder {
          color: ${({ theme }) => theme.palette.common.black};
          opacity: 1;
        }
      }

      .MuiInputAdornment-root {
        button {
          margin: 0;
          padding: 0;
          position: absolute;
          right: 20px;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }

        svg {
          position: absolute;
          right: 0;
        }
      }

      fieldset {
        border: none;
      }
    }
  }
`;
