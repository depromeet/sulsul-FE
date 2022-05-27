import React from 'react';
import styled from '@emotion/styled';
import { format } from 'date-fns';

import StyledBeerTicketField from './BeerTicketField';
import BeerTicketFlight from './BeerTicketFlight';

import { theme } from '@/themes';
import Icon from '@/components/commons/Icon';
import { FEEL_MESSAGES } from '@/constants/Reviews';
import BeerTicketTitle from '@/components/BeerTicketTitle';
import { Beer } from '@/types/Beer';
import Emoji from '@/components/Emoji';

interface BeerTicketProps {
  beer: Beer;
  record: any;
}

const StyledBeerTicket = styled.div`
  width: 300px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 16px;
  overflow: hidden;

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
    display: flex;
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

const BeerTicket: React.FC<BeerTicketProps> = ({ beer, record }) => {
  return (
    <StyledBeerTicket>
      <header className="beer-ticket-header">
        <Icon name="Logo" color={theme.semanticColor.primary} width={60} height={19} />
        <span className="barlow-small">{`BR118001`}</span>
      </header>
      <BeerTicketTitle beer={beer} />
      <section className="beer-ticket-middle">
        <BeerTicketFlight
          prevCountryNameEng={record.prevCountryNameEng}
          prevCountryNameKor={record.prevCountryNameKor}
          nextCountryNameEng={record.nextCountryNameEng}
          nextCountryNameKor={record.nextCountryNameKor}
        />
      </section>
      <section className="beer-ticket-middle ticket-has-dashed-border">
        <StyledBeerTicketField title="date" className="beer-ticket-date">
          {format(record.recodedAt, 'dd/LLL/yyyy')}
        </StyledBeerTicketField>
        <StyledBeerTicketField title="boarding time" className="beer-ticket-date">
          {format(record.recodedAt, 'p')}
        </StyledBeerTicketField>
      </section>
      <section className="beer-ticket-middle ticket-has-dashed-border">
        <StyledBeerTicketField title="feel" className="beer-ticket-feel">
          <Emoji feel={record.feel} size={24} className="ticket-feel-emoji" />
          <p>{FEEL_MESSAGES[record.feel]}</p>
        </StyledBeerTicketField>
        <StyledBeerTicketField title="feel">
          {record.flavors.map((flavor) => (
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
      <footer className="beer-ticket-footer">
        <Icon name="Logo" color={theme.semanticColor.primary} width={60} height={19} />
      </footer>
    </StyledBeerTicket>
  );
};

export default BeerTicket;
