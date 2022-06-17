import React from 'react';
import styled from '@emotion/styled';

import Icon from '@/components/commons/Icon';

const StyledHomeSearchBar = styled.div`
  position: relative;
  ${({ theme }) => theme.fonts.Body1};
  background-color: ${({ theme }) => theme.color.whiteOpacity20};
  width: 100%;
  padding: 11px 16px 12px 16px;
  border-radius: 8px;
  cursor: pointer;

  & .home-searchbar-icon {
    position: absolute;
    top: 10px;
    right: 16px;
  }
`;

const HomeSearchBar = () => {
  return (
    <StyledHomeSearchBar>
      <input type="text" placeholder="기록할 맥주를 검색해보세요" />
      <Icon name="Search" size={20} color="white" className="home-searchbar-icon" />
    </StyledHomeSearchBar>
  );
};

export default HomeSearchBar;
