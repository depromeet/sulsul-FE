import React, { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import styled from '@emotion/styled';
import { isNil } from 'lodash';

import MultiSelect from './MultiSelect';

import { SelectOption } from '@/types/select';
import ErrorMessage from '@/components/ErrorMessage';

interface MultiSelectFieldProps<T = any> {
  name: string;
  options: SelectOption<T>[];
  height?: string;
  maxLength?: number;
}

const StyledMultiSelectField = styled.div``;

const MultiSelectField: React.FC<MultiSelectFieldProps> = <T extends any>({
  name,
  options,
  height,
  maxLength,
}: MultiSelectFieldProps<T>) => {
  const { control } = useFormContext();

  const rules = useMemo(
    () =>
      !isNil(maxLength)
        ? { validate: (value: T[]) => (value?.length || 0) <= maxLength }
        : undefined,
    [maxLength],
  );

  return (
    <StyledMultiSelectField>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange, onBlur } }) => (
          <MultiSelect
            options={options}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            height={height}
            maxLength={maxLength}
          />
        )}
      />
    </StyledMultiSelectField>
  );
};

export default MultiSelectField;
