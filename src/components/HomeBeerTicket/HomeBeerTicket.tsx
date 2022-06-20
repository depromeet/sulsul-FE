import React from 'react';
import styled from '@emotion/styled';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

import StyledBeerTicketField from './BeerTicketField';
import BeerTicketFlight from './BeerTicketFlight';
import BeerTicketStamp from './BeerTicketStamp';

import Icon from '@/components/commons/Icon';
import BeerTicketTitle from '@/components/BeerTicketTitle';
import { IRecord } from '@/apis/record';

export const BEER_TICKET_WIDTH = 250;

interface BeerTicketProps {
  record: IRecord;
  type?: 'default' | 'stamp';
  id?: string;
  className?: string;
}

const StyledBeerTicket = styled.article`
  width: ${BEER_TICKET_WIDTH}px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 16px;
  overflow-x: hidden;
  overflow-y: hidden;

  & .beer-ticket-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px 24px 10px 24px;

    & .barlow-small {
      ${({ theme }) => theme.fonts.BarlowSmall}
      color: ${({ theme }) => theme.semanticColor.primary};
    }
  }

  & .beer-ticket-middle {
    position: relative;
    padding: 12px 14px;
    display: flex;

    &.over-padding {
      padding: 0 30px 10px 30px;
    }
  }

  & .ticket-has-dashed-border {
    border-bottom: 1px dashed ${({ theme }) => theme.color.grey1};
  }

  & .ticket-feel-emoji {
    margin-bottom: 8px;
  }

  & footer.beer-ticket-footer {
    display: flex;
    justify-content: center;
    padding-bottom: 16px;
  }

  & .beer-ticket-flavor {
    ${({ theme }) => theme.fonts.SmallBold2}
    color: ${({ theme }) => theme.color.black100};
    display: block;
    margin-top: 4px;
  }

  & .beer-ticket-feel {
    ${({ theme }) => theme.fonts.SmallBold2}
    color: ${({ theme }) => theme.color.black100};
  }

  & .beer-ticket-date {
    ${({ theme }) => theme.fonts.SmallBold2}
    color: ${({ theme }) => theme.color.black100};
  }

  & .beer-ticket-content {
    ${({ theme }) => theme.fonts.Body5};
    color: ${({ theme }) => theme.color.grey4};
  }

  & .beer-ticket-dot {
    position: absolute;
    bottom: 0;
    background-color: ${({ theme }) => theme.color.black100};
    border-radius: 10px;
    width: 20px;
    height: 20px;

    &.left {
      left: 0;
      transform: translate(-50%, 50%);
    }

    &.right {
      right: 0;
      transform: translate(50%, 50%);
    }
  }
`;

const BeerTicket: React.FC<BeerTicketProps> = ({
  record,
  type = 'default',
  id = '',
  className,
}) => {
  return (
    <Link href={`/record/ticket/${record.id}`} passHref>
      <a>
        <StyledBeerTicket className={className} id={id}>
          <header className="beer-ticket-header">
            <Icon name="Logo" semanticColor="primary" width="54px" height="12px" />
            <span className="barlow-small">{`BR118${record.id.toString().padStart(3, '0')}`}</span>
          </header>
          <BeerTicketTitle beer={record.beerResponseDto} background={record.imageUrl} />
          <section className="beer-ticket-middle">
            <BeerTicketFlight
              prevCountryNameEng={record.startCountryEng}
              prevCountryNameKor={record.startCountryKor}
              nextCountryNameEng={record.endCountryEng}
              nextCountryNameKor={record.endCountryKor}
            />
          </section>
          <section className="beer-ticket-middle ticket-has-dashed-border over-padding">
            <StyledBeerTicketField title="date" className="beer-ticket-date">
              {format(parseISO(record.createdAt), 'dd/LLL/yyyy')}
            </StyledBeerTicketField>
            <StyledBeerTicketField title="boarding time" className="beer-ticket-date">
              {format(parseISO(record.createdAt), 'p')}
            </StyledBeerTicketField>
            {type === 'stamp' && (
              <>
                <div className="beer-ticket-dot left" />
                <div className="beer-ticket-dot right" />
              </>
            )}
          </section>
          <section className="beer-ticket-middle">
            <BeerTicketStamp feel={record.feel} recordedAt={record.createdAt} />
          </section>
          <footer className="beer-ticket-footer">
            <Icon name="Logo" semanticColor="primary" size={60} />
          </footer>
        </StyledBeerTicket>
      </a>
    </Link>
  );
};

export default BeerTicket;
