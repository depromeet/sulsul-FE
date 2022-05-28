import { ComponentStory, ComponentMeta } from '@storybook/react';

import PrivacyPolicyContainer from './PrivacyPolicyContainer';

export default {
  title: 'Pages/PrivacyPolicyContainer',
  component: PrivacyPolicyContainer,
  args: {},
} as ComponentMeta<typeof PrivacyPolicyContainer>;

const Template: ComponentStory<typeof PrivacyPolicyContainer> = () => <PrivacyPolicyContainer />;

export const Default = Template.bind({});
Default.args = {};
