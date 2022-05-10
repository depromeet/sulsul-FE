import React, { useCallback, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import PhotoIconButton from '@/components/commons/PhotoIconButton';

interface ImageUploadFieldProps {
  name: string;
  className?: string;
  uploadCallback?: (data: FormData) => Promise<any>;
}

const ImageUploadField: React.FC<ImageUploadFieldProps> = ({ name, className, uploadCallback }) => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { control } = useFormContext();

  const handleClick = useCallback(() => {
    imageInputRef.current?.click();
  }, []);

  const triggerChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (...event: any[]) => void,
  ) => {
    const imageFile = e.target.files?.[0];

    if (!imageFile || !imageFile.type.startsWith('image/') || !uploadCallback) {
      onChange(e);
      return;
    }
    const imageFormData = new FormData();

    imageFormData.append('image', imageFile);
    const imageUrl = await uploadCallback(imageFormData);
    onChange(imageUrl);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <input
            {...field}
            onChange={(e) => triggerChange(e, field.onChange)}
            type="file"
            accept="image/*"
            ref={imageInputRef}
            className={className}
            hidden
          />
          <PhotoIconButton onClick={handleClick} />
        </>
      )}
    />
  );
};

export default ImageUploadField;
