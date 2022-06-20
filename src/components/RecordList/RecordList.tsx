import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import { IRecord } from '@/apis';
import RecordListItem from '@/components/RecordListItem';

interface RecordListProps {
  records: IRecord[];
  lastItemRef?: any;
}

const StyledRecordList = styled.section`
  & .records-list-item {
    display: block;
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

    &:first-child::after {
      position: absolute;
      content: ' ';
      width: 20px;
      height: 20px;
      background: url('/images/airplane_top.svg') no-repeat center;
      background-size: contain;
      bottom: -5px;
      left: 8px;
      transform: translateY(100%);
    }
  }
`;

const RecordList: React.FC<RecordListProps> = ({ records, lastItemRef }) => {
  return (
    <StyledRecordList>
      {records.map((record, i) => (
        <Link href={`/record/ticket/${record.id}`} passHref key={record.id}>
          <a className="records-list-item">
            <RecordListItem
              record={record}
              ref={i === records.length - 1 ? lastItemRef : undefined}
            />
          </a>
        </Link>
      ))}
    </StyledRecordList>
  );
};

export default RecordList;
