import { DetailedHTMLProps, FC, InputHTMLAttributes, useMemo } from 'react';
import styled from '@emotion/styled';
import { Controller, useFormContext } from 'react-hook-form';

interface TextFieldProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  required?: boolean;
  name: string;
}

const TextField: FC<TextFieldProps> = ({ name, required, ...props }) => {
  const { control } = useFormContext();

  const rules = useMemo(() => ({ required }), [required]);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => <StyledInput {...props} {...field} type="text" />}
    />
  );
};

export default TextField;

const StyledInput = styled.input`
  width: 240px;
  height: 40px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey2};
  margin-bottom: 12px;
  padding: 10px 0;
  ${({ theme }) => theme.fonts.SubTitle2};
  color: ${({ theme }) => theme.color.black100};
  text-align: center;

  &::placeholder {
    color: ${({ theme }) => theme.color.grey4};
  }
`;
