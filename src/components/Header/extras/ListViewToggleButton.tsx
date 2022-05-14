import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import BaseHeaderIconButton from './BaseIconButton';

import { GridViewIcon, ListViewIcon } from '@/assets/icon';

export type ListType = 'grid' | 'list';

interface ListViewToggleButtonProps {
  onChange?: (type: ListType) => void;
}

const StyledWrapper = styled.div`
  display: flex;

  > button:first-child {
    margin-right: 8px;
  }
`;

const ListViewToggleButton = ({ onChange = () => null }: ListViewToggleButtonProps) => {
  const [type, setType] = useState<ListType>('grid');

  useEffect(() => {
    onChange(type);
  }, [type]);

  const handleTypeChange = (value: ListType) => () => {
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
        <GridViewIcon />
      </BaseHeaderIconButton>
      <BaseHeaderIconButton
        aria-label="리스트 뷰로 보기"
        aria-checked={type === 'list'}
        iconColor={getIconColor(type === 'list')}
        onClick={handleTypeChange('list')}
      >
        <ListViewIcon />
      </BaseHeaderIconButton>
    </StyledWrapper>
  );
};

export default ListViewToggleButton;
