import React from 'react';
import styled from '@emotion/styled';

import FilterChipList from '../FilterChipList';

import Button from '@/components/commons/Button';

const MOCK_FILTER_VALUES = [
  '아시아',
  '필스너',
  'IPA',
  '페일에일',
  '아시아',
  '필스너',
  'IPA',
  '페일에일',
];

interface FilterFooterProps {
  onApplyClick: () => void;
}

const StyledWrapper = styled.section`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-top: 1px solid ${(p) => p.theme.semanticColor.secondary};

  background-color: ${(p) => p.theme.semanticColor.backgroundLow};

  /** 아이폰 하단 노치 영역 대응 */
  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    padding-bottom: env(safe-area-inset-bottom);
  }

  .FilterFooter__button-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 80px;

    button {
      width: 240px;
    }
  }
`;

const FilterFooter = ({ onApplyClick }: FilterFooterProps) => {
  return (
    <StyledWrapper>
      <FilterChipList currentFilterValues={MOCK_FILTER_VALUES} />
      <div className="FilterFooter__button-wrapper">
        <Button type="primary" onClick={onApplyClick}>
          필터 적용
        </Button>
      </div>
    </StyledWrapper>
  );
};

export default FilterFooter;
