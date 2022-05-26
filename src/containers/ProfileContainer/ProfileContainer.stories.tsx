import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfileContainer from './ProfileContainer';

export default {
  title: 'Pages/프로필',
  component: ProfileContainer,
  argTypes: {
    nickname: { control: 'text', name: 'nickname' },
    email: { control: 'text', name: 'email' },
    drinkedBeerCount: { control: 'number' },
    TicketCount: { control: 'number' },
    TravelCount: { control: 'number' },
    likedBeerCount: { control: 'number' },
    requestBeerCount: { control: 'number' },
  },
  args: {
    nickname: '만만수',
    email: 'gywls00100@gmail.com',
    drinkedBeerCount: 0,
    TicketCount: 0,
    TravelCount: 0,
    likedBeerCount: 0,
    requestBeerCount: 0,
  },
} as ComponentMeta<typeof ProfileContainer>;

const Template: ComponentStory<typeof ProfileContainer> = (args) => <ProfileContainer {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.story = {
  parameters: {
    nextRouter: {
      path: '/profile',
      asPath: '/profile',
    },
  },
};
