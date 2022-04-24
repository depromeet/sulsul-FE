import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import { lightTheme } from '.';

export default {
  title: 'DESIGN SYSTEM/Color',
  component: () => null,
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
} as ComponentMeta<any>;

const StyledColorWrapper = styled.div`
  margin: 0.8rem 0.8rem 0.8rem 0;
  color: ${(p) => p.theme.color.whiteOpacity35};

  > *:not(:last-child) {
    margin-bottom: 0.4rem;
  }

  > b {
    display: block;
    font-weight: bold;
    color: ${(p) => p.theme.color.whiteOpacity50};
  }
`;

const StyledColorBlock = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 0.4rem;

  background-color: ${(props) => props.color};
`;

const Color = ({ name, color }: { name: string; color: string }) => {
  return (
    <StyledColorWrapper>
      <StyledColorBlock color={color} />
      <b>{name}</b>
      <p>{color}</p>
    </StyledColorWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;

  background-color: #262626;
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
`;

const StyledH3 = styled.h3`
  margin: 1em 0 0.4rem;
  border-bottom: 0.1rem solid ${(p) => p.theme.color.whiteOpacity80};
  padding-bottom: 0.4rem;

  font-weight: bold;
  color: ${(p) => p.theme.color.white};
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Template: ComponentStory<any> = () => {
  const { color, semanticColor } = lightTheme;

  return (
    <StyledWrapper>
      <StyledH1>Design System : Color</StyledH1>
      <section>
        <StyledH2>Color</StyledH2>
        <StyledH3>white</StyledH3>
        <StyledRow>
          <Color name="white" color={color.white} />
        </StyledRow>
        <StyledH3>black</StyledH3>
        <StyledRow>
          <Color name="black100" color={color.black100} />
          <Color name="black80" color={color.black80} />
        </StyledRow>
        <StyledH3>whiteOpacity</StyledH3>
        <StyledRow>
          <Color name="whiteOpacity80" color={color.whiteOpacity80} />
          <Color name="whiteOpacity65" color={color.whiteOpacity65} />
          <Color name="whiteOpacity50" color={color.whiteOpacity50} />
          <Color name="whiteOpacity35" color={color.whiteOpacity35} />
          <Color name="whiteOpacity20" color={color.whiteOpacity20} />
        </StyledRow>
      </section>
      <section>
        <StyledH2>Semantic Color</StyledH2>
        <StyledH3>background</StyledH3>
        <StyledRow>
          <Color name="background" color={semanticColor.background} />
          <Color name="backgroundLow" color={semanticColor.backgroundLow} />
        </StyledRow>
        <StyledH3>point</StyledH3>
        <StyledRow>
          <Color name="primary" color={semanticColor.primary} />
          <Color name="secondary" color={semanticColor.secondary} />
        </StyledRow>
      </section>
    </StyledWrapper>
  );
};

export const Default = Template.bind({});
