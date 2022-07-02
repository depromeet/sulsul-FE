import styled from '@emotion/styled';

import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';

const TeamContainer = () => {
  return (
    <StyledTeamContainer>
      <Header leftExtras={<BackButton />}>팀원 소개</Header>
      <img src="/images/beerair_member.png" width="100%" height="auto" alt="비어에어멤버" />
      <section>
        <h1 className="top-margin">
          <a href="https://linktr.ee/beerair" target="_blank" rel="noopener noreferrer">
            BeerAir가 더 궁금하시다면 클릭!
          </a>
        </h1>
      </section>
    </StyledTeamContainer>
  );
};

export default TeamContainer;

const StyledTeamContainer = styled.div`
  white-space: pre-line;
  & > section {
    padding: 0 20px;

    & > h1 {
      ${({ theme }) => theme.fonts.SubTitle1};
    }

    & > p {
      ${({ theme }) => theme.fonts.Body1};
      font-weight: 400;
    }

    & > a {
      text-decoration: none;
      ${({ theme }) => theme.fonts.Body1};
      color: white;
      text-align: center;
    }

    & > .top-margin {
      margin-top: 20px;
    }
  }
`;
