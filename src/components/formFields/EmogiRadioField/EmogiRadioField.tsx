import React from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import EmojiRadioGroup from './EmojiRadioGroup';

interface EmogiRadioFieldProps {
  name: string;
  className?: string;
}

const EmogiRadioField: React.FC<EmogiRadioFieldProps> = ({ name, className }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <EmojiRadioGroup {...field} name={name} className={className} />}
    />
  );
};

export default EmogiRadioField;
