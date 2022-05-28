import React from 'react';
import { useFormState } from 'react-hook-form';

import Button, { ButtonProps } from '../Button';

interface FormSubmitButtonProps extends ButtonProps {
  autoDisabled?: boolean;
}

const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({ autoDisabled = false, ...props }) => {
  const { errors } = useFormState();

  const hasError = !!Object.keys(errors).length;

  return <Button {...props} disabled={autoDisabled ? hasError : undefined} />;
};

export default FormSubmitButton;
