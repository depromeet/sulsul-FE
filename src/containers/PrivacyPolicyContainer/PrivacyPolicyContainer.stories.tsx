import { ComponentStory, ComponentMeta } from '@storybook/react';

import PrivacyPolicyContainer from './PrivacyPolicyContainer';

export default {
  title: 'Pages/개인정보 처리방침',
  component: PrivacyPolicyContainer,
  args: {},
} as ComponentMeta<typeof PrivacyPolicyContainer>;

const Template: ComponentStory<typeof PrivacyPolicyContainer> = () => <PrivacyPolicyContainer />;

export const Default = Template.bind({});
Default.args = {};
