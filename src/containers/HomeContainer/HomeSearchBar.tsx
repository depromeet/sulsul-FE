import React, { FC } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import Icon from '@/components/commons/Icon';

interface HomeSearchBarProps {
  onClick?: () => void;
  href?: string;
}

const StyledHomeSearchBar = styled.button`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.fonts.Body1};
  background-color: ${({ theme }) => theme.color.whiteOpacity20};
  width: 100%;
  padding: 11px 16px 12px 16px;
  border-radius: 8px;
  cursor: pointer;
`;

const HomeSearchBar: FC<HomeSearchBarProps> = ({ onClick, href }) => {
  const homeSearchBar = (
    <StyledHomeSearchBar type="button" {...(!href ? { onClick } : {})}>
      <input type="text" placeholder="기록할 맥주를 검색해보세요" />
      <Icon name="Search" size={20} color="white" className="home-searchbar-icon" />
    </StyledHomeSearchBar>
  );

  return href ? (
    <Link href={href}>
      <a>{homeSearchBar}</a>
    </Link>
  ) : (
    homeSearchBar
  );
};

export default HomeSearchBar;
