import styled from '@emotion/styled';

import Icon from '@/components/commons/Icon';

export type ListViewType = 'grid' | 'list';

interface ListViewToggleButtonProps {
  type: ListViewType;
  onChange?: (type: ListViewType) => void;
}

const StyledWrapper = styled.div`
  display: flex;

  > butto:first-of-type {
    margin-right: 8px;
  }
`;

const ListViewToggleButton = ({
  type = 'grid',
  onChange = () => null,
}: ListViewToggleButtonProps) => {
  const handleTypeChange = (value: ListViewType) => () => {
    onChange(value);
  };

  const getIconColor = (isSelected: boolean) => {
    return isSelected ? 'white' : 'whiteOpacity35';
  };

  return (
    <StyledWrapper>
      <button type="button" aria-label="그리드 뷰로 보기" onClick={handleTypeChange('grid')}>
        <Icon name="GridView" color={getIconColor(type === 'grid')} />
      </button>
      <button type="button" aria-label="리스트 뷰로 보기" onClick={handleTypeChange('list')}>
        <Icon name="ListView" color={getIconColor(type === 'list')} />
      </button>
    </StyledWrapper>
  );
};

export default ListViewToggleButton;
