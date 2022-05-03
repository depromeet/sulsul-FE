import styled from '@emotion/styled';

import { CheckIcon } from '@/assets/icon';
import { ellipsis } from '@/styles/common';

const IMAGE_WIDTH = '70px';
const CHECK_ICON_WIDTH = '30px';

interface BeerStyleFilterItemProps {
  title: string;
  description: string;
  imageUrl: string;
  /** 선택 여부 (default:false) */
  isSelected?: boolean;
}

const StyledWrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 20px;

  & + li {
    ${(p) => `border-top: 1px solid ${p.theme.color.whiteOpacity35};`};
  }

  > *:not(:last-child) {
    margin-right: 20px;
  }

  img {
    flex-shrink: 0;
    width: ${IMAGE_WIDTH};
    height: ${IMAGE_WIDTH};
  }

  .check-icon {
    flex-shrink: 0;
    width: ${CHECK_ICON_WIDTH};
    height: ${CHECK_ICON_WIDTH};
    margin-left: auto;
    fill: ${(p) => p.theme.semanticColor.secondary};
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: calc(100% - ${IMAGE_WIDTH} - ${CHECK_ICON_WIDTH} - 40px);
  height: 100%;

  color: ${(p) => p.theme.color.white};

  > b {
    margin-bottom: 10px;

    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    ${ellipsis(1)};
  }

  > p {
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;

    ${ellipsis(2)};
  }
`;

const BeerStyleFilterItem = ({
  title,
  description,
  imageUrl,
  isSelected,
}: BeerStyleFilterItemProps) => {
  return (
    <StyledWrapper>
      <img src={imageUrl} alt="" />
      <StyledInfo>
        <b>{title}</b>
        <p className="description">{description} </p>
      </StyledInfo>
      {isSelected && <CheckIcon className="check-icon" />}
    </StyledWrapper>
  );
};

export default BeerStyleFilterItem;
