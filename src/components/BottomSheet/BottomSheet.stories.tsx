import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';

import BottomSheet from './BottomSheet';

export default {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  argTypes: {
    open: { control: 'boolean', defaultValue: true },
    isFull: { control: 'boolean', defaultValue: false },
    backgroundColor: { control: 'color' },
    children: { control: 'readonly' },
    onClick: { control: 'readonly' },
  },
} as ComponentMeta<typeof BottomSheet>;

const StyledWrapper = styled.div`
  height: 60px;
  padding: 16px;
  color: ${(p) => p.theme.color.white};

  h1 {
    ${(p) => p.theme.fonts.SubTitle5};
    margin-bottom: 8px;
  }
`;

const Template: ComponentStory<typeof BottomSheet> = (args) => {
  return (
    <BottomSheet {...args}>
      <StyledWrapper>
        <h1>λ°νμνΈ π</h1>
        <p>μ€ν λ¦¬λΆμμλ onClose propμ λκ²¨μ£Όμ§ μμ dim μμ­μ ν΄λ¦­ν΄λ λ«νμ§ μμ΅λλ€ π₯²</p>
      </StyledWrapper>
    </BottomSheet>
  );
};

export const Default = Template.bind({});
Default.args = {};
