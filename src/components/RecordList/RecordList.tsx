import React from 'react';
import styled from '@emotion/styled';

import { IRecord } from '@/apis';
import RecordListItem from '@/components/RecordListItem';

interface RecordListProps {
  records: IRecord[];
  lastItemRef?: any;
}

const StyledRecordList = styled.section`
  & > .records-list-item {
    margin-bottom: 36px;
    position: relative;

    &:not(:last-child)::before {
      position: absolute;
      content: ' ';
      width: 0px;
      height: 63px;
      border: 1px dashed ${({ theme }) => theme.color.whiteOpacity80};
      bottom: 15px;
      left: 17px;
      transform: translateY(100%);
    }
  }
`;

const RecordList: React.FC<RecordListProps> = ({ records, lastItemRef }) => {
  return (
    <StyledRecordList>
      {records.map((record, i) => (
        <RecordListItem
          key={record.id}
          record={record}
          className="records-list-item"
          ref={i === records.length - 1 ? lastItemRef : undefined}
        />
      ))}
    </StyledRecordList>
  );
};

export default RecordList;
