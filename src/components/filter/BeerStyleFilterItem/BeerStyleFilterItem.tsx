import styled from '@emotion/styled';

import { CheckIcon } from '@/assets/icon';

interface BeerStyleFilterItemProps {
  title: string;
  description: string;
  imageUrl: string;
  /** 선택 여부 (default:false) */
  isSelected?: boolean;
  /** 하단 디바이더 유무 (default:true) */
  hasDivider?: boolean;
}

const StyledWrapper = styled.li<Pick<BeerStyleFilterItemProps, 'hasDivider'>>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.4rem 2rem;
  ${(p) => (p.hasDivider ? `border-bottom: 0.1rem solid ${p.theme.color.whiteOpacity35};` : '')};

  > *:not(:last-child) {
    margin-right: 2rem;
  }

  img {
    flex-shrink: 0;
    width: 7rem;
    height: 7rem;
  }

  .check-icon {
    flex-shrink: 0;
    width: 3rem;
    height: 3rem;
    margin-left: auto;
    fill: ${(p) => p.theme.semanticColor.secondary};
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: calc(100% - 14rem);
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
  hasDivider = true,
}: BeerStyleFilterItemProps) => {
  return (
    <StyledWrapper hasDivider={hasDivider}>
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
