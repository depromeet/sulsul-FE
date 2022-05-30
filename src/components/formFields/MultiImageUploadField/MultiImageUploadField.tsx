import { useCallback, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { isNil } from 'lodash';

import Icon from '@/components/commons/Icon';

interface MultiImageUploadFieldProps {
  maxLength?: number;
}

const StyledMultiImageUploadField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 136px;

  .uploaded-images {
    display: flex;
    margin: auto 0 0;
  }

  .uploaded-image {
    position: relative;
    margin: 0 0 0 10px;

    img {
      width: 80px;
      height: 80px;
      border-radius: 10px;
    }
  }

  .helper-text {
    margin: 20px 0 0;
    ${(p) => p.theme.fonts.Body4};
    color: ${(p) => p.theme.color.grey3};
  }
`;

const MOCK_IMAGE_URLS = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJAvcMkYUWruGNPzJzMxHDbs8ko50Ycz4VA&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5GxqbNiR_y_oBEhB03dAf1QS0Va944QD6g&usqp=CAU',
];

/**
 * @todo react hook form 적용
 * @todo 최대 {maxLength}개까지만 선택 가능하도록 수정
 */
const MultiImageUploadField: React.FC<MultiImageUploadFieldProps> = ({ maxLength }) => {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const [imageUrls, setImageUrls] = useState(MOCK_IMAGE_URLS);

  const handleClick = useCallback(() => {
    imageInputRef.current?.click();
  }, []);

  const handleRemoveClick = useCallback(
    (imageUrl: string) => () => {
      setImageUrls(imageUrls.filter((v) => v !== imageUrl));
    },
    [imageUrls],
  );

  return (
    <StyledMultiImageUploadField>
      <input ref={imageInputRef} type="file" accept="image/*" multiple hidden />
      <ul className="uploaded-images">
        {imageUrls.length < 2 && (
          <UploadButton onClick={handleClick} size={!imageUrls.length ? 'large' : 'small'} />
        )}
        {imageUrls.map((imageUrl, index) => (
          <li key={imageUrl} className="uploaded-image">
            <img src={imageUrl} alt={`업로드한 이미지 ${maxLength}개 중 ${index}번째`} />
            <RemoveButton onClick={handleRemoveClick(imageUrl)} />
          </li>
        ))}
      </ul>
      {!isNil(maxLength) && (
        <p className="helper-text">사진은 최대 {maxLength}장까지 첨부 할 수 있습니다.</p>
      )}
    </StyledMultiImageUploadField>
  );
};

export default MultiImageUploadField;

interface UploadButtonProps {
  onClick: () => void;
  size?: 'small' | 'large';
}

const getUploadButtonSize = (size: UploadButtonProps['size'] = 'small') => {
  return {
    small: 80,
    large: 100,
  }[size];
};

const getUploadButtonIconSize = (size: UploadButtonProps['size'] = 'small') => {
  return {
    small: 26,
    large: 33,
  }[size];
};

const StyledUploadButton = styled.button<Pick<UploadButtonProps, 'size'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => `${getUploadButtonSize(p.size)}px`};
  height: ${(p) => `${getUploadButtonSize(p.size)}px`};
  border-radius: 10px;

  background-color: ${(p) => p.theme.color.grey1};
`;

const UploadButton = ({ onClick, size = 'small' }: UploadButtonProps) => {
  return (
    <StyledUploadButton type="button" onClick={onClick} size={size}>
      <Icon name="Camera" size={getUploadButtonIconSize(size)} />
    </StyledUploadButton>
  );
};

interface RemoveButtonProps {
  onClick: () => void;
}

const StyledRemoveButton = styled.button`
  position: absolute;
  top: -6px;
  right: -6px;

  circle {
    fill: ${(p) => p.theme.semanticColor.primary};
    fill-opacity: 1;
  }
`;

const RemoveButton = ({ onClick }: RemoveButtonProps) => {
  return (
    <StyledRemoveButton type="button" onClick={onClick}>
      <Icon name="XCircle" size={20} />
    </StyledRemoveButton>
  );
};
