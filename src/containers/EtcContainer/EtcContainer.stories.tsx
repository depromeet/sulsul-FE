import { ComponentStory, ComponentMeta } from '@storybook/react';

import EtcContainer from './EtcContainer';

export default {
  title: 'Pages/기타',
  component: EtcContainer,
  args: {},
} as ComponentMeta<typeof EtcContainer>;

const Template: ComponentStory<typeof EtcContainer> = () => <EtcContainer />;

export const Default = Template.bind({});
Default.args = {};
