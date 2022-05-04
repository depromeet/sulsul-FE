import React from 'react';
import styled from '@emotion/styled';

import { CheckIcon } from '@/assets/icon';

const StyledWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  border-radius: 6px;
  overflow: hidden;

  > img {
    width: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(255, 217, 83, 0.5);

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 30px;
    height: 30px;
    fill: ${(p) => p.theme.color.white};
  }
`;

const Name = styled.p<Pick<BeerCountryFilterItemProps, 'isSelected'>>`
  width: 100%;
  margin-top: 10px;

  color: ${(p) => (p.isSelected ? p.theme.semanticColor.secondary : p.theme.color.white)};
  font-size: 14px;
  line-height: 16.8px;
  font-weight: 500;
  text-align: center;
`;

interface BeerCountryFilterItemProps {
  id: number;
  name: string;
  flagImageUrl: string;
  /** 선택 여부 (default:false) */
  isSelected?: boolean;
  onClick: () => void;
}

const BeerCountryFilterItem: React.FC<BeerCountryFilterItemProps> = ({
  name,
  flagImageUrl,
  isSelected = false,
  onClick = () => null,
}) => {
  return (
    <StyledWrapper onClick={onClick}>
      <ImageWrapper>
        <img src={flagImageUrl} alt="" />
        {isSelected && (
          <Overlay>
            <CheckIcon />
          </Overlay>
        )}
      </ImageWrapper>
      <Name isSelected={isSelected}>{name}</Name>
    </StyledWrapper>
  );
};

export default BeerCountryFilterItem;
