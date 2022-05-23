import { ComponentStory, ComponentMeta } from '@storybook/react';

import RecordFirstStepContainer from './RecordFirstStepContainer';

export default {
  title: 'Pages/기록 페이지/RecordFirstStepContainer',
  component: RecordFirstStepContainer,
} as ComponentMeta<typeof RecordFirstStepContainer>;

const Template: ComponentStory<typeof RecordFirstStepContainer> = (args) => (
  <RecordFirstStepContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  beerName: '제주 페일 에일',
};

Default.story = {
  parameters: {
    nextRouter: {
      path: '/record?step=1',
      asPath: '/record?step=1',
    },
  },
};
