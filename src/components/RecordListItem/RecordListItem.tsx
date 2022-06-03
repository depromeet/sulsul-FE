import React from 'react';
import styled from '@emotion/styled';
import { format } from 'date-fns';

import { IRecord } from '@/apis/record';
import Icon from '@/components/commons/Icon';
import StyledBeerTicketField from '@/components/BeerTicket/BeerTicketField';

interface RecordListItemProps {
  record: IRecord;
}

interface StyledRecordListItemProps {
  ticketBackground?: string;
}

const StyledRecordListItem = styled.div<StyledRecordListItemProps>`
  position: relative;
  width: 80%;
  background-color: ${({ theme }) => theme.color.white};
  height: 120px;
  padding: 12px 18px;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.black80};

  & .record-sub-title {
    ${({ theme }) => theme.fonts.SubTitle2};
    margin-top: 6px;
    margin-bottom: 11px;
  }

  & .record-item-field-wrapper {
    display: flex;
  }

  & .beer-ticket-date {
    ${({ theme }) => theme.fonts.SmallBold3}
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
`;

const RecordListItem: React.FC<RecordListItemProps> = ({ record }) => {
  return (
    <StyledRecordListItem ticketBackground={record.imageUrl}>
      <Icon name="Logo" color="blue" width="48px" height="16px" />
      <p className="record-sub-title">{record.beerResponseDto.nameKor}</p>
      <div className="record-item-field-wrapper">
        <StyledBeerTicketField title="date" className="beer-ticket-date">
          {format(record.createdAt, 'dd/LLL/yyyy')}
        </StyledBeerTicketField>
        <StyledBeerTicketField title="boarding time" className="beer-ticket-date">
          {format(record.createdAt, 'p')}
        </StyledBeerTicketField>
      </div>
      <div className="ticket-background-img" />
    </StyledRecordListItem>
  );
};

export default RecordListItem;
