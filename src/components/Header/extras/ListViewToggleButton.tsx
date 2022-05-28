import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import BaseHeaderIconButton from './BaseIconButton';

import Icon from '@/components/commons/Icon';

export type ListViewType = 'grid' | 'list';

interface ListViewToggleButtonProps {
  defaultType?: ListViewType;
  onChange?: (type: ListViewType) => void;
}

const StyledWrapper = styled.div`
  display: flex;

  > button:first-child {
    margin-right: 8px;
  }
`;

const ListViewToggleButton = ({
  defaultType = 'grid',
  onChange = () => null,
}: ListViewToggleButtonProps) => {
  const [type, setType] = useState<ListViewType>(defaultType);

  useEffect(() => {
    onChange(type);
  }, [type]);

  const handleTypeChange = (value: ListViewType) => () => {
    setType(value);
  };

  const getIconColor = (isSelected: boolean) => {
    return isSelected ? 'white' : 'whiteOpacity35';
  };

  return (
    <StyledWrapper>
      <BaseHeaderIconButton
        aria-label="그리드 뷰로 보기"
        aria-checked={type === 'grid'}
        iconColor={getIconColor(type === 'grid')}
        onClick={handleTypeChange('grid')}
      >
        <Icon name="GridView" />
      </BaseHeaderIconButton>
      <BaseHeaderIconButton
        aria-label="리스트 뷰로 보기"
        aria-checked={type === 'list'}
        iconColor={getIconColor(type === 'list')}
        onClick={handleTypeChange('list')}
      >
        <Icon name="ListView" />
      </BaseHeaderIconButton>
    </StyledWrapper>
  );
};

export default ListViewToggleButton;
