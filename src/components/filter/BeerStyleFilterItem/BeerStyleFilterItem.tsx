import styled from '@emotion/styled';

import { CheckIcon } from '@/assets/icon';

const IMAGE_WIDTH = '7rem';
const CHECK_ICON_WIDTH = '3rem';

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
  padding: 1.4rem 2rem;

  & + li {
    ${(p) => `border-top: 0.1rem solid ${p.theme.color.whiteOpacity35};`};
  }

  > *:not(:last-child) {
    margin-right: 2rem;
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
  /** 4rem -> 요소 사이 간격 합 */
  max-width: calc(100% - ${IMAGE_WIDTH} - ${CHECK_ICON_WIDTH} - 4rem);
  height: 100%;

  color: ${(p) => p.theme.color.white};

  > b {
    margin-bottom: 1rem;

    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.9rem;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  > p {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.8rem;

    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2; // 원하는 라인수
    -webkit-box-orient: vertical;
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
