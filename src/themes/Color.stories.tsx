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

const ColorList = ({
  colors,
  title,
  namespace,
  excludeNamespace,
}: {
  colors: Record<string, string>;
  title?: string;
  namespace?: string;
  excludeNamespace?: string;
}) => (
  <>
    <StyledH3>{title || namespace}</StyledH3>
    <StyledRow>
      {Object.entries(colors)
        .filter(([key]) => (namespace ? key.includes(namespace) : true))
        .filter(([key]) => (excludeNamespace ? !key.includes(excludeNamespace) : true))
        .map(([key, value]) => (
          <Color key={key} name={key} color={value} />
        ))}
    </StyledRow>
  </>
);

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
        <ColorList colors={color} namespace="black" />
        <ColorList colors={color} namespace="whiteOpacity" />
      </section>
      <section>
        <StyledH2>Semantic Color</StyledH2>
        <ColorList colors={semanticColor} namespace="background" />
        <ColorList colors={semanticColor} title="point" excludeNamespace="background" />
      </section>
    </StyledWrapper>
  );
};

export const Default = Template.bind({});
