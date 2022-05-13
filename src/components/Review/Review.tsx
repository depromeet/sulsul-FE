import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';

import Emoji from '@/components/Emoji';
import MeBadge from '@/components/commons/MeBadge';
import Badge from '@/components/commons/Badge';

interface Props extends HTMLAttributes<HTMLDivElement> {
  feel: number;
  me?: boolean;
  userName?: string;
  reviewCount?: number;
  content?: string;
  date?: string;
  tags?: string[];
  border?: boolean;
}

const Review = (props: Props) => {
  const { feel, me, userName, reviewCount, content, date, tags, border, ...attrs } = props;

  return (
    <StyledReview border={border} {...attrs}>
      <StyledEmoji feel={feel} />
      <ReviewWrapper>
        <UserAndDate>
          <User>
            {me && <MeBadge />}
            {userName}님의 {reviewCount}번째 후기
          </User>
          <Date>{date}</Date>
        </UserAndDate>
        <Content>{content}</Content>
        <BadgeContainer>
          {tags && tags.map((tag, index) => <Badge type="default" lable={tag} key={index} />)}
        </BadgeContainer>
      </ReviewWrapper>
    </StyledReview>
  );
};

export default Review;

const StyledReview = styled.div<{ border?: boolean }>`
  display: flex;
  padding: 12px 0;
  border-bottom: ${({ border }) => border && '0.25px solid #cccccc'};
`;

const StyledEmoji = styled(Emoji)`
  margin-bottom: auto;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const UserAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 13px;
`;

const User = styled.p`
  display: flex;
  gap: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.color.white};
`;

const Date = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 155.02%;
  color: ${({ theme }) => theme.color.whiteOpacity80};
`;

const Content = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 9px;
  word-break: break-word;
`;

const BadgeContainer = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;
