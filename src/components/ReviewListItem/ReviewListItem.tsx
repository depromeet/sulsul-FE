import React, { forwardRef, Ref } from 'react';
import styled from '@emotion/styled';
import { parseISO } from 'date-fns';
import { useRecoilValue } from 'recoil';

import Emoji from '@/components/Emoji';
import MeBadge from '@/components/commons/MeBadge';
import Badge from '@/components/commons/Badge';
import { IRecordsByBeer } from '@/apis/record';
import { formatDateDiff } from '@/utils/formatDateDiff';
import { $userSession } from '@/recoil/atoms';

export interface ReviewListItemProps {
  review: IRecordsByBeer;
}

const ReviewListItem = (props: ReviewListItemProps, ref: Ref<HTMLDivElement>) => {
  const {
    review: { content, feel, memberRecordDto, createdAt, flavorDtos },
  } = props;

  const user = useRecoilValue($userSession);

  return (
    <StyledReview border={true} ref={ref}>
      <StyledEmoji feel={feel} />
      <ReviewWrapper>
        <UserAndDate>
          <User>
            {user?.nickname === memberRecordDto.name && <MeBadge />}
            {memberRecordDto.name}
          </User>
          {!!createdAt && <Date>{formatDateDiff(parseISO(createdAt))}</Date>}
        </UserAndDate>
        <Content>{content}</Content>
        <BadgeContainer>
          {flavorDtos.map((tag) => (
            <Badge lable={tag.content} key={tag.id} />
          ))}
        </BadgeContainer>
      </ReviewWrapper>
    </StyledReview>
  );
};

export default forwardRef(ReviewListItem);

const StyledReview = styled.div<{ border?: boolean }>`
  display: flex;
  width: 100%;
  padding: 15px 0;
  border-bottom: ${({ border }) => border && '1px solid rgba(255, 255, 255, 0.2)'};
`;

const StyledEmoji = styled(Emoji)`
  margin-bottom: auto;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
`;

const UserAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 15px;
`;

const User = styled.p`
  display: flex;
  gap: 8px;
  ${({ theme }) => theme.fonts.Body2}
  color: ${({ theme }) => theme.color.white};
`;

const Date = styled.p`
  ${({ theme }) => theme.fonts.SubTitle5}
  color: ${({ theme }) => theme.color.whiteOpacity65};
`;

const Content = styled.p`
  ${({ theme }) => theme.fonts.Body5}
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 19px;
  word-break: break-word;
`;

const BadgeContainer = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;
