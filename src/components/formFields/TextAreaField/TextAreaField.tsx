import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import styled from '@emotion/styled';

interface TextAreaFieldProps {
  name: string;
  width?: string;
  height?: string;
  maxHeight?: string;
  placeholder?: string;
  className?: string;
}

interface StyledTextAreaProps {
  boxWidth?: string;
  boxHeight?: string;
  boxMaxHeight?: string;
}

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  background-color: ${({ theme }) => theme.color.whiteOpacity20};
  color: ${({ theme }) => theme.color.white};
  width: ${({ boxWidth }) => boxWidth || '100%'};
  height: ${({ boxHeight }) => boxHeight || 'fit-content'};
  ${({ boxMaxHeight }) => `max-height: ${boxMaxHeight};` || ''}
  padding: 16px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 160%;
  white-space: pre-wrap;

  &::placeholder {
    color: ${({ theme }) => theme.color.whiteOpacity50};
  }
`;

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  name,
  width,
  height,
  maxHeight,
  placeholder,
  className,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <StyledTextArea
          {...field}
          boxWidth={width}
          boxHeight={height}
          boxMaxHeight={maxHeight}
          placeholder={placeholder}
          className={className}
        />
      )}
    />
  );
};

export default TextAreaField;
