import React from 'react';

export interface SelectOption<T = any> {
  value: T;
  label: string;
  key: React.Key;
  disabled?: boolean;
}
