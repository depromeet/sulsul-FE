import React from 'react';
import styled from '@emotion/styled';

import { IBeer } from '@/apis';
import Icon from '@/components/commons/Icon-new';
import { sliceAndUpperCase } from '@/utils/string';

type TicketType = 'default' | 'form';

interface BeerTicketTitleProps {
  beer: IBeer;
  type?: TicketType;
  background?: string;
}

interface StyledBeerTicketTitleProps {
  ticketType: TicketType;
  ticketBackground?: string;
}

const StyledBeerTicketTitle = styled.div<StyledBeerTicketTitleProps>`
  position: relative;
  background: ${({ theme }) => theme.semanticColor.primary};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: ${({ ticketType }) => (ticketType === 'default' ? '144' : '180')}px;
  padding: ${({ ticketType }) => (ticketType === 'default' ? '24px 24px 20px 24px' : '20px')};
  display: flex;
  flex-direction: column;

  & > .ticket-main-title {
    display: flex;
    align-items: flex-end;
    margin: 10px 0 ${({ ticketType }) => (ticketType === 'default' ? '6' : '18')}px;

    & .ticket-country {
      font-weight: 900;
      font-size: ${({ ticketType }) => (ticketType === 'default' ? '26' : '36')}px;
      ${({ ticketType }) => (ticketType === 'default' ? '' : 'line-height: 30px;')}
    }

    & .ticket-detail {
      margin-left: 8px;
      color: ${({ theme }) => theme.color.whiteOpacity65};
      font-weight: 700;
      font-size: 10px;

      & > .ticket-detail-split-dot {
        margin: 0 4px;
      }
    }
  }

  & > .ticket-background-img {
    ${({ ticketBackground }) =>
      ticketBackground
        ? `
    background-image: url(${ticketBackground});
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-repeat: no-repeat;
    background-position: right;
    mask-image: linear-gradient(253.61deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 65.72%);`
        : ''}
  }

  & > .ticket-beer-name {
    display: inline-block;
    width: 60%;
    font-weight: 700;
    font-size: ${({ ticketType }) => (ticketType === 'default' ? '16' : '20')}px;
    line-height: 140%;
    word-break: keep-all;
    text-align: left;
  }
`;

const BeerTicketTitle: React.FC<BeerTicketTitleProps> = ({
  type = 'default',
  background,
  beer,
}) => {
  return (
    <StyledBeerTicketTitle ticketType={type} ticketBackground={background}>
      {background && <div className="ticket-background-img" />}
      <div>
        <Icon name="Airplane" size={type === 'default' ? 18 : 20} color="whiteOpacity35" />
      </div>
      <div className="ticket-main-title">
        <span className="ticket-country">{sliceAndUpperCase(beer?.country?.nameEng || '', 3)}</span>
        <div className="ticket-detail">
          {`${beer?.alcohol?.toFixed(1)}%`}
          <span className="ticket-detail-split-dot">{'•'}</span>
          {beer?.type?.nameKor}
        </div>
      </div>
      <span className="ticket-beer-name">{beer?.nameKor}</span>
    </StyledBeerTicketTitle>
  );
};

export default BeerTicketTitle;
