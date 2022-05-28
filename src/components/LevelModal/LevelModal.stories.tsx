import { ComponentStory, ComponentMeta } from '@storybook/react';

import LevelModal from './LevelModal';

export default {
  title: 'Components/LevelModal',
  component: LevelModal,
  args: {},
} as ComponentMeta<typeof LevelModal>;

const Template: ComponentStory<typeof LevelModal> = ({ ...args }) => <LevelModal {...args} />;

export const Default = Template.bind({});
Default.args = { isLevelModalOpen: true };
