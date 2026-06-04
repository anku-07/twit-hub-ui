'use client';
import { alpha, styled } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import SelectArrowIcon from '../Icons/SelectArrowIcon';

// --- Styled Components ---

const SelectContainer = styled('div')`
  position: relative;
  width: 100%;
`;

const SelectLabel = styled('label')`
  display: block;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.palette.customColors.dark};
`;

const StyledSelectTrigger = styled('div')<{ isOpen: boolean; hasError?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 21px 25px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(32.5px);
  border: 1.3px solid
    ${({ theme, hasError }) => (hasError ? theme.palette.error.main : theme.palette.common.black)};
  border-radius: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: inset 0px 15px 15px ${({ theme }) => theme.palette.common.white};
`;

const SelectedValue = styled('span')`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.customColors.dark};
`;

const ArrowWrapper = styled('div')<{ isOpen: boolean }>`
  display: flex;
  transition: transform 0.3s ease;
  transform: ${p => (p.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const DropdownMenu = styled('ul')<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.palette.common.white};
  border-radius: 13px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  padding: 8px;
  margin: 0;
  list-style: none;
  z-index: 100;
  max-height: 200px;
  overflow-y: auto;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0px)' : 'translateY(-6px)')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
  transition: all 0.3s;
`;

const StyledOption = styled('li')<{ isSelected: boolean }>`
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.palette.primary.main : theme.palette.customColors.dark};
  border-radius: 8px;
  cursor: pointer;
  background: ${({ theme, isSelected }) =>
    isSelected ? alpha(theme.palette.primary.main, 0.05) : 'transparent'};
  &:hover {
    background: ${({ theme }) => alpha(theme.palette.primary.main, 0.05)};
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const HelperText = styled('p')<{ error?: boolean }>`
  margin: 6px 0 0;
  font-size: 12px;
  line-height: 1.4;
  color: ${({ theme, error }) => (error ? theme.palette.error.main : theme.palette.text.secondary)};
`;

// --- Components ---

interface IOptionProps {
  value: string | number;
  children: React.ReactNode;
  // Internal props injected by parent
  isSelected?: boolean;
  onClick?: () => void;
}

// Simple presentational component for the list items
export const Option: React.FC<IOptionProps> = ({ isSelected, onClick, children }) => (
  <StyledOption isSelected={!!isSelected} onClick={onClick}>
    {children}
  </StyledOption>
);

interface ICustomSelectProps {
  labelName?: string;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
  error?: boolean;
  helperText?: string;
  icon?: React.ReactNode;
  children: React.ReactElement<IOptionProps>[];
  className?: string;
}

const CustomSelectNew: React.FC<ICustomSelectProps> & { Option: typeof Option } = ({
  labelName,
  placeholder = 'Select option',
  value: controlledValue,
  defaultValue,
  onChange,
  error,
  helperText,
  icon,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const containerRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledValue !== undefined;
  const activeValue = isControlled ? controlledValue : internalValue;

  // Find the label of the currently selected item to display in the trigger
  const currentLabel = React.Children.toArray(children).find(
    (child): child is React.ReactElement<IOptionProps> =>
      React.isValidElement<IOptionProps>(child) && child.props.value === activeValue
  );

  // Close when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <SelectContainer ref={containerRef}>
      {labelName && <SelectLabel>{labelName}</SelectLabel>}

      <StyledSelectTrigger
        isOpen={isOpen}
        hasError={error}
        onClick={() => setIsOpen(!isOpen)}
        className={className}
      >
        <SelectedValue>{currentLabel ? currentLabel.props.children : placeholder}</SelectedValue>
        <ArrowWrapper isOpen={isOpen}>{icon || <SelectArrowIcon />}</ArrowWrapper>
      </StyledSelectTrigger>

      <DropdownMenu isOpen={isOpen}>
        {React.Children.map(children, child => {
          if (!React.isValidElement<IOptionProps>(child)) return null;

          return React.cloneElement(child, {
            isSelected: child.props.value === activeValue,
            onClick: () => {
              if (!isControlled) setInternalValue(child.props.value);
              onChange?.(child.props.value);
              setIsOpen(false);
            },
          });
        })}
      </DropdownMenu>

      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </SelectContainer>
  );
};

CustomSelectNew.Option = Option;
export default CustomSelectNew;
