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
  padding: 4px 20px 8px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .ticket-country-eng {
    ${({ theme }) => theme.fonts.BarlowBig}
    color: ${({ theme }) => theme.semanticColor.primary};
    line-height: 38px;
    width: 90px;
    text-align: center;
  }

  & .ticket-country-kor {
    ${({ theme }) => theme.fonts.SmallBold3}
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
        <div className="ticket-country-eng">
          {sliceAndUpperCase(prevCountryNameEng || 'non', 3)}
        </div>
        <div className="ticket-country-kor">{prevCountryNameKor}</div>
      </div>
      <Icon name="Airplane" size={20} />
      <div>
        <div className="ticket-country-eng">
          {sliceAndUpperCase(nextCountryNameEng || 'non', 3)}
        </div>
        <div className="ticket-country-kor">{nextCountryNameKor}</div>
      </div>
    </StyledBeerTicketFlight>
  );
};

export default BeerTicketFlight;
