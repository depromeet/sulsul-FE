import React from 'react';
import styled from '@emotion/styled';
import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';

import StyledBeerTicketField from './BeerTicketField';
import BeerTicketFlight from './BeerTicketFlight';
import BeerTicketStamp from './BeerTicketStamp';

import Icon from '@/components/commons/Icon';
import { FEEL_MESSAGES } from '@/constants/Reviews';
import BeerTicketTitle from '@/components/BeerTicketTitle';
import Emoji from '@/components/Emoji';
import { IRecord } from '@/apis/record';

export const BEER_TICKET_WIDTH = 300;

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
  overflow-y: auto;

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
    padding: 16px 30px;
    width: 100%;
    display: flex;
  }

  & .ticket-has-dashed-border {
    border-bottom: 1px dashed ${({ theme }) => theme.color.grey1};
  }

  & .ticket-feel-emoji {
    margin-bottom: 8px;
  }

  & footer.beer-ticket-footer {
    height: 30px;
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
    ${({ theme }) => theme.fonts.SmallBold1}
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
    <StyledBeerTicket className={className} id={id}>
      <header className="beer-ticket-header">
        <Icon name="Logo" semanticColor="primary" size={60} />
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
      <section className="beer-ticket-middle ticket-has-dashed-border">
        <StyledBeerTicketField title="date" className="beer-ticket-date">
          {format(parseISO(record.createdAt), 'dd/LLL/yyyy', { locale: ko })}
        </StyledBeerTicketField>
        <StyledBeerTicketField title="boarding time" className="beer-ticket-date">
          {format(parseISO(record.createdAt), 'p', { locale: ko })}
        </StyledBeerTicketField>
        {type === 'stamp' && (
          <>
            <div className="beer-ticket-dot left" />
            <div className="beer-ticket-dot right" />
          </>
        )}
      </section>
      {type === 'default' ? (
        <>
          <section className="beer-ticket-middle ticket-has-dashed-border">
            <StyledBeerTicketField title="feel" className="beer-ticket-feel">
              <Emoji feel={record.feel} size={24} className="ticket-feel-emoji" />
              <p>{FEEL_MESSAGES[record.feel]}</p>
            </StyledBeerTicketField>
            <StyledBeerTicketField title="taste">
              {record.flavorDtos.map((flavor) => (
                <span key={flavor.id} className="beer-ticket-flavor">
                  {flavor.content}
                </span>
              ))}
            </StyledBeerTicketField>
            <div className="beer-ticket-dot left" />
            <div className="beer-ticket-dot right" />
          </section>
          <section className="beer-ticket-middle">
            <StyledBeerTicketField title="impression" className="beer-ticket-content">
              {record.content}
            </StyledBeerTicketField>
          </section>
        </>
      ) : (
        <section className="beer-ticket-middle">
          <BeerTicketStamp feel={record.feel} recordedAt={record.createdAt} />
        </section>
      )}
      <footer className="beer-ticket-footer">
        <Icon name="Logo" semanticColor="primary" size={60} />
      </footer>
    </StyledBeerTicket>
  );
};

export default BeerTicket;
