import styled from '@emotion/styled';

import Chip from '@/components/Chip';

interface FilterChipListPros {
  /** @todo 현재 적용된 필터값 리스트, api 구조에 따라 변경될 여지가 있습니다.  */
  currentFilterValues: string[];
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  overflow-x: auto;
  overflow-y: hidden;
`;

const FilterChipList = ({ currentFilterValues = [] }: FilterChipListPros) => {
  return (
    <StyledWrapper>
      {currentFilterValues.map((value) => (
        <Chip key={value} text={value} onClose={() => null} />
      ))}
    </StyledWrapper>
  );
};

export default FilterChipList;
