import React, { useCallback, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import styled from '@emotion/styled';

import PhotoIconButton from '@/components/commons/PhotoIconButton';

interface ImageUploadFieldProps {
  name: string;
  title?: string;
  className?: string;
  uploadCallback?: (data: FormData) => Promise<any>;
}

const StyledImageUploadField = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: column;

  & > .upload-field-title {
    color: ${({ theme }) => theme.color.white};
    margin-top: 8px;
    font-weight: 700;
    font-size: 12px;
  }
`;

const ImageUploadField: React.FC<ImageUploadFieldProps> = ({
  name,
  title,
  className,
  uploadCallback,
}) => {
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
        <StyledImageUploadField>
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
          <span className="upload-field-title">{title}</span>
        </StyledImageUploadField>
      )}
    />
  );
};

export default ImageUploadField;
