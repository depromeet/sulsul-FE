import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import EmojiRadioGroup from './EmojiRadioGroup';

interface EmojiRadioFieldProps {
  name: string;
  className?: string;
}

const EmojiRadioField: React.FC<EmojiRadioFieldProps> = ({ name, className }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur } }) => (
        <EmojiRadioGroup
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          className={className}
        />
      )}
    />
  );
};

export default EmojiRadioField;
