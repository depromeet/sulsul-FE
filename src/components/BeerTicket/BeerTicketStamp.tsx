import React, { useMemo } from 'react';
import styled from '@emotion/styled';

import Icon from '@/components/commons/Icon-new';

interface BeerTicketStampProps {
  feel: 1 | 2 | 3 | 4 | 5;
  recordedAt: Date;
}

interface StyledBeerTicketStampProps {
  iconTop: number;
  iconLeft: number;
}

const StyledBeerTicketStamp = styled.div<StyledBeerTicketStampProps>`
  width: 100%;
  display: flex;
  justify-content: center;

  & .ticket-stamp {
    position: absolute;
    top: ${({ iconTop }) => iconTop}px;
    left: ${({ iconLeft }) => iconLeft}px;
  }
`;

const MAX_ICON_TOP = 28;
const MAX_ICON_LEFT = 180;
const SALT = 118;

const BeerTicketStamp: React.FC<BeerTicketStampProps> = ({ feel, recordedAt }) => {
  const { top, left } = useMemo(
    () => ({
      top: getHashStampLocation(recordedAt, MAX_ICON_TOP),
      left: getHashStampLocation(recordedAt, MAX_ICON_LEFT),
    }),
    [recordedAt],
  );

  return (
    <StyledBeerTicketStamp iconTop={top} iconLeft={left}>
      <Icon name="World" width="160px" height="80px" />
      <Icon name={`Stamp${feel}`} size={124} className="ticket-stamp" />
    </StyledBeerTicketStamp>
  );
};

const getHashStampLocation = (date: Date, maxOffset: number) => {
  return parseInt((date.getTime() / SALT).toFixed(0), 10) % maxOffset;
};

export default BeerTicketStamp;
