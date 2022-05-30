import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import { theme } from '.';

export default {
  title: 'Design System/Color',
  component: () => null,
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
} as ComponentMeta<any>;

const StyledColorWrapper = styled.div`
  margin: 8px 8px 8px 0;
  color: ${(p) => p.theme.color.whiteOpacity35};

  > *:not(:last-child) {
    margin-bottom: 4px;
  }

  > b {
    display: block;
    font-weight: bold;
    color: ${(p) => p.theme.color.whiteOpacity50};
  }
`;

const StyledColorBlock = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;

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
  padding: 16px;

  background-color: #262626;

  h1 {
    margin: 0 0 8px;
    font-size: 20px;
    font-weight: 700;
    color: ${(p) => p.theme.color.white};
  }

  h2 {
    margin: 1.4em 0 12px;
    font-size: 16px;
    font-weight: 700;
    color: ${(p) => p.theme.color.white};
  }

  h3 {
    margin: 1em 0 4px;
    border-bottom: 1px solid ${(p) => p.theme.color.whiteOpacity80};
    padding-bottom: 4px;

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
  const { color, semanticColor } = theme;

  return (
    <StyledWrapper>
      <h1>Design System : Color</h1>
      <section>
        <h2>Color</h2>
        <ColorList colors={color} namespace="white" excludeNamespace="whiteOpacity" />
        <ColorList colors={color} namespace="blue" />
        <ColorList colors={color} namespace="yellow" />
        <ColorList colors={color} namespace="red" />
        <ColorList colors={color} namespace="black" />
        <ColorList colors={color} namespace="grey" />
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
