import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';

export default {
  title: 'DESIGN SYSTEM/Font',
  component: () => null,
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
} as ComponentMeta<any>;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;

  background-color: #262626;
  color: white;
`;

const StyledH1 = styled.h1`
  margin: 0 0 0.8rem;
  font-size: 2rem;
  font-weight: 700;
  color: ${(p) => p.theme.color.white};
`;

const StyledH2 = styled.h2`
  margin: 1.4em 0 1.2rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${(p) => p.theme.color.white};
  padding-bottom: 0.4rem;
  border-bottom: 0.1rem solid ${(p) => p.theme.color.whiteOpacity80};
`;

const typographyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledMainTitle = styled.h1`
  ${({ theme }) => theme.fonts.mainTitle}
`;
const StyledSubTitle = styled.h1`
  ${({ theme }) => theme.fonts.subTitle}
`;
const StyledSubTitleEng = styled.h1`
  ${({ theme }) => theme.fonts.subTitleEng}
`;
const StyledContentTitle = styled.h1`
  ${({ theme }) => theme.fonts.contentTitle}
`;
const StyledContent = styled.h1`
  ${({ theme }) => theme.fonts.content}
`;
const StyledBeerNameGrid = styled.h1`
  ${({ theme }) => theme.fonts.beerNameGrid}
`;
const StyledBeerNameList = styled.h1`
  ${({ theme }) => theme.fonts.beerNameList}
`;

const Template: ComponentStory<any> = () => {
  return (
    <StyledWrapper>
      <StyledH1>Design System : Font</StyledH1>
      <section>
        <StyledH2>Font</StyledH2>
        <StyledMainTitle>메인 타이틀</StyledMainTitle>
        <StyledSubTitle>서브 타이틀</StyledSubTitle>
        <StyledSubTitleEng>서브 타이틀 - 영문</StyledSubTitleEng>
        <StyledContentTitle>본문 타이틀</StyledContentTitle>
        <StyledContent>본문</StyledContent>
        <StyledBeerNameGrid>beer name_grid</StyledBeerNameGrid>
        <StyledBeerNameList>beer name_list</StyledBeerNameList>
      </section>
      <section>
        <StyledH2>Semantic Font</StyledH2>
        <div>준비중...</div>
      </section>
    </StyledWrapper>
  );
};

export const Default = Template.bind({});
