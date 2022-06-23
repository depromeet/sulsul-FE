import React from 'react';
import styled from '@emotion/styled';

import Icon from '@/components/commons/Icon';

interface EmptyRecordsProps {
  className?: string;
}

const StyledEmptyRecords = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .empty-awesome-airplane {
    position: absolute;
    bottom: -105px;
    left: 50%;
    transform: translate(-50%, 100%);
  }

  & .empty-awesome-img {
    width: 250px;
    height: auto;
    max-width: none;
  }

  &::after {
    position: absolute;
    content: ' ';
    height: 92px;
    width: 0px;
    border: 1px dashed ${({ theme }) => theme.color.whiteOpacity80};
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);
  }
`;

const EmptyRecords: React.FC<EmptyRecordsProps> = ({ className }) => {
  return (
    <StyledEmptyRecords className={className}>
      <img
        src="/images/no-record-ticket.png"
        alt="기록된 티켓 없음"
        className="empty-awesome-img"
      />
      <Icon name="AirPlaneLoading" width="20px" height="20px" className="empty-awesome-airplane" />
    </StyledEmptyRecords>
  );
};

export default EmptyRecords;
