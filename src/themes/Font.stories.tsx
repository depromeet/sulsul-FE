import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';

export default {
  title: 'Design System/Font',
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
  border-bottom: 0.1rem solid ${(p) => p.theme.semanticColor.secondary};
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const H1 = styled.p`
  ${({ theme }) => theme.fonts.H1}
`;
const H2 = styled.p`
  ${({ theme }) => theme.fonts.H2}
`;
const H3 = styled.p`
  ${({ theme }) => theme.fonts.H3}
`;
const H4 = styled.p`
  ${({ theme }) => theme.fonts.H4}
`;
const H5 = styled.p`
  ${({ theme }) => theme.fonts.H5}
`;
const H6 = styled.p`
  ${({ theme }) => theme.fonts.H6}
`;
const SubTitle1 = styled.p`
  ${({ theme }) => theme.fonts.SubTitle1}
`;
const SubTitle2 = styled.p`
  ${({ theme }) => theme.fonts.SubTitle2}
`;
const SubTitle3 = styled.p`
  ${({ theme }) => theme.fonts.SubTitle3}
`;
const SubTitle4 = styled.p`
  ${({ theme }) => theme.fonts.SubTitle4}
`;
const SubTitle5 = styled.p`
  ${({ theme }) => theme.fonts.SubTitle5}
`;
const SmallBold1 = styled.p`
  ${({ theme }) => theme.fonts.SmallBold1}
`;
const SmallBold2 = styled.p`
  ${({ theme }) => theme.fonts.SmallBold2}
`;
const SmallBold3 = styled.p`
  ${({ theme }) => theme.fonts.SmallBold3}
`;
const Abbr1 = styled.p`
  ${({ theme }) => theme.fonts.Abbr1}
`;
const Abbr2 = styled.p`
  ${({ theme }) => theme.fonts.Abbr2}
`;
const Abbr3 = styled.p`
  ${({ theme }) => theme.fonts.Abbr3}
`;
const BarlowBig = styled.p`
  ${({ theme }) => theme.fonts.BarlowBig}
`;
const BarlowSmall = styled.p`
  ${({ theme }) => theme.fonts.BarlowSmall}
`;

const Template: ComponentStory<any> = () => {
  return (
    <StyledWrapper>
      <StyledH1>Design System : Font</StyledH1>
      <StyledSection>
        <StyledH2>Pretendard</StyledH2>
        <H1>H1 Headline</H1>
        <H2>H2 Headline</H2>
        <H3>H3 Headline</H3>
        <H4>H4 Headline</H4>
        <H5>H5 Headline</H5>
        <H6>H6 Headline</H6>
        <div style={{ height: '20px' }}></div>
        <SubTitle1>SubTitle1</SubTitle1>
        <SubTitle2>SubTitle2</SubTitle2>
        <SubTitle3>SubTitle3</SubTitle3>
        <SubTitle4>SubTitle4</SubTitle4>
        <SubTitle5>SubTitle5</SubTitle5>
        <div style={{ height: '20px' }}></div>
        <SmallBold1>SmallBold1</SmallBold1>
        <SmallBold2>SmallBold2</SmallBold2>
        <SmallBold3>SmallBold3</SmallBold3>
        <div style={{ height: '20px' }}></div>
        <Abbr1>Abbr1</Abbr1>
        <Abbr2>Abbr2</Abbr2>
        <Abbr3>Abbr3</Abbr3>
      </StyledSection>
      <div style={{ height: '20px' }}></div>
      <StyledH2>Barlow Condensed</StyledH2>
      <StyledSection>
        <BarlowBig>BarlowBig</BarlowBig>
        <BarlowSmall>BarlowSmall</BarlowSmall>
      </StyledSection>
    </StyledWrapper>
  );
};

export const Default = Template.bind({});
