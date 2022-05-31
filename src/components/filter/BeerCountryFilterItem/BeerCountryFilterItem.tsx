import React from 'react';
import styled from '@emotion/styled';

import { ellipsis } from '@/styles/common';
import { ICountry } from '@/apis';
import Icon from '@/components/commons/Icon';

const StyledWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  margin: 7px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  border-radius: 6px;
  overflow: hidden;

  background-color: ${(p) => p.theme.color.grey1};

  > img {
    width: 100%;
    height: 100%;
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

  ${ellipsis()};
`;

interface BeerCountryFilterItemProps extends ICountry {
  /** 선택 여부 (default:false) */
  isSelected?: boolean;
  onClick: () => void;
}

const BeerCountryFilterItem: React.FC<BeerCountryFilterItemProps> = ({
  nameKor,
  imageUrl,
  isSelected = false,
  onClick = () => null,
}) => {
  return (
    <StyledWrapper aria-checked={isSelected} onClick={onClick}>
      <ImageWrapper>
        <img src={imageUrl} alt="" />
        {isSelected && (
          <Overlay>
            <Icon name="Check" size={30} color="white" />
          </Overlay>
        )}
      </ImageWrapper>
      <Name isSelected={isSelected}>{nameKor}</Name>
    </StyledWrapper>
  );
};

export default BeerCountryFilterItem;
