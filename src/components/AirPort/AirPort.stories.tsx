import { ComponentStory, ComponentMeta } from '@storybook/react';

import AirPort from './AirPort';

export default {
  title: 'Components/AirPort',
  component: AirPort,
  argTypes: {},
} as ComponentMeta<typeof AirPort>;

const Template: ComponentStory<typeof AirPort> = (args) => <AirPort {...args} />;

export const DefaultAirPort = Template.bind({});
DefaultAirPort.args = {
  startCountry: {
    nameKor: 'FRA',
    nameEng: '독일',
  },
  endCountry: {
    nameKor: 'KOR',
    nameEng: '대한민국',
  },
};
