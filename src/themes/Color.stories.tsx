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

  h1 {
    margin: 0 0 0.8rem;
    font-size: 2rem;
    font-weight: 700;
    color: ${(p) => p.theme.color.white};
  }

  h2 {
    margin: 1.4em 0 1.2rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: ${(p) => p.theme.color.white};
  }

  h3 {
    margin: 1em 0 0.4rem;
    border-bottom: 0.1rem solid ${(p) => p.theme.color.whiteOpacity80};
    padding-bottom: 0.4rem;

    font-weight: bold;
    color: ${(p) => p.theme.color.white};
  }
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
    <h3>{title || namespace}</h3>
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
      <h1>Design System : Color</h1>
      <section>
        <h2>Color</h2>
        <ColorList colors={color} namespace="white" excludeNamespace="whiteOpacity" />
        <ColorList colors={color} namespace="blue" />
        <ColorList colors={color} namespace="yellow" />
        <ColorList colors={color} namespace="black" />
        <ColorList colors={color} namespace="whiteOpacity" />
      </section>
      <section>
        <h2>Semantic Color</h2>
        <ColorList colors={semanticColor} namespace="background" />
        <ColorList colors={semanticColor} title="point" excludeNamespace="background" />
      </section>
    </StyledWrapper>
  );
};

export const Default = Template.bind({});
