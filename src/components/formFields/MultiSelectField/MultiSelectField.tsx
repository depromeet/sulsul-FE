import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import MultiSelect from './MultiSelect';

import { SelectOption } from '@/types/select';

interface MultiSelectFieldProps<T = any> {
  name: string;
  options: SelectOption<T>[];
  height?: string;
}

const MultiSelectField: React.FC<MultiSelectFieldProps> = <T extends any>({
  name,
  options,
  height,
}: MultiSelectFieldProps<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <MultiSelect options={options} value={value} onChange={onChange} height={height} />
      )}
    />
  );
};

export default MultiSelectField;
