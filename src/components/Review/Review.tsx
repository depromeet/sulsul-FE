import styled from '@emotion/styled';
import { format } from 'date-fns';

import Emoji from '@/components/Emoji';
import MeBadge from '@/components/commons/MeBadge';
import Badge from '@/components/commons/Badge';
import { IRecordByBeer } from '@/apis/record';

export interface ReviewProps {
  review: IRecordByBeer;
}

const Review = ({ review }: ReviewProps) => {
  const { content, feel, memberRecordDto, createdAt, updatedAt, flavorDtos } = review;

  return (
    <StyledReview border={true}>
      <StyledEmoji feel={feel} />
      <ReviewWrapper>
        <UserAndDate>
          <User>
            <MeBadge />
            {memberRecordDto.name}
          </User>
          <Date>{format(createdAt, 'dd/LLL/yyyy')}</Date>
        </UserAndDate>
        <Content>{content}</Content>
        <BadgeContainer>
          {flavorDtos.map((tag, index) => (
            <Badge type="default" lable={tag} key={index} />
          ))}
        </BadgeContainer>
      </ReviewWrapper>
    </StyledReview>
  );
};

export default Review;

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
