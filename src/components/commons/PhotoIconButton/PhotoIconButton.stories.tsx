import { ComponentStory, ComponentMeta } from '@storybook/react';

import PhotoIconButton from './PhotoIconButton';

export default {
  title: 'Commons/PhotoIconButton',
  component: PhotoIconButton,
  args: {},
} as ComponentMeta<typeof PhotoIconButton>;

const Template: ComponentStory<typeof PhotoIconButton> = () => <PhotoIconButton />;

export const Default = Template.bind({});
Default.args = {};
