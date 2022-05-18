import React from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

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
      render={({ field }) => <EmojiRadioGroup {...field} name={name} className={className} />}
    />
  );
};

export default EmojiRadioField;
