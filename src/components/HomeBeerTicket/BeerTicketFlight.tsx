import React from 'react';
import styled from '@emotion/styled';

import Icon from '@/components/commons/Icon';
import { sliceAndUpperCase } from '@/utils/string';

interface BeerTicketFlightProps {
  prevCountryNameEng: string;
  prevCountryNameKor: string;
  nextCountryNameEng: string;
  nextCountryNameKor: string;
}

const StyledBeerTicketFlight = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.grey0};
  padding: 2px 12px 7px 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .ticket-country-eng {
    font-family: 'Barlow Condensed';
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: ${({ theme }) => theme.semanticColor.primary};
    line-height: 38px;
    width: 80px;
    text-align: center;
  }

  & .ticket-country-kor {
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    color: ${({ theme }) => theme.color.grey3};
    text-align: center;
  }
`;

const BeerTicketFlight: React.FC<BeerTicketFlightProps> = ({
  prevCountryNameEng,
  prevCountryNameKor,
  nextCountryNameEng,
  nextCountryNameKor,
}) => {
  return (
    <StyledBeerTicketFlight>
      <div>
        <div className="ticket-country-eng">{sliceAndUpperCase(prevCountryNameEng, 3)}</div>
        <div className="ticket-country-kor">{prevCountryNameKor}</div>
      </div>
      <Icon name="Airplane" size={20} />
      <div>
        <div className="ticket-country-eng">{sliceAndUpperCase(nextCountryNameEng, 3)}</div>
        <div className="ticket-country-kor">{nextCountryNameKor}</div>
      </div>
    </StyledBeerTicketFlight>
  );
};

export default BeerTicketFlight;
