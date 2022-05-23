import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import Switch from '@/components/commons/Switch';

interface SelectFieldProps {
  name: string;
  className?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ name, className }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <Switch {...field} className={className} />}
    />
  );
};

export default SelectField;
