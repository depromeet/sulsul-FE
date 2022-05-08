import React, { useCallback } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import styled from '@emotion/styled';

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
  const {
    control,
    setError,
    formState: { errors },
    clearErrors,
  } = useFormContext();

  const error = errors?.[name];

  const handleSetError = useCallback(
    (errorMessage: string) => {
      setError(name, { message: errorMessage });
    },
    [name, setError],
  );

  const handleClearError = useCallback(() => {
    clearErrors(name);
  }, [name, clearErrors]);

  return (
    <StyledMultiSelectField>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <MultiSelect
            options={options}
            value={value}
            onChange={onChange}
            height={height}
            maxLength={maxLength}
            setError={handleSetError}
            clearError={handleClearError}
          />
        )}
      />
      {error && <ErrorMessage message={error?.message} />}
    </StyledMultiSelectField>
  );
};

export default MultiSelectField;
