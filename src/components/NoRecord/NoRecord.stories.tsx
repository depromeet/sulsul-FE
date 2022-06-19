import { ComponentStory, ComponentMeta } from '@storybook/react';

import NoRecord from './NoRecord';

export default {
  title: 'Components/NoRecord',
  component: NoRecord,
} as ComponentMeta<typeof NoRecord>;

const Template: ComponentStory<typeof NoRecord> = () => <NoRecord />;

export const Default = Template.bind({});
Default.args = {};
